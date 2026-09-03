import { NextResponse } from 'next/server';
import { createServerClient, isSupabaseConfigured } from '@/lib/supabase/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const phone = String(body.phone || '').trim();
    const sector = ['residential', 'commercial', 'industrial'].includes(body.sector)
      ? body.sector
      : 'residential';
    const monthlyBill = body.bill ? String(body.bill).trim() : null;
    const message = body.message ? String(body.message).trim() : null;
    const systemSize = body.system ? String(body.system).trim() : null;
    const source = body.source ? String(body.source).slice(0, 40) : 'contact';

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: 'Lead storage is not configured yet. Add Supabase keys to .env.local.' },
        { status: 503 }
      );
    }

    const supabase = createServerClient();
    const { error } = await supabase.from('leads').insert({
      name,
      email,
      phone,
      sector,
      monthly_bill: monthlyBill,
      message,
      system_size: systemSize,
      source,
    });

    if (error) {
      console.error('Lead insert failed:', error.message);
      return NextResponse.json({ error: 'Could not save your request. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead route error:', err);
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 });
  }
}
