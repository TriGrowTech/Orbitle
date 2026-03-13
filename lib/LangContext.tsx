'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, SafeTranslations } from '@/lib/translations'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: SafeTranslations
}

const Ctx = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  t: translations.en as unknown as SafeTranslations,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] as unknown as SafeTranslations }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)
