# Supabase setup — INNO-NEST / AREATOR

This project stores contact form submissions in Supabase's `public.inquiries` table. It does not send email notifications yet.

## 1. Create a Supabase project

1. Open https://supabase.com/dashboard and create a project.
2. In Project Settings / API (or the project's Connect panel), copy the Project URL and the public publishable key. If your project uses the legacy key format, the `anon` key can be used instead.
3. Never use a `service_role` or secret key in the frontend.

## 2. Create the database table

1. Open your project in Supabase.
2. Open SQL Editor and create a new query.
3. Paste the contents of `supabase/schema.sql` and run it.
4. Open Table Editor and confirm that `inquiries` exists.

The SQL enables Row Level Security (RLS), allows public form submissions, and intentionally does not allow public visitors to read, update, or delete inquiries. Review the policies before production deployment.

## 3. Configure local development

1. Copy `.env.example` to `.env` in the project root.
2. Set `VITE_SUPABASE_URL` to your Supabase Project URL.
3. Set `VITE_SUPABASE_ANON_KEY` to your public publishable key (or legacy anon key).
4. Install dependencies with `npm install` and run `npm run dev`.
5. Do not commit `.env` to source control.

Vite embeds `VITE_` variables into browser code. Only use the public publishable/anon key here. Database access is constrained by RLS policies.

## 4. Verify submissions

1. Open the website locally and navigate to Contact.
2. Submit a test inquiry with a valid email and a message of at least 10 characters.
3. After the form confirms success, open Supabase Dashboard → Table Editor → `inquiries`.
4. Confirm the test record appears. Delete the test record from the dashboard if desired.

If submissions fail, check the browser console and Supabase Logs. Common causes are an incorrect project URL/key, SQL not run, or the table/policy not configured as expected.

## 5. Deploy

Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to your hosting provider's environment-variable settings, then rebuild/redeploy the site. Environment variables must be present at build time for Vite.

## Email notifications

Email notifications are not configured by this integration. They can be added separately with a Supabase Edge Function and an email provider. Keep email-provider credentials server-side; do not put them in `VITE_` variables.
