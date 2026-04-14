-- ============================================================
-- JP Neuro Spine Hospital and
Pain Management Centre Hospital Blog System — Supabase Migration
-- Run this in the Supabase SQL Editor
-- ============================================================

CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  cover_image_url TEXT,
  content TEXT NOT NULL DEFAULT '',
  author TEXT DEFAULT 'Dr. Prasanna',
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Public can only read published blogs
CREATE POLICY "Public can view published blogs"
  ON blogs FOR SELECT
  USING (is_published = true);

-- Service role bypasses RLS automatically (used in admin API serverless function)

-- ============================================================
-- Storage: Create the blog-images bucket
-- Run these in Supabase Storage or SQL Editor
-- ============================================================

-- 1. Create a PUBLIC bucket called blog-images in the Supabase dashboard:
--    Storage → New Bucket → Name: blog-images → Toggle "Public bucket" ON

-- 2. Add this storage policy so authenticated service role can upload:
--    (Service role bypasses storage policies by default — no action needed)

-- 3. Public read policy for storage objects (if bucket is not set to public):
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- ============================================================
-- Optional: auto-update updated_at on row change
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
