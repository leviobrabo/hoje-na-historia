import HeroSection from '@/components/home/HeroSection'
import CivilizacaoSection from '@/components/home/CivilizacaoSection'
import FraseSection from '@/components/home/FraseSection'
import CuriosidadeSection from '@/components/home/CuriosidadeSection'
import PersonagemDestaque from '@/components/home/PersonagemDestaque'
import CategoryGrid from '@/components/home/CategoryGrid'
import AdBanner from '@/components/AdBanner'
import Phrase from '@/components/Phrase'

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite">
      {/* Hero */}
      <HeroSection />

      {/* Ad - leaderboard below hero */}
      <AdBanner position="leaderboard" />

      {/* Eventos do dia - carousel existente */}
      <section className="w-full max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-5 bg-CustomOldGold rounded-full" />
          <h2 className="text-xl font-bold text-CustomSepia dark:text-CustomAntiqueWhite">
            Eventos de Hoje
          </h2>
        </div>
        <div className="flex justify-center">
          <Phrase />
        </div>
      </section>

      {/* Ad mobile */}
      <AdBanner position="mobile-banner" />

      {/* Grid - civilização + frase */}
      <section className="w-full max-w-5xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-5 bg-CustomTerracotta rounded-full" />
              <h2 className="text-lg font-bold text-CustomSepia dark:text-CustomAntiqueWhite">
                Civilização do Dia
              </h2>
            </div>
            <CivilizacaoSection />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-5 bg-CustomOldGold rounded-full" />
                <h2 className="text-lg font-bold text-CustomSepia dark:text-CustomAntiqueWhite">
                  Frase do Dia
                </h2>
              </div>
              <FraseSection />
            </div>
          </div>
        </div>
      </section>

      {/* Curiosidade */}
      <section className="w-full max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-5 bg-CustomSepia dark:bg-CustomAntiqueWhite rounded-full" />
          <h2 className="text-lg font-bold text-CustomSepia dark:text-CustomAntiqueWhite">
            Curiosidade Histórica
          </h2>
        </div>
        <CuriosidadeSection />
      </section>

      {/* Ad rectangle */}
      <div className="flex justify-center w-full px-4">
        <AdBanner position="rectangle" />
      </div>

      {/* Personagem destaque */}
      <section className="w-full max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-5 bg-CustomTerracotta rounded-full" />
          <h2 className="text-lg font-bold text-CustomSepia dark:text-CustomAntiqueWhite">
            Personagem em Destaque
          </h2>
        </div>
        <PersonagemDestaque />
      </section>

      {/* Ad leaderboard */}
      <AdBanner position="leaderboard" />

      {/* Category grid */}
      <CategoryGrid />
    </main>
  )
}
