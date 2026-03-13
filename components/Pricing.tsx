'use client'
import { useLang } from '@/lib/LangContext'

interface PricingProps {
  unlocked: boolean
}

export default function Pricing({ unlocked }: PricingProps) {
  const { t } = useLang()
  const p = t.pricing

  return (
    <section id="pricing" className="bg-gray-50 py-[72px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold text-blue uppercase tracking-[0.1em] block mb-2.5">{p.kicker}</span>
          <h2 className="font-sora text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold tracking-tight text-ink mb-3">
            {p.h2a}<br />{p.h2b}
          </h2>
          <p className="text-[15px] text-muted leading-[1.75] max-w-[540px] mx-auto">{p.sub}</p>
        </div>

        <div className="max-w-[900px] mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(26,58,92,0.14)]">
          {/* Header */}
          <div className="bg-navy text-white px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-sora text-[19px] font-extrabold mb-1">{p.cardTitle}</h3>
              <p className="text-[13px] text-white/65">{p.cardSub}</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
              <div className="text-[11px] text-white/60 font-semibold uppercase tracking-wider">{p.startingLabel}</div>
              <div className="font-sora text-[28px] font-extrabold text-white leading-none">
                {p.startingPrice}<span className="text-[14px] font-medium text-white/60">{p.startingPer}</span>
              </div>
              <div className="text-[11px] text-white/60">{p.startingSub}</div>
            </div>
          </div>

          {/* Plans grid — 4 columns */}
          <div className={`grid grid-cols-2 md:grid-cols-4 ${!unlocked ? 'blur-plans' : 'animate-reveal'}`}>
            {p.plans.map((plan, i) => (
              <div
                key={i}
                className={`p-6 border-r border-b border-gray-200 last:border-r-0 md:[&:nth-child(4)]:border-r-0 ${plan.featured ? 'bg-sky' : 'bg-white'} relative`}
              >
                {'badge' in plan && plan.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 rounded-full">
                    {plan.badge as string}
                  </span>
                )}
                <div className="text-[11px] font-bold text-muted uppercase tracking-[0.08em] mb-1.5">{plan.name}</div>
                <div className="font-sora text-[26px] font-extrabold text-ink mb-0.5">
                  {plan.price} <span className="text-[13px] font-medium text-muted">{plan.per}</span>
                </div>
                <div className="text-[12px] text-blue font-semibold mb-4">{plan.bill}</div>
                <div className="h-px bg-gray-200 mb-3" />
                <div className="flex flex-col gap-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="text-[12px] text-ink2 flex gap-1.5 py-1">
                      <span className="text-blue font-bold flex-shrink-0">✓</span>{f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Lock overlay */}
          {!unlocked && (
            <div className="bg-gray-50/96 border-t border-gray-200 px-8 py-7 text-center">
              <div className="text-[30px] mb-2.5">🔒</div>
              <div className="font-sora text-[18px] font-extrabold text-ink mb-1.5">{p.lockTitle}</div>
              <p className="text-[14px] text-muted mb-5 max-w-[440px] mx-auto">{p.lockSub}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-bold text-white bg-blue hover:bg-blue2 transition-all hover:-translate-y-px shadow-md"
              >
                {p.lockCta}
              </a>
              <p className="text-[12px] text-muted mt-2.5">{p.lockNote}</p>
            </div>
          )}
        </div>

        {/* Domain note */}
        <div className="max-w-[900px] mx-auto mt-4 bg-sky border border-sky2 rounded-lg px-5 py-3.5 flex gap-2.5 items-start">
          <span className="text-[18px] flex-shrink-0">ℹ️</span>
          <div>
            <div className="text-[13px] font-bold text-navy mb-0.5">{p.domainNoteTitle}</div>
            <div className="text-[13px] text-muted leading-[1.6]">{p.domainNote}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
