'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/LangContext'

export default function UrgencyStrip({ slots }: { slots: number }) {
  const { t } = useLang()
  const u = t.urgency
  const [timer, setTimer] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date(), end = new Date()
      end.setHours(23, 59, 59, 999)
      const d = Math.max(0, end.getTime() - now.getTime())
      const h = String(Math.floor(d / 3600000)).padStart(2, '0')
      const m = String(Math.floor((d % 3600000) / 60000)).padStart(2, '0')
      const s = String(Math.floor((d % 60000) / 1000)).padStart(2, '0')
      setTimer(`${h}:${m}:${s}`)
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-sky border-y border-sky2 px-6 py-4">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-blue text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
            {u.badge}
          </span>
          <span className="text-[14px] text-navy font-semibold">
            {u.text} <strong className="text-blue">{slots} {u.spots}</strong> {u.textB} <strong className="text-blue">{u.trial}</strong> {u.textC}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[13px] text-muted">{u.endsIn}</span>
          <span className="font-extrabold text-navy tabular">{timer}</span>
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-lg text-[13px] font-bold text-white bg-blue hover:bg-blue2 transition-all hover:-translate-y-px">
            {u.cta}
          </a>
        </div>
      </div>
    </div>
  )
}
