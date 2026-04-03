import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const API_BASE = '/api/admin';

async function adminFetch(path, options = {}, token) {
  const res = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// ── Public: fetch all published blogs ──────────────────────────────────────
export function usePublishedBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, cover_image_url, author, created_at')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) setError(error.message);
      else setBlogs(data);
      setLoading(false);
    }
    fetch();
  }, []);

  return { blogs, loading, error };
}

// ── Public: fetch single blog by slug ──────────────────────────────────────
export function useBlogBySlug(slug) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    async function fetch() {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) setError(error.code === 'PGRST116' ? 'not_found' : error.message);
      else setBlog(data);
      setLoading(false);
    }
    fetch();
  }, [slug]);

  return { blog, loading, error };
}

// ── Admin: list all blogs (published + drafts) ─────────────────────────────
export function useAdminBlogs(token) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await adminFetch(`${API_BASE}?action=list`, { method: 'GET' }, token);
      setBlogs(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) refresh();
  }, [token, refresh]);

  return { blogs, loading, error, refresh };
}

// ── Admin CRUD ──────────────────────────────────────────────────────────────
export async function createBlog(postData, token) {
  return adminFetch(
    `${API_BASE}?action=create`,
    { method: 'POST', body: JSON.stringify(postData) },
    token
  );
}

export async function updateBlog(postData, token) {
  return adminFetch(
    `${API_BASE}?action=update`,
    { method: 'POST', body: JSON.stringify(postData) },
    token
  );
}

export async function deleteBlog(id, token) {
  return adminFetch(`${API_BASE}?action=delete&id=${id}`, { method: 'DELETE' }, token);
}

export async function togglePublish(id, is_published, token) {
  return adminFetch(
    `${API_BASE}?action=toggle-publish`,
    { method: 'POST', body: JSON.stringify({ id, is_published }) },
    token
  );
}

// ── Image upload via signed URL ─────────────────────────────────────────────
export async function uploadImage(file, token) {
  // 1. Get signed upload URL from admin API
  const { signedUrl, publicUrl } = await adminFetch(
    `${API_BASE}?action=upload-url&filename=${encodeURIComponent(file.name)}`,
    { method: 'GET' },
    token
  );

  // 2. Upload directly to Supabase Storage using the signed URL
  const uploadRes = await fetch(signedUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  });

  if (!uploadRes.ok) throw new Error('Image upload failed');
  return publicUrl;
}

// ── Verify admin password ───────────────────────────────────────────────────
export async function verifyAdminPassword(password) {
  const res = await fetch(`${API_BASE}?action=verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Invalid password');
  return true;
}
