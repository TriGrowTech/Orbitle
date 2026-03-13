'use client'
import { useLang } from '@/lib/LangContext'

const LogoSvg = () => (
  <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
    <rect x="2" y="8" width="10" height="5" rx="1" fill="#90c8f0"/>
    <rect x="2" y="15" width="16" height="5" rx="1" fill="#3a7abf"/>
    <rect x="2" y="22" width="10" height="5" rx="1" fill="#90c8f0"/>
    <rect x="14" y="8" width="18" height="5" rx="1" fill="#3a7abf"/>
    <rect x="20" y="15" width="12" height="5" rx="1" fill="#3a7abf"/>
    <rect x="14" y="22" width="18" height="5" rx="1" fill="#90c8f0"/>
    <polygon points="18,2 24,2 20,7 14,7" fill="#3a7abf"/>
  </svg>
)

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  const cols = [
    { title: f.platformTitle, links: f.platformLinks, hrefs: ['#modules','#modules','#modules','#modules'] },
    { title: f.companyTitle, links: f.companyLinks, hrefs: ['#','#','#contact'] },
    { title: f.resourcesTitle, links: f.resourcesLinks, hrefs: ['#contact','#contact','#','#'] },
  ]

  return (
    <footer className="bg-navy2 text-white/70 px-6 pt-14 pb-7">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-11 pb-9 border-b border-white/8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <LogoSvg />
            <span className="font-sora text-[19px] font-extrabold text-white">
              Orbitle
            </span>
          </div>
          <p className="text-[13px] leading-[1.7] max-w-[230px]">{f.desc}</p>
          <p className="text-[12px] mt-3">📧 hello@trigrowtech.com</p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-sora text-[13px] font-bold text-white mb-3">{col.title}</h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href={col.hrefs[i]} className="text-[13px] hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1100px] mx-auto mt-6 flex justify-between items-center flex-wrap gap-3 text-[12px]">
        <span>{f.copy}</span>
        <div className="flex gap-4">
          <a href="#" className="text-white/50 hover:text-white transition-colors">{f.privacy}</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors">{f.terms}</a>
        </div>
      </div>
    </footer>
  )
}
