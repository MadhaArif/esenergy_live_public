import { NextResponse } from 'next/server';
import { createServerClient, isSupabaseConfigured } from '@/lib/supabase/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: 'Newsletter storage is not configured yet.' },
        { status: 503 }
      );
    }

    const supabase = createServerClient();
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ ok: true, already: true });
      }
      console.error('Newsletter insert failed:', error.message);
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Newsletter route error:', err);
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 });
  }
}
