'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const HeroSection = () => {
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const formatted = now.toLocaleDateString('pt-BR', options)
    setDateStr(formatted.charAt(0).toUpperCase() + formatted.slice(1))
  }, [])

  return (
    <section className="w-full py-12 px-4 text-center bg-gradient-to-b from-CustomSepia/10 to-transparent dark:from-CustomCharcoal/60 dark:to-transparent">
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 mb-3">
        {dateStr || ' '}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-CustomSepia dark:text-CustomAntiqueWhite mb-4 leading-tight">
        O que aconteceu{' '}
        <span className="text-CustomOldGold">hoje</span>{' '}
        na história?
      </h1>
      <p className="text-base sm:text-lg text-CustomSepia/70 dark:text-CustomAntiqueWhite/70 max-w-2xl mx-auto mb-8">
        Explore os eventos, personagens e civilizações que moldaram o mundo até hoje.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/eventos"
          className="px-6 py-2.5 bg-CustomSepia text-CustomAntiqueWhite dark:bg-CustomOldGold dark:text-CustomCharcoal rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Ver eventos de hoje
        </Link>
        <Link
          href="/civilizacoes"
          className="px-6 py-2.5 border border-CustomSepia dark:border-CustomAntiqueWhite/40 text-CustomSepia dark:text-CustomAntiqueWhite rounded-full text-sm font-semibold hover:bg-CustomSepia/10 dark:hover:bg-CustomAntiqueWhite/10 transition-colors"
        >
          Explorar civilizações
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
