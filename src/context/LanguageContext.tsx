'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import langs from '@/data/langs'


type Language = 'en' | 'es'
type Langs = typeof langs


type LanguageContextType = {
  currentLang: Language
  setLanguage: (lang: Language) => void
  t: Langs['en']
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language')
    const initialLanguage = (saved as Language) || 'en'
    setCurrentLang(initialLanguage)
  }, [])

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang)
    window.location.reload()
  }

  return (
    <LanguageContext.Provider  
      value={{ currentLang, setLanguage, t: langs[currentLang] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context;
}