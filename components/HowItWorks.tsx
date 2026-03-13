'use client'
import { useLang } from '@/lib/LangContext'

export default function HowItWorks() {
  const { t } = useLang()
  const h = t.how

  return (
    <section id="how" className="bg-gray-50 py-[72px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold text-blue uppercase tracking-[0.1em] block mb-2.5">{h.kicker}</span>
          <h2 className="font-sora text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold tracking-tight text-ink mb-3">
            {h.h2a}<br />{h.h2b}
          </h2>
          <p className="text-[15px] text-muted leading-[1.75] max-w-[540px] mx-auto">{h.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {h.steps.map((step, i) => (
            <div key={i} className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center">
              {i < h.steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-[18px] text-gray-200 font-bold z-10">→</span>
              )}
              <div className="w-[46px] h-[46px] bg-navy text-white rounded-full font-sora text-[18px] font-extrabold flex items-center justify-center mx-auto mb-3.5">
                {step.num}
              </div>
              <span className="text-[26px] mb-2 block">{step.icon}</span>
              <div className="font-sora font-extrabold text-[15px] mb-2">{step.title}</div>
              <p className="text-[13.5px] text-muted leading-[1.65] mb-2.5">{step.desc}</p>
              <span className="inline-block bg-sky text-blue text-[11px] font-bold px-2.5 py-1 rounded-full">{step.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
