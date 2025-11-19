import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-slate-800">PastelPay</a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <button onClick={onOpenAuth} className="px-4 py-2 rounded-lg bg-slate-900 text-white">Sign in</button>
        </nav>
        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="w-6 h-6 text-slate-700" />
        </button>
      </div>
      {open && (
        <div className="sm:hidden px-6 pb-4 space-y-2 bg-white/80">
          <a href="#features" className="block">Features</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#contact" className="block">Contact</a>
          <button onClick={onOpenAuth} className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white">Sign in</button>
        </div>
      )}
    </header>
  );
}
