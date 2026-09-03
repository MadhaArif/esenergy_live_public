import { NextResponse } from 'next/server';
import { createServerClient, isSupabaseConfigured } from '@/lib/supabase/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const monthlyBill = Number(body.monthlyBill);
    const systemLabel = body.systemLabel ? String(body.systemLabel).slice(0, 40) : null;
    const estimatedSavings = body.estimatedSavings != null ? Number(body.estimatedSavings) : null;

    if (!monthlyBill || Number.isNaN(monthlyBill) || monthlyBill < 0) {
      return NextResponse.json({ error: 'A valid monthly bill is required.' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: 'Quote storage is not configured yet. Add Supabase keys to .env.local.' },
        { status: 503 }
      );
    }

    const supabase = createServerClient();
    const { error } = await supabase.from('quote_inquiries').insert({
      monthly_bill: monthlyBill,
      system_label: systemLabel,
      estimated_savings: estimatedSavings,
      payload: {
        systemKW: body.systemKW ?? null,
        annualSavings: body.annualSavings ?? null,
        paybackYears: body.paybackYears ?? null,
        source: body.source || 'calculator',
      },
    });

    if (error) {
      console.error('Quote insert failed:', error.message);
      return NextResponse.json({ error: 'Could not save quote estimate.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Quote route error:', err);
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 });
  }
}
