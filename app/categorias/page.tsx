import Link from 'next/link'
import { FaFistRaised, FaFlask, FaFemale, FaSkull, FaLandmark, FaScroll, FaGlobe, FaBookOpen } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Categorias',
  description: 'Explore a história por categorias: guerras, descobertas científicas, civilizações, personagens e muito mais.',
}

const categorias = [
  {
    href: '/categorias/guerras',
    icon: FaFistRaised,
    titulo: 'Guerras & Conflitos',
    descricao: 'Das batalhas da Antiguidade à Segunda Guerra Mundial — os conflitos que redesenharam fronteiras e destinos.',
    cor: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-500/10',
    borda: 'hover:border-red-500/40',
    count: '50+ guerras',
  },
  {
    href: '/categorias/descobertas',
    icon: FaFlask,
    titulo: 'Descobertas & Ciência',
    descricao: 'As invenções e descobertas científicas que transformaram para sempre a vida da humanidade.',
    cor: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10',
    borda: 'hover:border-green-500/40',
    count: '40+ descobertas',
  },
  {
    href: '/civilizacoes',
    icon: FaGlobe,
    titulo: 'Civilizações',
    descricao: 'Explore as grandes civilizações — do Egito Antigo ao Império Romano, da China Medieval ao Azteca.',
    cor: 'text-CustomOldGold dark:text-CustomOldGold',
    bg: 'bg-CustomOldGold/10',
    borda: 'hover:border-CustomOldGold/40',
    count: '52 civilizações',
  },
  {
    href: '/personagens',
    icon: FaSkull,
    titulo: 'Personagens Históricos',
    descricao: 'Vilões, inventores, rainhas — os personagens mais fascinantes e impactantes da história.',
    cor: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    borda: 'hover:border-purple-500/40',
    count: '70+ personagens',
  },
  {
    href: '/linha-do-tempo',
    icon: FaScroll,
    titulo: 'Linha do Tempo',
    descricao: 'Da Pré-história ao século XXI — os grandes marcos da história humana em ordem cronológica.',
    cor: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    borda: 'hover:border-blue-500/40',
    count: '5 eras históricas',
  },
  {
    href: '/eventos',
    icon: FaLandmark,
    titulo: 'Hoje na História',
    descricao: 'Calendário histórico — descubra o que aconteceu em qualquer dia do ano ao longo dos séculos.',
    cor: 'text-CustomTerracotta dark:text-orange-400',
    bg: 'bg-orange-500/10',
    borda: 'hover:border-orange-500/40',
    count: '365 dias',
  },
]

export default function CategoriasPage() {
  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-16">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-CustomSepia/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaBookOpen className="text-2xl text-CustomOldGold" />
            <span className="text-xs uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
              Explore por Tema
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Categorias</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 max-w-2xl">
            Navegue pela história por tema — guerras, descobertas, civilizações, personagens e muito mais.
          </p>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4">
        <AdBanner position="leaderboard" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {categorias.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 ${cat.bg} p-6 flex flex-col gap-3 transition-all ${cat.borda} hover:scale-[1.01]`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`text-2xl ${cat.cor}`} />
                  <span className="text-xs text-CustomSepia/40 dark:text-CustomAntiqueWhite/30">{cat.count}</span>
                </div>
                <h2 className={`font-bold text-lg ${cat.cor}`}>{cat.titulo}</h2>
                <p className="text-sm text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 leading-relaxed">
                  {cat.descricao}
                </p>
                <span className={`text-xs font-medium ${cat.cor} mt-auto`}>
                  Explorar →
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-12">
          <AdBanner position="leaderboard" />
        </div>
      </div>
    </main>
  )
}
