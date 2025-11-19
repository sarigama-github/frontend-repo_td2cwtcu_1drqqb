import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <Hero />
      <Features />
      <Blog />
      <Contact />
      <footer className="py-10 text-center text-slate-500">© {new Date().getFullYear()} PastelPay</footer>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
