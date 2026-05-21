'use client'

import { useEffect, useState } from 'react'
import { FaSkull, FaFlask, FaFemale, FaSearch } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'

interface Personagem {
  posicao?: number
  nome: string
  terra_natal?: string
  pais?: string
  nascimento?: string
  morte?: string
  periodo?: string
  invencao?: string
  legado?: string
  texto: string
}

type Tab = 'viloes' | 'inventores' | 'mulheres'

const tabConfig = {
  viloes: {
    label: 'Vilões Históricos',
    icon: FaSkull,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-600',
    desc: 'Os maiores criminosos e tiranos que a história registrou.',
  },
  inventores: {
    label: 'Inventores & Cientistas',
    icon: FaFlask,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-600',
    desc: 'Mentes brilhantes que transformaram o mundo com suas descobertas.',
  },
  mulheres: {
    label: 'Mulheres na História',
    icon: FaFemale,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-600',
    desc: 'Mulheres extraordinárias que desafiaram seu tempo e deixaram legado eterno.',
  },
}

export default function PersonagensPage() {
  const [tab, setTab] = useState<Tab>('viloes')
  const [personagens, setPersonagens] = useState<Personagem[]>([])
  const [loading, setLoading] = useState(true)
  const [busca, setBusca] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setPersonagens([])
    fetch(`/api/personagens?tipo=${tab}&limit=50`)
      .then((r) => r.json())
      .then((d) => {
        setPersonagens(d.data || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [tab])

  const filtered = personagens.filter(
    (p) =>
      busca === '' ||
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      (p.terra_natal || p.pais || '').toLowerCase().includes(busca.toLowerCase())
  )

  const config = tabConfig[tab]

  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-12">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-CustomSepia/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Personagens Históricos</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 max-w-2xl">
            Conheça vilões, inventores e mulheres que marcaram a história da humanidade.
          </p>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 border-b border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 mb-6">
          {(Object.keys(tabConfig) as Tab[]).map((t) => {
            const c = tabConfig[t]
            const Icon = c.icon
            return (
              <button
                key={t}
                onClick={() => { setTab(t); setBusca(''); setExpanded(null) }}
                className={`flex items-center gap-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === t
                    ? `border-CustomOldGold ${c.color}`
                    : 'border-transparent text-CustomSepia/50 dark:text-CustomAntiqueWhite/40 hover:text-CustomSepia dark:hover:text-CustomAntiqueWhite'
                }`}
              >
                <Icon className="text-base" />
                <span className="hidden sm:inline">{c.label}</span>
                <span className="sm:hidden">{t === 'viloes' ? 'Vilões' : t === 'inventores' ? 'Inventores' : 'Mulheres'}</span>
              </button>
            )
          })}
        </div>

        <p className="text-sm text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 mb-5">{config.desc}</p>

        {/* Busca */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-CustomSepia/30 dark:text-CustomAntiqueWhite/30 text-sm" />
          <input
            type="text"
            placeholder={`Buscar em ${config.label}...`}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 bg-transparent text-sm focus:outline-none focus:border-CustomOldGold"
          />
        </div>

        <AdBanner position="leaderboard" />

        {/* Lista */}
        {loading ? (
          <div className="flex flex-col gap-3 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-CustomSepia/10 p-5 animate-pulse">
                <div className="h-5 bg-CustomSepia/10 rounded w-1/3 mb-3" />
                <div className="h-3 bg-CustomSepia/10 rounded w-full mb-2" />
                <div className="h-3 bg-CustomSepia/10 rounded w-4/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            {filtered.map((p, i) => {
              const key = p.nome
              const isOpen = expanded === key
              return (
                <article
                  key={i}
                  className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 overflow-hidden"
                >
                  <button
                    className="w-full text-left p-5 flex items-start gap-4"
                    onClick={() => setExpanded(isOpen ? null : key)}
                  >
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      {p.posicao && (
                        <span className="text-xs font-bold text-CustomOldGold">#{p.posicao}</span>
                      )}
                      <config.icon className={`text-xl ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-bold text-base leading-tight">{p.nome}</h2>
                      <p className="text-xs text-CustomSepia/55 dark:text-CustomAntiqueWhite/45 mt-1">
                        {p.terra_natal || p.pais || ''}
                        {p.nascimento && ` · Nasc. ${p.nascimento}`}
                        {p.morte && ` · Morte: ${p.morte}`}
                        {p.periodo && ` · ${p.periodo}`}
                      </p>
                      {p.invencao && (
                        <p className="text-xs text-CustomOldGold font-semibold mt-1">
                          Invenção: {p.invencao}
                        </p>
                      )}
                      {p.legado && (
                        <p className="text-xs text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 italic mt-1 line-clamp-1">
                          {p.legado}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 text-CustomSepia/30 dark:text-CustomAntiqueWhite/30 text-lg">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <div className="border-t border-CustomSepia/10 dark:border-CustomAntiqueWhite/10 pt-4">
                        <p className="text-sm text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
                          {p.texto}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-CustomSepia/40 dark:text-CustomAntiqueWhite/30">
            Nenhum personagem encontrado.
          </div>
        )}

        <div className="mt-10">
          <AdBanner position="rectangle" />
        </div>
      </div>
    </main>
  )
}
