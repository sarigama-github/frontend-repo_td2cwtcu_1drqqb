import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState({ sending: false, done: false, error: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({ sending: true, done: false, error: '' });
    try {
      const res = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setState({ sending: false, done: true, error: '' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setState({ sending: false, done: false, error: 'Something went wrong. Try again.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-violet-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 text-center">Contact us</h2>
        <form onSubmit={onSubmit} className="mt-10 p-6 rounded-2xl bg-white border border-black/5 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
          </div>
          <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" required className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" required className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
          <div className="flex items-center gap-3">
            <button disabled={state.sending} className="px-6 py-3 rounded-xl bg-slate-900 text-white disabled:opacity-60">
              {state.sending ? 'Sending...' : 'Send message'}
            </button>
            {state.done && <span className="text-emerald-600">Thanks! We will reply soon.</span>}
            {state.error && <span className="text-rose-600">{state.error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
