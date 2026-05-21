'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaSkull, FaFlask, FaFemale } from 'react-icons/fa'

interface Personagem {
  nome: string
  texto: string
  terra_natal?: string
  nascimento?: string
  morte?: string
  pais?: string
  invencao?: string
  periodo?: string
  posicao?: number
}

const tipoConfig = {
  viloes: { label: 'Vilão Histórico', icon: FaSkull, color: 'text-red-600 dark:text-red-400', linkLabel: 'Ver todos os vilões' },
  inventores: { label: 'Inventor em Destaque', icon: FaFlask, color: 'text-green-600 dark:text-green-400', linkLabel: 'Ver todos os inventores' },
  mulheres: { label: 'Mulher na História', icon: FaFemale, color: 'text-purple-600 dark:text-purple-400', linkLabel: 'Ver todas as mulheres históricas' },
}

type TipoPersonagem = keyof typeof tipoConfig

const PersonagemDestaque = () => {
  const [personagem, setPersonagem] = useState<Personagem | null>(null)
  const [tipo, setTipo] = useState<TipoPersonagem>('viloes')

  useEffect(() => {
    const tipos: TipoPersonagem[] = ['viloes', 'inventores', 'mulheres']
    const dayOfWeek = new Date().getDay()
    const tipoAtual = tipos[dayOfWeek % tipos.length]
    setTipo(tipoAtual)

    const offset = (new Date().getDate() - 1) % 10
    fetch(`/api/personagens?tipo=${tipoAtual}&limit=1&offset=${offset}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.data && d.data[0]) setPersonagem(d.data[0])
      })
      .catch(() => null)
  }, [])

  if (!personagem) return (
    <div className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 p-5 animate-pulse">
      <div className="h-5 bg-CustomSepia/10 rounded w-1/2 mb-3" />
      <div className="h-3 bg-CustomSepia/10 rounded w-full mb-2" />
      <div className="h-3 bg-CustomSepia/10 rounded w-5/6" />
    </div>
  )

  const config = tipoConfig[tipo]

  return (
    <div className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <config.icon className={`text-lg ${config.color} shrink-0`} />
        <span className="text-[10px] uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
          {config.label}
        </span>
      </div>
      <h3 className="font-bold text-lg text-CustomSepia dark:text-CustomAntiqueWhite leading-tight">
        {personagem.nome}
      </h3>
      {(personagem.terra_natal || personagem.pais) && (
        <p className="text-xs text-CustomSepia/60 dark:text-CustomAntiqueWhite/50">
          {personagem.terra_natal || personagem.pais}
          {personagem.nascimento && ` • ${personagem.nascimento}`}
          {personagem.periodo && ` • ${personagem.periodo}`}
        </p>
      )}
      {personagem.invencao && (
        <p className="text-xs font-semibold text-CustomOldGold">
          Invenção: {personagem.invencao}
        </p>
      )}
      <p className="text-sm text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed line-clamp-4">
        {personagem.texto}
      </p>
      <Link
        href="/personagens"
        className="text-xs text-CustomOldGold hover:underline mt-1 font-medium"
      >
        {config.linkLabel} →
      </Link>
    </div>
  )
}

export default PersonagemDestaque
