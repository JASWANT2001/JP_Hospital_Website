import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../sanity";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          "img": mainImage.asset->url,
          body,
          excerpt
        }`,
        { slug }
      )
      .then((data) => setPost(data));
  }, [slug]);

  if (!post) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="bg-[#f7f9fc] font-body text-[#191c1e] min-h-screen">

      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-[#767683] mb-10">
          <Link to="/patient-education" className="hover:text-[#142588]">
            Patient Education
          </Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-[#191c1e] font-medium">{post.title}</span>
        </nav>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-[#c6c5d4]/30">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Page Header */}
        <header className="mb-12">
          <span className="text-[#ffb786] bg-[#763800] px-3 py-1 rounded-full font-bold tracking-wider uppercase text-[10px] mb-4 inline-block">
            Medical Insight
          </span>

          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-[#142588] leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-[#454652] font-medium leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-slate prose-lg max-w-none text-[#454652] leading-relaxed space-y-6">
          {post.body?.map((block) => {
            if (block._type === "block") {
              return (
                <p key={block._key}>
                  {block.children?.map((child) => child.text).join("")}
                </p>
              );
            }
            return null;
          })}
        </article>

      </main>

    </div>
  );
}