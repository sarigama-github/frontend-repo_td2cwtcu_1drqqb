export default function Features(){
  const items = [
    {
      title: 'Email + Password Auth',
      desc: 'Secure JWT sessions. Ready for production with hashed passwords.',
    },
    {
      title: 'Simple Blog',
      desc: 'Publish updates and guides. Markdown/HTML friendly.',
    },
    {
      title: 'Contact Form',
      desc: 'Collect inquiries that land in your database instantly.',
    },
  ];
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 text-center">Everything you need to launch</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
              <h3 className="font-medium text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
