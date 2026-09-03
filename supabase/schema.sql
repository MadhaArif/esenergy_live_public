-- ES Energy — run this in the Supabase SQL editor (once per project)

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  sector text not null default 'residential',
  monthly_bill text,
  message text,
  system_size text,
  source text not null default 'contact',
  status text not null default 'new'
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique
);

create table if not exists public.quote_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text,
  phone text,
  monthly_bill numeric,
  system_label text,
  estimated_savings numeric,
  payload jsonb
);

alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.quote_inquiries enable row level security;

drop policy if exists "Public can insert leads" on public.leads;
create policy "Public can insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Public can insert newsletter" on public.newsletter_subscribers;
create policy "Public can insert newsletter"
  on public.newsletter_subscribers for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Public can insert quotes" on public.quote_inquiries;
create policy "Public can insert quotes"
  on public.quote_inquiries for insert
  to anon, authenticated
  with check (true);
