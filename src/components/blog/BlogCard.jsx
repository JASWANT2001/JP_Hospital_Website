import { Link } from 'react-router-dom';

function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr));
}

export default function BlogCard({ blog }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 overflow-hidden flex flex-col">
      {/* Cover image */}
      <Link to={`/blog/${blog.slug}`} className="block aspect-[16/9] overflow-hidden bg-blue-50">
        {blog.cover_image_url ? (
          <img
            src={blog.cover_image_url}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span>{blog.author || 'Dr. Prasanna'}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
          <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>
        </div>

        <h2 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 leading-snug">
          <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors">
            {blog.title}
          </Link>
        </h2>

        {blog.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-1">
            {blog.excerpt}
          </p>
        )}

        <Link
          to={`/blog/${blog.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Read article
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
