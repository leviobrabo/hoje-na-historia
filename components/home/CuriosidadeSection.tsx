'use client'

import { useEffect, useState } from 'react'
import { FaLightbulb } from 'react-icons/fa'

interface Curiosidade {
  titulo: string
  texto: string
}

const CuriosidadeSection = () => {
  const [cur, setCur] = useState<Curiosidade | null>(null)

  useEffect(() => {
    fetch('/api/curiosidade')
      .then((r) => r.json())
      .then(setCur)
      .catch(() => null)
  }, [])

  if (!cur) return (
    <div className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 p-5 animate-pulse">
      <div className="h-4 bg-CustomSepia/10 rounded w-1/2 mb-3" />
      <div className="h-3 bg-CustomSepia/10 rounded w-full mb-2" />
      <div className="h-3 bg-CustomSepia/10 rounded w-5/6" />
    </div>
  )

  return (
    <div className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FaLightbulb className="text-CustomOldGold text-lg shrink-0" />
        <span className="text-[10px] uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
          Curiosidade Histórica
        </span>
      </div>
      <h3 className="font-bold text-base text-CustomSepia dark:text-CustomAntiqueWhite leading-tight">
        {cur.titulo}
      </h3>
      <p className="text-sm text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
        {cur.texto}
      </p>
    </div>
  )
}

export default CuriosidadeSection
