'use client'
import { useLang } from '@/lib/LangContext'

export default function LogoStrip() {
  const { t } = useLang()
  const l = t.logoStrip
  return (
    <div className="bg-gray-50 border-y border-gray-100 py-6 px-6">
      <p className="text-center text-[12px] font-semibold text-muted uppercase tracking-[0.1em] mb-4">{l.label}</p>
      <div className="flex gap-2.5 justify-center flex-wrap">
        {l.pills.map((p, i) => (
          <span key={i} className="bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-[13px] font-bold text-muted">{p}</span>
        ))}
      </div>
    </div>
  )
}
