'use client'
import { useLang } from '@/lib/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="px-6 pt-[72px] pb-20" style={{ background: 'linear-gradient(155deg,#fff 52%,#e8f2fb 100%)' }}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-sky border border-sky2 text-blue text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-blink" />
            {h.kicker}
          </div>

          <h1 className="font-sora text-[clamp(2rem,3.8vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-ink mb-4">
            {h.h1a}<br />{h.h1b}<br /><span className="text-blue">{h.h1c}</span>
          </h1>

          <p className="text-[16px] text-muted leading-[1.75] max-w-[480px] mb-7">{h.desc}</p>

          <div className="flex flex-wrap gap-2.5 mb-6">
            <a href="#contact" className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-xl text-[15px] font-bold text-white bg-blue hover:bg-blue2 transition-all hover:-translate-y-px shadow-md">
              {h.cta1}
            </a>
            <a href="#how" className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-xl text-[15px] font-bold text-blue border-[1.5px] border-blue hover:bg-sky transition-colors">
              {h.cta2}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-[13px] text-muted">
            <div className="flex">
              {['RS','PK','AM','VT'].map(i => (
                <span key={i} className="w-7 h-7 rounded-full bg-sky2 border-2 border-white flex items-center justify-center text-[9px] font-bold text-navy -mr-1.5 font-sora">
                  {i}
                </span>
              ))}
            </div>
            <span>{h.trust}</span>
          </div>
        </div>

        {/* Right — admin mock */}
        <div className="hidden lg:block">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_40px_rgba(26,58,92,0.14)] p-[22px] animate-float">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sora text-[14px] font-extrabold">{h.adminTitle}</span>
              <span className="text-[10px] font-bold bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">{h.live}</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 mb-4">
              {[
                { label: h.agents, val: '42', chg: '↑ 3 today', accent: false },
                { label: h.leads, val: '284', chg: '↑ 18 today', accent: true },
                { label: h.packages, val: '19', chg: '↑ 2 new', accent: false },
              ].map(s => (
                <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-0.5">{s.label}</div>
                  <div className={`font-sora text-[20px] font-extrabold leading-none ${s.accent ? 'text-blue' : 'text-ink'}`}>{s.val}</div>
                  <div className="text-[10px] text-green-600 font-semibold mt-0.5">{s.chg}</div>
                </div>
              ))}
            </div>

            <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-1.5">{h.recentLeads}</div>
            {[
              { i: 'RK', n: 'Rohit Kumar', p: h.bali, s: h.statusNew, sc: 'bg-blue-50 text-blue-700' },
              { i: 'PT', n: 'Priya Tiwari', p: h.manali, s: h.statusTalk, sc: 'bg-yellow-50 text-yellow-800' },
              { i: 'AS', n: 'Aryan Singh', p: h.dubai, s: h.statusBooked, sc: 'bg-green-50 text-green-700' },
            ].map((r, idx) => (
              <div key={idx} className={`flex items-center gap-1.5 py-1.5 ${idx < 2 ? 'border-b border-gray-100' : ''}`}>
                <span className="w-[22px] h-[22px] rounded-full bg-sky text-blue text-[8px] font-extrabold flex items-center justify-center flex-shrink-0">{r.i}</span>
                <span className="text-[11px] font-semibold flex-1">{r.n}</span>
                <span className="text-[10px] text-muted flex-[1.2]">{r.p}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${r.sc}`}>{r.s}</span>
              </div>
            ))}

            <div className="mt-2.5 bg-sky border border-sky2 rounded-lg p-2 flex gap-2 items-center">
              <div className="w-6 h-6 bg-blue rounded-md flex items-center justify-center text-[12px] flex-shrink-0">🔔</div>
              <div>
                <div className="text-[11px] font-bold">{h.notifTitle}</div>
                <div className="text-[10px] text-muted">{h.notifSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
