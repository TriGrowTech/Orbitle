'use client'
import { useState } from 'react'
import { useLang } from '@/lib/LangContext'

interface ContactProps {
  slots: number
  onSuccess: () => void
}

export default function Contact({ slots, onSuccess }: ContactProps) {
  const { t, lang } = useLang()
  const c = t.contact

  const [intent, setIntent] = useState<'waitlist' | 'demo'>('waitlist')
  const [form, setForm] = useState({ name: '', phone: '', email: '', biz: '', domain: '', agents: '', msg: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) {
      alert(lang === 'hi' ? 'कृपया नाम, फोन और ईमेल भरें।' : 'Please fill in your name, phone, and email.')
      return
    }
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ intent, ...form }),
      })
    } catch (_) { /* graceful fallback */ }
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      onSuccess()
    }, 1200)
  }

  const inputCls = "w-full border-[1.5px] border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-[inherit] text-ink bg-white outline-none focus:border-blue transition-colors"
  const labelCls = "block text-[12px] font-bold text-ink2 mb-1.5 uppercase tracking-[0.05em]"

  return (
    <section id="contact" className="bg-white py-[72px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div>
            <span className="text-[12px] font-bold text-blue uppercase tracking-[0.1em] block mb-2.5">{c.kicker}</span>
            <h2 className="font-sora text-[clamp(1.6rem,2.5vw,2.1rem)] font-extrabold tracking-tight text-ink mb-3">
              {c.h2a}<br />{c.h2b}
            </h2>
            <p className="text-[15px] text-muted leading-[1.75] mb-5">{c.sub}</p>

            {/* Starting price badge */}
            <div className="inline-flex items-baseline gap-1.5 bg-sky border border-sky2 rounded-lg px-4 py-2.5 mb-5">
              <span className="text-[13px] text-muted font-semibold">{c.fromLabel}</span>
              <span className="font-sora text-[26px] font-extrabold text-blue leading-none">{c.price}</span>
              <span className="text-[13px] text-muted">{c.pm}</span>
              <span className="text-[11px] font-bold text-blue">{c.rate}</span>
            </div>

            <div className="flex flex-col gap-2.5 mb-5">
              {c.points.map((pt, i) => (
                <div key={i} className="flex gap-2 items-start text-[14px] text-ink2">
                  <span className="w-[18px] h-[18px] rounded-full bg-sky border-[1.5px] border-sky2 flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-extrabold text-blue">✓</span>
                  {pt}
                </div>
              ))}
            </div>

            <div className="bg-sky border border-sky2 rounded-2xl p-4 mb-4">
              <div className="text-[14px] font-bold text-navy mb-1">
                ⏳ {c.urgencyOnly} <span className="text-blue">{slots}</span> {c.urgencyTitle}
              </div>
              <div className="text-[13px] text-muted">{c.urgencySub}</div>
            </div>

            <div className="text-[14px] text-muted flex items-center gap-2">
              <span>📞</span>
              <span>{c.phone} <a href="tel:+919876543210" className="text-blue font-bold hover:underline">+91 98765 43210</a></span>
            </div>
          </div>

          {/* Right — form */}
          <div className="border border-gray-200 rounded-2xl shadow-[0_8px_40px_rgba(26,58,92,0.14)] overflow-hidden">
            <div className="bg-navy text-white px-6 py-5">
              <h3 className="font-sora text-[17px] font-extrabold mb-1">{c.formTitle}</h3>
              <p className="text-[13px] text-white/65">{c.formSub}</p>
            </div>

            {!success ? (
              <div className="p-[22px]">
                {/* Intent */}
                <label className={labelCls}>{c.intentLabel}</label>
                <div className="grid grid-cols-2 gap-2 mb-3.5">
                  {(['waitlist', 'demo'] as const).map(v => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setIntent(v)}
                      className={`flex flex-col p-2.5 rounded-lg border-[1.5px] text-left transition-all ${intent === v ? 'border-blue bg-sky' : 'border-gray-200'}`}
                    >
                      <span className="text-[13px] font-bold">{v === 'waitlist' ? c.intentWaitlist : c.intentDemo}</span>
                      <span className="text-[11px] text-muted mt-0.5">{v === 'waitlist' ? c.intentWaitlistSub : c.intentDemoSub}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>{c.nameLabel} <span className="text-red-500">*</span></label>
                    <input className={inputCls} value={form.name} onChange={set('name')} placeholder={c.namePlaceholder} />
                  </div>
                  <div>
                    <label className={labelCls}>{c.phoneLabel} <span className="text-red-500">*</span></label>
                    <input className={inputCls} value={form.phone} onChange={set('phone')} placeholder={c.phonePlaceholder} type="tel" />
                  </div>
                </div>

                <div className="mt-3">
                  <label className={labelCls}>{c.emailLabel} <span className="text-red-500">*</span></label>
                  <input className={inputCls} value={form.email} onChange={set('email')} placeholder={c.emailPlaceholder} type="email" />
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className={labelCls}>{c.bizLabel}</label>
                    <input className={inputCls} value={form.biz} onChange={set('biz')} placeholder={c.bizPlaceholder} />
                  </div>
                  <div>
                    <label className={labelCls}>{c.domainLabel}</label>
                    <input className={inputCls} value={form.domain} onChange={set('domain')} placeholder={c.domainPlaceholder} />
                  </div>
                </div>

                <div className="mt-3">
                  <label className={labelCls}>{c.agentsLabel}</label>
                  <select className={inputCls} value={form.agents} onChange={set('agents')}>
                    {c.agentsOptions.map((o, i) => <option key={i} value={i === 0 ? '' : o}>{o}</option>)}
                  </select>
                </div>

                <div className="mt-3 mb-4">
                  <label className={labelCls}>{c.msgLabel}</label>
                  <textarea className={inputCls + ' resize-none'} rows={2} value={form.msg} onChange={set('msg')} placeholder={c.msgPlaceholder} />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-blue hover:bg-navy text-white font-extrabold text-[14px] py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : c.submitBtn}
                </button>
                <p className="text-[11.5px] text-muted text-center mt-2">{c.submitFine}</p>
              </div>
            ) : (
              <div className="p-10 text-center">
                <div className="text-[44px] mb-3">🎉</div>
                <h4 className="font-sora text-[19px] font-extrabold mb-2">{c.successTitle}</h4>
                <p className="text-[14px] text-muted leading-[1.7]">
                  {c.successText.replace('{email}', form.email)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
