'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/lib/LangContext'

export default function TopBar({ slots }: { slots: number }) {
  const { t } = useLang()
  const [visible, setVisible] = useState(true)
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
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null
  const tb = t.topbar

  return (
    <div className="bg-navy2 text-white px-6 py-2.5 flex items-center justify-center gap-3.5 flex-wrap text-[13px] relative">
      <span className="bg-blue text-white text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded">
        {tb.badge}
      </span>
      <span className="text-white/80">
        {tb.msg} <strong className="text-white">{slots} {tb.slots}</strong> {tb.left}
      </span>
      <span className="font-bold text-[#90c8f0] tabular">{timer}</span>
      <a href="#contact" className="text-[#90c8f0] font-semibold border-b border-[#90c8f0]/40 hover:text-white transition-colors">
        {tb.link}
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-white/40 hover:text-white text-lg leading-none"
        aria-label="Close"
      >×</button>
    </div>
  )
}
