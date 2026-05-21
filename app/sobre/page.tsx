import { FaTelegram, FaGlobe, FaHistory, FaBookOpen } from 'react-icons/fa'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça o Hoje na História — o site dedicado a explorar eventos, civilizações, personagens e curiosidades históricas em português.',
}

const recursos = [
  {
    icon: FaHistory,
    titulo: 'Eventos Históricos',
    descricao: 'Descubra o que aconteceu em cada dia do calendário — guerras, descobertas, nascimentos e mortes que mudaram o mundo.',
  },
  {
    icon: FaGlobe,
    titulo: 'Civilizações',
    descricao: 'Explore as grandes civilizações da história — do Egito Antigo ao Japão Feudal, com contexto e curiosidades.',
  },
  {
    icon: FaBookOpen,
    titulo: 'Personagens',
    descricao: 'Conheça vilões, inventores e mulheres extraordinárias que deixaram sua marca na história da humanidade.',
  },
]

export default function SobrePage() {
  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-16">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-CustomSepia/10 to-transparent py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Sobre o Hoje na História</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 text-lg leading-relaxed">
            Um projeto dedicado a tornar a história acessível, interessante e em português — todos os dias.
          </p>
        </div>
      </section>

      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col gap-10">
        {/* O Projeto */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">O Projeto</h2>
          <p className="text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
            O <strong>Hoje na História</strong> nasceu da curiosidade de entender o que aconteceu em cada dia do calendário histórico. Em vez de enciclopédias extensas e difíceis de navegar, queríamos uma forma simples, visual e em português de explorar a história do mundo.
          </p>
          <p className="text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
            O site apresenta eventos do dia, civilizações antigas, personagens marcantes, frases célebres e curiosidades históricas — tudo curado e escrito em português do Brasil para facilitar o aprendizado.
          </p>
        </section>

        {/* Recursos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">O que você encontra aqui</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recursos.map((r) => {
              const Icon = r.icon
              return (
                <div
                  key={r.titulo}
                  className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 p-5 flex flex-col gap-3"
                >
                  <Icon className="text-2xl text-CustomOldGold" />
                  <h3 className="font-bold text-base">{r.titulo}</h3>
                  <p className="text-xs text-CustomSepia/65 dark:text-CustomAntiqueWhite/55 leading-relaxed">
                    {r.descricao}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Bot Telegram */}
        <section className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <FaTelegram className="text-3xl text-blue-500" />
            <h2 className="text-xl font-bold">Bot no Telegram</h2>
          </div>
          <p className="text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
            Receba curiosidades e fatos históricos diariamente no seu Telegram. O canal <strong>@historia_br</strong> envia conteúdo histórico curado todos os dias, diretamente no seu celular.
          </p>
          <Link
            href="https://t.me/historia_br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors w-fit"
          >
            <FaTelegram />
            Seguir @historia_br
          </Link>
        </section>

        {/* Fontes */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Fontes e Créditos</h2>
          <p className="text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
            O conteúdo histórico é baseado em fontes abertas e enciclopédias reconhecidas, incluindo Wikipedia, Encyclopædia Britannica, e obras históricas de domínio público. Imagens são obtidas via Wikimedia Commons sob licenças Creative Commons.
          </p>
          <p className="text-CustomSepia/80 dark:text-CustomAntiqueWhite/75 leading-relaxed">
            Este é um projeto independente e educacional, sem fins lucrativos diretos. Para dúvidas ou colaborações, entre em contato pelo Telegram.
          </p>
        </section>

        {/* Links */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Explore o Site</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/eventos', label: 'Hoje na História' },
              { href: '/civilizacoes', label: 'Civilizações' },
              { href: '/personagens', label: 'Personagens' },
              { href: '/linha-do-tempo', label: 'Linha do Tempo' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg border border-CustomSepia/20 dark:border-CustomAntiqueWhite/15 text-sm hover:border-CustomOldGold/50 hover:text-CustomOldGold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
