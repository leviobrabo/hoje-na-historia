'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGlobe, FaExternalLinkAlt } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'

interface Civilizacao {
  titulo: string
  texto: string
  link?: string
  imagem: string
}

interface CivilizacoesData {
  [key: string]: Civilizacao
}

const mesesNomes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export default function CivilizacoesPage() {
  const [data, setData] = useState<CivilizacoesData | null>(null)
  const [filtroMes, setFiltroMes] = useState<number | null>(null)
  const [busca, setBusca] = useState('')

  useEffect(() => {
    fetch('/api/civilizacoes?all=true')
      .then((r) => r.json())
      .then(setData)
      .catch(() => null)
  }, [])

  const entries = data
    ? Object.entries(data)
        .filter(([key]) => {
          const [m] = key.split('-').map(Number)
          return filtroMes === null || m === filtroMes
        })
        .filter(([, civ]) =>
          busca === '' || civ.titulo.toLowerCase().includes(busca.toLowerCase())
        )
        .sort(([a], [b]) => {
          const [am, ad] = a.split('-').map(Number)
          const [bm, bd] = b.split('-').map(Number)
          return am !== bm ? am - bm : ad - bd
        })
    : []

  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-12">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-CustomSepia/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaGlobe className="text-2xl text-CustomOldGold" />
            <span className="text-xs uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
              Enciclopédia de Civilizações
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Civilizações da História</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 max-w-2xl">
            Explore as grandes civilizações que moldaram o mundo — do Egito Antigo ao Japão Feudal, da Grécia Clássica ao Império Asteca.
          </p>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Buscar civilização..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 bg-transparent text-sm focus:outline-none focus:border-CustomOldGold"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFiltroMes(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filtroMes === null
                  ? 'bg-CustomOldGold text-CustomCharcoal'
                  : 'border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 hover:border-CustomOldGold/50'
              }`}
            >
              Todos
            </button>
            {mesesNomes.map((mes, i) => (
              <button
                key={i}
                onClick={() => setFiltroMes(i + 1)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filtroMes === i + 1
                    ? 'bg-CustomOldGold text-CustomCharcoal'
                    : 'border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 hover:border-CustomOldGold/50'
                }`}
              >
                {mes}
              </button>
            ))}
          </div>
        </div>

        <AdBanner position="leaderboard" />

        {/* Grid */}
        {!data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-CustomSepia/10 p-4 animate-pulse">
                <div className="h-32 bg-CustomSepia/10 rounded-lg mb-3" />
                <div className="h-4 bg-CustomSepia/10 rounded w-3/4 mb-2" />
                <div className="h-3 bg-CustomSepia/10 rounded w-full mb-1" />
                <div className="h-3 bg-CustomSepia/10 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {entries.map(([key, civ]) => {
              const [m] = key.split('-').map(Number)
              return (
                <article
                  key={key}
                  className="group rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 overflow-hidden hover:border-CustomOldGold/50 transition-colors"
                >
                  {civ.imagem && (
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={civ.imagem}
                        alt={civ.titulo}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-CustomCharcoal/60 to-transparent" />
                      <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-CustomOldGold/90 text-CustomCharcoal font-medium">
                        {mesesNomes[m - 1]}
                      </span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col gap-2">
                    <h2 className="font-bold text-base leading-tight">{civ.titulo}</h2>
                    <p className="text-xs text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 leading-relaxed line-clamp-3">
                      {civ.texto}
                    </p>
                    {civ.link && (
                      <a
                        href={civ.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-CustomOldGold hover:underline mt-1 font-medium"
                      >
                        <FaExternalLinkAlt className="text-[10px]" />
                        Saiba mais
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {entries.length === 0 && data && (
          <div className="text-center py-16 text-CustomSepia/40 dark:text-CustomAntiqueWhite/30">
            Nenhuma civilização encontrada para este filtro.
          </div>
        )}

        <div className="mt-10">
          <AdBanner position="leaderboard" />
        </div>
      </div>
    </main>
  )
}
