'use client'
import { useLang } from '@/lib/LangContext'

export default function WhyOrbitle() {
  const { t } = useLang()
  const w = t.why

  return (
    <section id="why" className="bg-gray-50 py-[72px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — visual metrics */}
          <div className="bg-white border border-gray-200 rounded-2xl p-[26px] shadow-[0_2px_16px_rgba(26,58,92,0.08)]">
            <div className="text-[12px] font-bold uppercase tracking-[0.07em] text-muted mb-4">{w.visualTitle}</div>
            {w.metrics.map((m, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-3.5 flex items-center gap-3 mb-2.5 last:mb-0">
                <div className="flex-1">
                  <div className="text-[12px] font-bold flex justify-between mb-1.5">
                    <span>{m.label}</span>
                    <span className="text-muted font-normal">{m.change}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: m.width, background: 'linear-gradient(90deg,#1a3a5c,#2563a8)' }} />
                  </div>
                </div>
                <span className="text-[12px] font-extrabold text-blue whitespace-nowrap font-sora">{m.badge}</span>
              </div>
            ))}
            <p className="text-[11px] text-muted italic mt-3.5">{w.source}</p>
          </div>

          {/* Right — points */}
          <div>
            <span className="text-[12px] font-bold text-blue uppercase tracking-[0.1em] block mb-2.5">{w.kicker}</span>
            <h2 className="font-sora text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold tracking-tight text-ink mb-6">{w.h2}</h2>
            <div className="flex flex-col gap-3.5">
              {w.points.map((p, i) => (
                <div key={i} className="flex gap-3 items-start p-4 border border-gray-200 rounded-lg hover:border-blue2 hover:bg-sky transition-all">
                  <div className="w-[38px] h-[38px] bg-sky rounded-lg flex items-center justify-center text-[17px] flex-shrink-0">{p.icon}</div>
                  <div>
                    <div className="font-extrabold text-[14px] mb-1">{p.title}</div>
                    <div className="text-[13px] text-muted leading-[1.6]">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[14px] font-bold text-white bg-blue hover:bg-blue2 transition-all hover:-translate-y-px">
                {w.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
