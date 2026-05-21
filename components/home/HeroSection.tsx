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
    <section className="relative w-full py-16 sm:py-20 px-4 text-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-CustomSepia/10 via-CustomOldGold/5 to-transparent dark:from-[#0d1b2a] dark:via-[#1a2d40]/70 dark:to-transparent" />
      {/* Gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-CustomOldGold/12 dark:bg-CustomOldGold/8 blur-3xl pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBF0E2] dark:from-[#0d1b2a] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-CustomSepia/55 dark:text-CustomAntiqueWhite/40 mb-4">
          {dateStr || ' '}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-CustomSepia dark:text-CustomAntiqueWhite mb-5 leading-tight">
          O que aconteceu{' '}
          <span className="bg-gradient-to-r from-CustomOldGold via-[#E8A020] to-CustomTerracotta bg-clip-text text-transparent">
            hoje
          </span>{' '}
          na história?
        </h1>
        <p className="text-base sm:text-lg text-CustomSepia/65 dark:text-CustomAntiqueWhite/60 max-w-xl mx-auto mb-10 leading-relaxed">
          Guerras, descobertas, civilizações e personagens que moldaram o mundo — um novo fato histórico a cada dia.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/eventos"
            className="px-7 py-3 bg-gradient-to-r from-CustomSepia to-[#8B5E3C] dark:from-CustomOldGold dark:to-[#E8A020] text-[#FAEBD7] dark:text-CustomCharcoal rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-CustomSepia/25 dark:shadow-CustomOldGold/25"
          >
            Ver eventos de hoje
          </Link>
          <Link
            href="/civilizacoes"
            className="px-7 py-3 border border-CustomSepia/30 dark:border-CustomAntiqueWhite/25 text-CustomSepia dark:text-CustomAntiqueWhite rounded-full text-sm font-semibold hover:bg-CustomSepia/8 dark:hover:bg-white/8 transition-colors backdrop-blur-sm"
          >
            Explorar civilizações
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
