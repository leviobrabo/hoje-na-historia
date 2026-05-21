'use client'

import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

interface Frase {
  quote: string
  author: string
}

const FraseSection = () => {
  const [frase, setFrase] = useState<Frase | null>(null)

  useEffect(() => {
    fetch('/api/frase')
      .then((r) => r.json())
      .then(setFrase)
      .catch(() => null)
  }, [])

  if (!frase) return (
    <div className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 p-5 animate-pulse">
      <div className="h-4 bg-CustomSepia/10 rounded w-full mb-2" />
      <div className="h-4 bg-CustomSepia/10 rounded w-4/5 mb-3" />
      <div className="h-3 bg-CustomSepia/10 rounded w-1/3" />
    </div>
  )

  return (
    <div className="rounded-xl border border-CustomOldGold/30 bg-CustomOldGold/5 dark:bg-CustomOldGold/10 p-5 flex flex-col gap-3">
      <div className="flex items-start gap-2">
        <FaQuoteLeft className="text-CustomOldGold text-xl mt-1 shrink-0" />
        <p className="text-sm sm:text-base text-CustomSepia dark:text-CustomAntiqueWhite leading-relaxed italic font-medium">
          {frase.quote}
        </p>
      </div>
      <p className="text-xs text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 text-right font-semibold">
        — {frase.author}
      </p>
      <span className="text-[10px] uppercase tracking-widest text-CustomSepia/40 dark:text-CustomAntiqueWhite/30">
        Frase Histórica do Dia
      </span>
    </div>
  )
}

export default FraseSection
