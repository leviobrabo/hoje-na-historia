'use client'

import { useEffect, useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'
import Phrase from '@/components/Phrase'

export default function EventosPage() {
  const [hoje, setHoje] = useState('')
  const [mesAtual, setMesAtual] = useState(0)
  const [diaAtual, setDiaAtual] = useState(0)
  const [mesSelecionado, setMesSelecionado] = useState(0)
  const [diaSelecionado, setDiaSelecionado] = useState(0)

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ]

  useEffect(() => {
    const now = new Date()
    const m = now.getMonth()
    const d = now.getDate()
    setMesAtual(m)
    setDiaAtual(d)
    setMesSelecionado(m)
    setDiaSelecionado(d)
    setHoje(now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))
  }, [])

  const diasNoMes = new Date(new Date().getFullYear(), mesSelecionado + 1, 0).getDate()

  const isHoje = mesSelecionado === mesAtual && diaSelecionado === diaAtual

  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-12">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-CustomSepia/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaCalendarAlt className="text-2xl text-CustomOldGold" />
            <span className="text-xs uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
              Calendário Histórico
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hoje na História</h1>
          {hoje && (
            <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 capitalize">{hoje}</p>
          )}
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Seletor de data */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-CustomSepia/50 dark:text-CustomAntiqueWhite/40 uppercase tracking-widest">
              Mês
            </label>
            <select
              value={mesSelecionado}
              onChange={(e) => {
                const m = Number(e.target.value)
                setMesSelecionado(m)
                setDiaSelecionado(1)
              }}
              className="px-3 py-2 rounded-lg border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 bg-CustomAntiqueWhite dark:bg-CustomCharcoal text-sm focus:outline-none focus:border-CustomOldGold"
            >
              {meses.map((m, i) => (
                <option key={i} value={i}>{m}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-CustomSepia/50 dark:text-CustomAntiqueWhite/40 uppercase tracking-widest">
              Dia
            </label>
            <select
              value={diaSelecionado}
              onChange={(e) => setDiaSelecionado(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 bg-CustomAntiqueWhite dark:bg-CustomCharcoal text-sm focus:outline-none focus:border-CustomOldGold"
            >
              {Array.from({ length: diasNoMes }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setMesSelecionado(mesAtual)
                setDiaSelecionado(diaAtual)
              }}
              className="px-4 py-2 rounded-lg border border-CustomOldGold/50 text-CustomOldGold text-sm hover:bg-CustomOldGold/10 transition-colors"
            >
              Hoje
            </button>
          </div>
        </div>

        {isHoje && (
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-CustomOldGold/10 border border-CustomOldGold/30 text-sm text-CustomOldGold w-fit">
            <FaCalendarAlt className="text-xs" />
            Exibindo eventos de hoje
          </div>
        )}

        <AdBanner position="leaderboard" />

        {/* Eventos do dia */}
        <section className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-CustomOldGold rounded-full" />
            <h2 className="text-xl font-bold">
              Eventos de {diaSelecionado} de {meses[mesSelecionado]}
            </h2>
          </div>
          <Phrase month={mesSelecionado} day={diaSelecionado} />
        </section>

        <AdBanner position="mobile-banner" />

        {/* Calendário de dias do mês */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-CustomTerracotta rounded-full" />
            <h2 className="text-xl font-bold">{meses[mesSelecionado]} — Calendário</h2>
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: diasNoMes }, (_, i) => i + 1).map((d) => {
              const isSelected = d === diaSelecionado
              const isToday = d === diaAtual && mesSelecionado === mesAtual
              return (
                <button
                  key={d}
                  onClick={() => setDiaSelecionado(d)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${
                    isSelected
                      ? 'bg-CustomOldGold text-CustomCharcoal'
                      : isToday
                      ? 'border-2 border-CustomOldGold text-CustomOldGold'
                      : 'border border-CustomSepia/10 dark:border-CustomAntiqueWhite/10 hover:border-CustomOldGold/40 hover:text-CustomOldGold'
                  }`}
                >
                  {d}
                </button>
              )
            })}
          </div>
        </section>

        <div className="mt-10">
          <AdBanner position="rectangle" />
        </div>
      </div>
    </main>
  )
}
