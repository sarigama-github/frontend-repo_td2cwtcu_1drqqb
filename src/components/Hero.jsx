import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-black/5 text-slate-700 text-sm mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Live demo • Fintech-ready components
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-800">
          Launch your pastel-perfect SaaS in minutes
        </h1>
        <p className="mt-4 text-lg text-slate-600 mx-auto max-w-2xl">
          Modern auth, a lightweight blog, and a contact form — wrapped in a soft, minimalist vibe. Built for startups that love calm design.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#signup" className="px-6 py-3 rounded-xl bg-slate-900 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
            Get Started Free
          </a>
          <a href="#blog" className="px-6 py-3 rounded-xl bg-white text-slate-800 border border-black/10 hover:bg-slate-50 transition">
            Read the Blog
          </a>
        </div>
      </div>
    </section>
  );
}
