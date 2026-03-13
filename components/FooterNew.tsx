'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, FileText, LucideIcon } from 'lucide-react'
import { useLang } from '@/lib/LangContext'

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

export default function FooterNew() {
  const { t } = useLang()
  const f = t.footer
  const n = t.nav

  const footerLinks = [
    { title: f.platformTitle, links: f.platformLinks },
    { title: f.companyTitle, links: f.companyLinks },
    { title: f.resourcesTitle, links: f.resourcesLinks },
  ]

  return (
    <footer className="bg-slate-900 pt-20 pb-12 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-20 mb-20">
          {/* Brand Info */}
          <div className="max-w-[400px]">
            <div className="flex items-center gap-3 mb-8">
              <Logo />
              <div>
                <span className="text-3xl font-black tracking-tighter text-white italic">Orbitle</span>
                <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-[-2px]">{n.by}</span>
              </div>
            </div>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
              {f.desc}
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@orbitle.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors decoration-blue/30 underline-offset-4 hover:underline">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-blue group-hover:border-blue transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">hello@orbitle.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm">+91 9118556755</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-2">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href="#" 
                      className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center group"
                    >
                      {link}
                      <ExternalLink className="ml-1.5 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm font-bold text-slate-500">{f.copy}</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              {f.privacy}
            </a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {f.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
