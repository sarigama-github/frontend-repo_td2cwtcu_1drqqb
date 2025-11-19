import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Blog(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/blog`)
      .then(r => r.json())
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">Latest posts</h2>
        </div>
        {loading ? (
          <p className="mt-8 text-slate-600">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="mt-8 text-slate-600">No posts yet. Create one after you sign up.</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-medium text-slate-900">{p.title}</h3>
                {p.excerpt && <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>}
                <div className="mt-4 text-xs text-slate-500">By {p.author_name}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
