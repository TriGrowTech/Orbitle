'use client'
import { useLang } from '@/lib/LangContext'

export default function WaitlistComments() {
  const { t } = useLang()
  const c = t.comments

  return (
    <section className="bg-white py-[72px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-[12px] font-bold text-blue uppercase tracking-[0.1em] block mb-2.5">{c.kicker}</span>
          <h2 className="font-sora text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold tracking-tight text-ink mb-3">
            {c.h2a}<br />{c.h2b}
          </h2>
          <p className="text-[15px] text-muted leading-[1.75] max-w-[540px] mx-auto">{c.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.cards.map((card, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-[22px] hover:shadow-[0_8px_40px_rgba(26,58,92,0.14)] transition-shadow">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-[38px] h-[38px] rounded-full bg-sky2 text-navy text-[13px] font-extrabold flex items-center justify-center font-sora">
                  {card.initials}
                </div>
                <div>
                  <div className="font-bold text-[13px]">{card.name}</div>
                  <div className="text-[11px] text-muted">{card.co}</div>
                </div>
                <span className="ml-auto text-[10px] font-bold bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {c.badge}
                </span>
              </div>
              <p className="text-[13.5px] text-ink2 leading-[1.7]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
