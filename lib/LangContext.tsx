'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang } from '@/lib/translations'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations.en
}

const Ctx = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)
