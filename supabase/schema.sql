-- INNO-NEST / AREATOR contact inquiries
-- Run this script in Supabase Dashboard -> SQL Editor.

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(trim(full_name)) between 1 and 120),
  email text not null check (char_length(trim(email)) between 3 and 254),
  organization text null check (organization is null or char_length(organization) <= 160),
  inquiry_type text not null check (inquiry_type in ('Purchase', 'Collaboration', 'Partnership', 'General Inquiry')),
  message text not null check (char_length(trim(message)) between 10 and 5000),
  status text not null default 'new' check (status in ('new', 'in_progress', 'resolved', 'archived'))
);

alter table public.inquiries enable row level security;

-- Public visitors may submit inquiries, but cannot read, update, or delete them.
drop policy if exists "Anyone can submit an inquiry" on public.inquiries;
create policy "Anyone can submit an inquiry"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (
    char_length(trim(full_name)) between 1 and 120
    and char_length(trim(email)) between 3 and 254
    and (organization is null or char_length(organization) <= 160)
    and inquiry_type in ('Purchase', 'Collaboration', 'Partnership', 'General Inquiry')
    and char_length(trim(message)) between 10 and 5000
    and status = 'new'
  );

-- Intentionally do not create public SELECT, UPDATE, or DELETE policies.
-- View submissions through the Supabase Dashboard using an authorized project account.
-- Never expose a service-role/secret key in the website.

grant usage on schema public to anon, authenticated;
grant insert (full_name, email, organization, inquiry_type, message) on public.inquiries to anon, authenticated;
revoke all on public.inquiries from anon, authenticated;
grant insert (full_name, email, organization, inquiry_type, message) on public.inquiries to anon, authenticated;
