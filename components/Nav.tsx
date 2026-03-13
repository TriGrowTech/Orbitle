'use client'
import { useLang } from '@/lib/LangContext'
import LangSwitch from './LangSwitch'

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

export default function Nav() {
  const { t } = useLang()
  const n = t.nav
  return (
    <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-gray-100 px-6 h-16 flex items-center">
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-sora text-[18px] font-extrabold text-navy tracking-tight">
           Orbitle</span>
        
          <span className="hidden sm:block text-[10px] font-bold text-muted uppercase tracking-widest border-l border-gray-200 pl-2.5 ml-1">
            {n.by}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {[
            ['#how', n.howItWorks],
            ['#modules', n.platform],
            ['#pricing', n.pricing],
            ['#contact', n.contact],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[14px] font-medium text-ink2 hover:text-blue transition-colors">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold text-blue border-[1.5px] border-blue hover:bg-sky transition-colors">
            {n.learnMore}
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold text-white bg-blue hover:bg-blue2 transition-all hover:-translate-y-px shadow-sm">
            {n.joinWaitlist}
          </a>
        </div>
      </div>
    </nav>
  )
}
