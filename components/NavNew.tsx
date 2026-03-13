'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, MousePointer2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/LangContext'
import { cn } from '@/lib/utils'

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
    <rect x="2" y="8" width="10" height="5" rx="1" fill="#1a3a5c"/>
    <rect x="2" y="15" width="16" height="5" rx="1" fill="#2563a8"/>
    <rect x="2" y="22" width="10" height="5" rx="1" fill="#1a3a5c"/>
    <rect x="14" y="8" width="18" height="5" rx="1" fill="#3a7abf"/>
    <rect x="20" y="15" width="12" height="5" rx="1" fill="#3a7abf"/>
    <rect x="14" y="22" width="18" height="5" rx="1" fill="#2563a8"/>
    <polygon points="18,2 24,2 20,7 14,7" fill="#2563a8"/>
  </svg>
)

export default function NavNew() {
  const { lang, setLang, t } = useLang()
  const n = t.nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: n.howItWorks, href: '#how' },
    { name: n.platform, href: '#platform' },
    { name: n.pricing, href: '#pricing' },
    { name: n.contact, href: '#contact' },
  ]

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6",
        scrolled ? "py-4" : "py-8"
      )}>
        <div className={cn(
          "max-w-container mx-auto px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-between",
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" 
            : "bg-transparent"
        )}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 italic">Orbitle</span>
              <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-[-2px]">{n.by}</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-slate-600 hover:text-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue transition-colors px-4 py-2"
            >
              {lang === 'en' ? 'हिन्दी' : 'English'}
            </button>
            <Button size="sm" className="rounded-full px-6 font-bold premium group shadow-md">
              {n.joinWaitlist}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-blue transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[190] bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[70%] sm:w-[50%] z-[200] bg-white p-8 lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-center text-white font-black text-sm italic">O</div>
                  <span className="text-xl font-black tracking-tighter text-slate-900 italic">Orbitle</span>
                </div>
                <button 
                  className="p-2 text-slate-400 hover:text-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-12">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-slate-900 hover:text-blue transition-colors tracking-tight"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <button 
                  onClick={() => {
                    setLang(lang === 'en' ? 'hi' : 'en')
                    setMobileMenuOpen(false)
                  }}
                  className="w-full text-left py-4 border-t border-slate-100 font-bold text-slate-400 uppercase tracking-widest text-[10px]"
                >
                  {lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
                </button>
                <Button size="lg" className="w-full rounded-xl py-6 h-auto text-base font-bold premium" onClick={() => setMobileMenuOpen(false)}>
                  {n.joinWaitlist}
                </Button>
                <div className="pt-4 text-center">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">by TrigrowTech</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
