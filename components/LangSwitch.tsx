'use client'
import { useLang } from '@/lib/LangContext'

export default function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-0 border border-gray-200 rounded-lg overflow-hidden text-[13px] font-bold">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-blue text-white' : 'bg-white text-ink2 hover:bg-sky'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('hi')}
        className={`px-3 py-1.5 transition-colors ${lang === 'hi' ? 'bg-blue text-white' : 'bg-white text-ink2 hover:bg-sky'}`}
      >
        हि
      </button>
    </div>
  )
}
