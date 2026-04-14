import { useState, useEffect, useMemo } from 'react';
import { useAdminBlogs, deleteBlog, togglePublish, createBlog, updateBlog } from '../../hooks/useBlogs';
import BlogEditor from './BlogEditor';
import ImageUpload from './ImageUpload';

function formatDate(d) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(d));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function Toast({ message, type, onDismiss }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 3500);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div className={`
      fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-semibold font-inter
      border backdrop-blur-sm
      ${type === 'error'
        ? 'bg-red-600 border-red-500 text-white'
        : 'bg-[#142588] border-[#1e32a0] text-white'}
    `}>
      {type === 'error' ? (
        <span className="material-symbols-outlined text-base">error</span>
      ) : (
        <span className="material-symbols-outlined text-base">check_circle</span>
      )}
      {message}
      <button onClick={onDismiss} className="ml-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
}

// ── Post Editor ───────────────────────────────────────────────────────────────
function PostEditor({ post, token, onSave, onCancel }) {
  const isNew = !post?.id;

  const [form, setForm] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    cover_image_url: post?.cover_image_url || '',
    content: post?.content || '',
    author: post?.author || 'Dr. Prasanna',
    is_published: post?.is_published || false,
  });
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleTitleChange(e) {
    const title = e.target.value;
    set('title', title);
    if (!slugManuallyEdited) set('slug', slugify(title));
  }

  function handleSlugChange(e) {
    setSlugManuallyEdited(true);
    set('slug', slugify(e.target.value));
  }

  async function handleSave() {
    if (!form.title.trim()) { setError('Title is required.'); return; }
    if (!form.slug.trim()) { setError('Slug is required.'); return; }
    if (!form.content || form.content === '<p></p>') { setError('Content cannot be empty.'); return; }
    setSaving(true);
    setError('');
    try {
      if (isNew) {
        await createBlog(form, token);
      } else {
        await updateBlog({ id: post.id, ...form }, token);
      }
      onSave();
    } catch (e) {
      setError(e.message || 'Save failed. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  const inputClass = `
    w-full px-4 py-3 bg-white border border-[#c6c5d4] rounded-xl text-sm text-[#191c1e] font-inter
    placeholder:text-[#767683] focus:outline-none focus:ring-2 focus:ring-[#142588]/30 focus:border-[#142588]
    transition-all duration-200
  `;

  return (
    <div className="min-h-screen bg-[#f7f9fc] pt-16 sm:pt-20">
      {/* Sticky editor header */}
      <div className="sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-[#e0e3e6] shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onCancel}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#454652] hover:text-[#142588] transition-colors font-inter"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Dashboard
          </button>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-bold rounded-full font-inter ${
              isNew
                ? 'bg-[#ffa361]/20 text-[#723600]'
                : 'bg-[#142588]/10 text-[#142588]'
            }`}>
              {isNew ? 'New Post' : 'Editing'}
            </span>
            <h1 className="text-base font-bold text-[#191c1e] font-manrope truncate max-w-xs hidden sm:block">
              {form.title || (isNew ? 'Untitled Post' : 'Edit Post')}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-[#142588] border border-[#142588]/30 rounded-xl hover:bg-[#142588]/5 transition font-inter"
            >
              <span className="material-symbols-outlined text-sm">{preview ? 'edit' : 'visibility'}</span>
              {preview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-1.5 px-5 py-1.5 bg-[#142588] hover:bg-[#1e32a0] disabled:bg-[#142588]/40 text-white text-sm font-bold rounded-xl transition-colors shadow-sm font-inter"
            >
              {saving ? (
                <>
                  <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                  Saving…
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">save</span>
                  {form.is_published ? 'Save & Publish' : 'Save Draft'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-8 max-w-5xl mx-auto space-y-6">
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl font-inter">
            <span className="material-symbols-outlined text-base">error</span>
            {error}
          </div>
        )}

        {preview ? (
          <div className="bg-white rounded-2xl shadow-sm border border-[#e0e3e6] p-6 sm:p-10">
            {form.cover_image_url && (
              <img src={form.cover_image_url} alt={form.title} className="w-full h-72 object-cover rounded-xl mb-8" />
            )}
            <h1 className="text-3xl font-black text-[#142588] mb-3 font-manrope">{form.title || 'Untitled'}</h1>
            {form.excerpt && <p className="text-lg text-[#454652] mb-6 leading-relaxed font-inter">{form.excerpt}</p>}
            <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: form.content }} />
          </div>
        ) : (
          <>
            {/* Title & Slug side by side on large */}
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <label className="block text-xs font-bold text-[#454652] uppercase tracking-wider mb-2 font-inter">
                  Post Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={handleTitleChange}
                  placeholder="Enter a compelling blog title…"
                  className={`${inputClass} text-lg font-semibold`}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#454652] uppercase tracking-wider mb-2 font-inter">
                  URL Slug <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={handleSlugChange}
                  placeholder="url-friendly-slug"
                  className={`${inputClass} font-mono text-[#142588]`}
                />
                {form.slug && (
                  <p className="mt-1.5 text-xs text-[#767683] font-inter truncate">
                    /blog/<strong className="text-[#142588]">{form.slug}</strong>
                  </p>
                )}
              </div>
            </div>

            {/* Author & Publish toggle */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#454652] uppercase tracking-wider mb-2 font-inter">Author</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => set('author', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col justify-end">
                <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  form.is_published
                    ? 'bg-green-50 border-green-200'
                    : 'bg-[#f7f9fc] border-[#e0e3e6]'
                }`}>
                  <div>
                    <p className={`text-sm font-bold font-manrope ${form.is_published ? 'text-green-700' : 'text-[#454652]'}`}>
                      {form.is_published ? 'Live & Published' : 'Saved as Draft'}
                    </p>
                    <p className="text-xs text-[#767683] mt-0.5 font-inter">
                      {form.is_published ? 'Visible to all visitors' : 'Only visible to admins'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => set('is_published', !form.is_published)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      form.is_published ? 'bg-green-500' : 'bg-[#c6c5d4]'
                    }`}
                  >
                    <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      form.is_published ? 'translate-x-5' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-bold text-[#454652] uppercase tracking-wider mb-2 font-inter">
                Excerpt
                <span className="ml-2 font-normal normal-case text-[#767683]">Brief summary for listing pages &amp; social previews</span>
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => set('excerpt', e.target.value)}
                placeholder="Write a 1–2 sentence summary that entices readers…"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Cover image */}
            <div>
              <label className="block text-xs font-bold text-[#454652] uppercase tracking-wider mb-2 font-inter">Cover Image</label>
              <ImageUpload
                value={form.cover_image_url}
                onChange={(url) => set('cover_image_url', url)}
                token={token}
              />
            </div>

            {/* Content editor */}
            <div>
              <label className="block text-xs font-bold text-[#454652] uppercase tracking-wider mb-2 font-inter">
                Content <span className="text-red-500">*</span>
              </label>
              <div className="rounded-xl overflow-hidden border border-[#c6c5d4] focus-within:ring-2 focus-within:ring-[#142588]/30 focus-within:border-[#142588] transition-all">
                <BlogEditor
                  content={form.content}
                  onChange={(html) => set('content', html)}
                  token={token}
                />
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="flex items-center justify-between pt-4 pb-12 border-t border-[#e0e3e6]">
              <button
                type="button"
                onClick={onCancel}
                className="px-5 py-2.5 text-sm font-semibold text-[#454652] border border-[#c6c5d4] rounded-xl hover:bg-[#eceef1] transition font-inter"
              >
                Cancel
              </button>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPreview(true)}
                  className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-[#142588] border border-[#142588]/30 rounded-xl hover:bg-[#142588]/5 transition font-inter"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  Preview
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-2 px-7 py-2.5 bg-[#142588] hover:bg-[#1e32a0] disabled:bg-[#142588]/40 text-white text-sm font-bold rounded-xl transition-colors shadow-md font-inter"
                >
                  {saving ? (
                    <><span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>Saving…</>
                  ) : (
                    <><span className="material-symbols-outlined text-sm">save</span>{form.is_published ? 'Save & Publish' : 'Save as Draft'}</>
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, icon, color }) {
  const colorMap = {
    blue: {
      bg: 'bg-[#142588]',
      light: 'bg-[#dfe0ff]',
      text: 'text-[#142588]',
      iconText: 'text-white',
    },
    green: {
      bg: 'bg-green-600',
      light: 'bg-green-100',
      text: 'text-green-700',
      iconText: 'text-white',
    },
    orange: {
      bg: 'bg-[#763800]',
      light: 'bg-[#ffdcc6]',
      text: 'text-[#763800]',
      iconText: 'text-white',
    },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded-2xl border border-[#e0e3e6] p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
        <span className={`material-symbols-outlined ${c.iconText} text-xl`}>{icon}</span>
      </div>
      <div>
        <p className="text-2xl font-black text-[#191c1e] font-manrope leading-none">{value}</p>
        <p className="text-xs text-[#767683] font-inter mt-1 font-medium uppercase tracking-wide">{label}</p>
      </div>
    </div>
  );
}

// ── Blog Row Card ─────────────────────────────────────────────────────────────
function BlogRow({ blog, token, onEdit, onRefresh, onToast }) {
  const [busy, setBusy] = useState(false);

  async function handleDelete() {
    if (!window.confirm(`Delete "${blog.title}"? This cannot be undone.`)) return;
    setBusy(true);
    try {
      await deleteBlog(blog.id, token);
      onToast('Post deleted.');
      onRefresh();
    } catch (e) {
      onToast(e.message, 'error');
    } finally {
      setBusy(false);
    }
  }

  async function handleToggle() {
    setBusy(true);
    try {
      await togglePublish(blog.id, !blog.is_published, token);
      onToast(blog.is_published ? 'Post unpublished.' : 'Post published!');
      onRefresh();
    } catch (e) {
      onToast(e.message, 'error');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="group flex items-start sm:items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-[#e0e3e6] hover:border-[#142588]/30 hover:shadow-md transition-all duration-200">
      {/* Thumbnail */}
      <div className="w-16 h-16 sm:w-20 sm:h-16 flex-shrink-0 rounded-xl overflow-hidden bg-[#dfe0ff]">
        {blog.cover_image_url ? (
          <img src={blog.cover_image_url} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[#142588]/30 text-2xl">article</span>
          </div>
        )}
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-[#191c1e] font-manrope truncate leading-snug">{blog.title}</p>
        {blog.excerpt && (
          <p className="text-xs text-[#767683] mt-0.5 font-inter line-clamp-1 leading-relaxed">{blog.excerpt}</p>
        )}
        <div className="flex items-center gap-3 mt-1.5">
          <span className="flex items-center gap-1 text-xs text-[#767683] font-inter">
            <span className="material-symbols-outlined text-xs">calendar_today</span>
            {formatDate(blog.created_at)}
          </span>
          {blog.author && (
            <span className="flex items-center gap-1 text-xs text-[#767683] font-inter">
              <span className="material-symbols-outlined text-xs">person</span>
              {blog.author}
            </span>
          )}
        </div>
      </div>

      {/* Status badge */}
      <span className={`hidden sm:flex flex-shrink-0 items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full font-inter ${
        blog.is_published
          ? 'bg-green-100 text-green-700'
          : 'bg-[#ffdcc6] text-[#723600]'
      }`}>
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
        {blog.is_published ? 'Published' : 'Draft'}
      </span>

      {/* Actions */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <button
          onClick={() => onEdit(blog)}
          className="flex items-center gap-1 p-2 text-[#454652] hover:text-[#142588] hover:bg-[#142588]/8 rounded-lg transition-colors"
          title="Edit post"
        >
          <span className="material-symbols-outlined text-lg">edit</span>
        </button>

        <button
          onClick={handleToggle}
          disabled={busy}
          className={`p-2 rounded-lg transition-colors disabled:opacity-50 ${
            blog.is_published
              ? 'text-green-600 hover:text-[#723600] hover:bg-[#ffdcc6]/50'
              : 'text-[#767683] hover:text-green-600 hover:bg-green-50'
          }`}
          title={blog.is_published ? 'Unpublish' : 'Publish'}
        >
          <span className="material-symbols-outlined text-lg">
            {blog.is_published ? 'visibility_off' : 'publish'}
          </span>
        </button>

        <button
          onClick={handleDelete}
          disabled={busy}
          className="p-2 text-[#767683] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
          title="Delete post"
        >
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
    </div>
  );
}

// ── Main AdminDashboard ───────────────────────────────────────────────────────
export default function AdminDashboard({ token, onLogout }) {
  const { blogs, loading, error, refresh } = useAdminBlogs(token);
  const [editingPost, setEditingPost] = useState(null);
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all | published | draft

  function showToast(message, type = 'success') {
    setToast({ message, type });
  }

  const published = blogs.filter((b) => b.is_published);
  const drafts = blogs.filter((b) => !b.is_published);

  const filtered = useMemo(() => {
    let list = blogs;
    if (filter === 'published') list = list.filter((b) => b.is_published);
    if (filter === 'draft') list = list.filter((b) => !b.is_published);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((b) =>
        b.title?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q) ||
        b.author?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [blogs, filter, search]);

  if (editingPost !== null) {
    return (
      <PostEditor
        post={editingPost.id ? editingPost : null}
        token={token}
        onSave={() => {
          setEditingPost(null);
          showToast(editingPost?.id ? 'Post updated!' : 'Post created!');
          refresh();
        }}
        onCancel={() => setEditingPost(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] pt-16 sm:pt-20">
      {toast && (
        <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />
      )}

      {/* ── Hero header banner ── */}
      <div className="w-full bg-[#142588] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#ffa361]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-white/5" />

        <div className="w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-10 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              {/* Breadcrumb-style label */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#ffa361]/20 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#ffa361] text-sm">shield_person</span>
                </div>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-widest font-inter">
                  JP Neuro Spine Hospital and Pain Management Centre · Admin Portal
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-manrope tracking-tight leading-tight">
                Blog Dashboard
              </h1>
              <p className="text-white/60 text-sm font-inter mt-1.5">
                Manage and publish content for the JP Neuro Spine Hospital and Pain Management Centre website.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setEditingPost({})}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffa361] hover:bg-[#e8903a] text-[#311300] text-sm font-bold rounded-xl transition-all shadow-lg shadow-[#ffa361]/20 font-inter"
              >
                <span className="material-symbols-outlined text-base">add</span>
                New Post
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors border border-white/10 font-inter"
                title="Sign out"
              >
                <span className="material-symbols-outlined text-base">logout</span>
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stat cards strip ── */}
      <div className="w-full px-4 sm:px-6 lg:px-10 -mt-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
          <StatCard label="Total Posts" value={blogs.length} icon="article" color="blue" />
          <StatCard label="Published" value={published.length} icon="public" color="green" />
          <StatCard label="Drafts" value={drafts.length} icon="draft" color="orange" />
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="w-full px-4 sm:px-6 lg:px-10 pb-16">

        {/* Toolbar: search + filter tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#767683] text-lg pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts…"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e0e3e6] rounded-xl text-sm font-inter text-[#191c1e] placeholder:text-[#767683] focus:outline-none focus:ring-2 focus:ring-[#142588]/20 focus:border-[#142588] transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767683] hover:text-[#191c1e]"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-white border border-[#e0e3e6] rounded-xl p-1 self-start sm:self-auto">
            {[
              { key: 'all', label: 'All', count: blogs.length },
              { key: 'published', label: 'Published', count: published.length },
              { key: 'draft', label: 'Drafts', count: drafts.length },
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all font-inter ${
                  filter === key
                    ? 'bg-[#142588] text-white shadow-sm'
                    : 'text-[#454652] hover:bg-[#f2f4f7]'
                }`}
              >
                {label}
                <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                  filter === key ? 'bg-white/20 text-white' : 'bg-[#eceef1] text-[#767683]'
                }`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-white rounded-2xl border border-[#e0e3e6] animate-pulse" />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 text-sm px-5 py-4 rounded-2xl font-inter">
            <span className="material-symbols-outlined text-lg">error</span>
            Failed to load posts: {error}
            <button onClick={refresh} className="ml-auto text-xs underline hover:no-underline">Retry</button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-[#dfe0ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-[#142588] text-4xl">
                {search || filter !== 'all' ? 'search_off' : 'article'}
              </span>
            </div>
            {search || filter !== 'all' ? (
              <>
                <h2 className="text-base font-bold text-[#191c1e] font-manrope mb-1">No posts found</h2>
                <p className="text-sm text-[#767683] font-inter mb-5">Try adjusting your search or filter.</p>
                <button
                  onClick={() => { setSearch(''); setFilter('all'); }}
                  className="px-5 py-2 bg-[#eceef1] hover:bg-[#e0e3e6] text-[#142588] text-sm font-bold rounded-xl transition font-inter"
                >
                  Clear filters
                </button>
              </>
            ) : (
              <>
                <h2 className="text-base font-bold text-[#191c1e] font-manrope mb-1">No posts yet</h2>
                <p className="text-sm text-[#767683] font-inter mb-6">Start building your knowledge library — create your first post.</p>
                <button
                  onClick={() => setEditingPost({})}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#142588] hover:bg-[#1e32a0] text-white text-sm font-bold rounded-xl transition-colors shadow-md font-inter"
                >
                  <span className="material-symbols-outlined text-base">add</span>
                  Write your first post
                </button>
              </>
            )}
          </div>
        )}

        {/* Blog list */}
        {!loading && filtered.length > 0 && (
          <div className="space-y-3">
            {/* Column headers — visible on larger screens */}
            <div className="hidden sm:flex items-center gap-4 px-5 text-xs font-bold text-[#767683] uppercase tracking-wider font-inter">
              <div className="w-16 sm:w-20 flex-shrink-0" />
              <div className="flex-1">Post</div>
              <div className="w-24 text-center">Status</div>
              <div className="w-28 text-right">Actions</div>
            </div>

            {filtered.map((blog) => (
              <BlogRow
                key={blog.id}
                blog={blog}
                token={token}
                onEdit={(b) => setEditingPost(b)}
                onRefresh={refresh}
                onToast={showToast}
              />
            ))}

            {/* Footer count */}
            <p className="text-xs text-[#767683] text-right font-inter pt-2">
              Showing {filtered.length} of {blogs.length} post{blogs.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
