'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Civilizacao {
  titulo: string
  texto: string
  imagem: string
}

const CivilizacaoSection = () => {
  const [civ, setCiv] = useState<Civilizacao | null>(null)

  useEffect(() => {
    fetch('/api/civilizacoes')
      .then((r) => r.json())
      .then(setCiv)
      .catch(() => null)
  }, [])

  if (!civ) return (
    <div className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 p-5 animate-pulse">
      <div className="h-4 bg-CustomSepia/10 rounded w-3/4 mb-3" />
      <div className="h-3 bg-CustomSepia/10 rounded w-full mb-2" />
      <div className="h-3 bg-CustomSepia/10 rounded w-5/6" />
    </div>
  )

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 overflow-hidden">
      {civ.imagem && (
        <div className="relative h-40 w-full">
          <Image
            src={civ.imagem}
            alt={civ.titulo}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-2 left-3 text-[10px] uppercase tracking-widest text-white/80">
            Civilização do Dia
          </span>
        </div>
      )}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-base text-CustomSepia dark:text-CustomAntiqueWhite leading-tight">
          {civ.titulo}
        </h3>
        <p className="text-sm text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 line-clamp-4 leading-relaxed">
          {civ.texto}
        </p>
        <Link
          href="/civilizacoes"
          className="text-xs text-CustomOldGold hover:underline mt-1 font-medium"
        >
          Ver todas as civilizações →
        </Link>
      </div>
    </div>
  )
}

export default CivilizacaoSection
