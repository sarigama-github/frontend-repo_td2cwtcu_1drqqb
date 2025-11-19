import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function AuthModal({ open, onClose }){
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      if (mode === 'register') {
        const res = await fetch(`${API}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password_hash: password }),
        });
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        localStorage.setItem('token', data.access_token);
      } else {
        const form = new URLSearchParams();
        form.set('username', email);
        form.set('password', password);
        const res = await fetch(`${API}/auth/login`, { method: 'POST', body: form });
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        localStorage.setItem('token', data.access_token);
      }
      onClose();
    } catch (e) {
      setError('Invalid credentials or server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-black/20 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg border border-black/5">
        <div className="p-6 border-b border-black/5 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">{mode === 'login' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          {mode === 'register' && (
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" required className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
          )}
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80" />
          {error && <div className="text-rose-600 text-sm">{error}</div>}
          <button disabled={loading} className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white disabled:opacity-60">
            {loading ? 'Please wait...' : (mode === 'login' ? 'Sign in' : 'Create account')}
          </button>
          <div className="text-center text-sm text-slate-600">
            {mode === 'login' ? (
              <button type="button" onClick={()=>setMode('register')} className="underline">Create an account</button>
            ) : (
              <button type="button" onClick={()=>setMode('login')} className="underline">Have an account? Sign in</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
