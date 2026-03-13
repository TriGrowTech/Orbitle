'use client'
import { useLang } from '@/lib/LangContext'

export default function Modules() {
  const { t } = useLang()
  const m = t.modules

  return (
    <section id="modules" className="bg-white py-[72px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-11">
          <span className="text-[12px] font-bold text-blue uppercase tracking-[0.1em] block mb-2.5">{m.kicker}</span>
          <h2 className="font-sora text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold tracking-tight text-ink mb-3">
            {m.h2a}<br />{m.h2b}
          </h2>
          <p className="text-[15px] text-muted leading-[1.75] max-w-[540px] mx-auto">{m.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {m.cards.map((card, i) => (
            <div key={i} className="relative border border-gray-200 rounded-2xl p-[26px] overflow-hidden hover:border-blue2 hover:shadow-[0_2px_16px_rgba(26,58,92,0.08)] transition-all">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#1a3a5c,#2563a8)' }} />
              <div className="w-[42px] h-[42px] bg-sky rounded-xl flex items-center justify-center text-[20px] mb-3.5">{card.icon}</div>
              <div className="font-sora text-[16px] font-extrabold mb-2">{card.title}</div>
              <p className="text-[13.5px] text-muted leading-[1.7] mb-3">{card.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {card.points.map((pt, j) => (
                  <li key={j} className="flex gap-1.5 text-[13px] text-ink2">
                    <span className="text-blue font-bold flex-shrink-0">✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
