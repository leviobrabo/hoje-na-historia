import { FaLandmark, FaScroll } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Linha do Tempo',
  description: 'Explore a linha do tempo da história da humanidade — das cavernas à era digital.',
}

const eras = [
  {
    periodo: 'Pré-história',
    intervalo: 'c. 3,3 milhões – 3.500 a.C.',
    cor: 'bg-amber-700',
    corTexto: 'text-amber-700 dark:text-amber-400',
    corBorda: 'border-amber-700/30',
    eventos: [
      { ano: 'c. 3,3 mi a.C.', titulo: 'Primeiras ferramentas de pedra', descricao: 'Homo habilis cria as primeiras ferramentas de pedra na África (Lomekwi 3, Quênia).' },
      { ano: 'c. 300 mil a.C.', titulo: 'Homo sapiens surge', descricao: 'Os primeiros humanos modernos aparecem no norte da África (Jebel Irhoud, Marrocos).' },
      { ano: 'c. 40 mil a.C.', titulo: 'Arte rupestre', descricao: 'Primeiras pinturas em cavernas documentadas — Chauvet (França) e Sulawesi (Indonésia).' },
      { ano: 'c. 10 mil a.C.', titulo: 'Revolução Agrícola', descricao: 'Domesticação de plantas e animais no Crescente Fértil marca o início da agricultura.' },
    ],
  },
  {
    periodo: 'Antiguidade',
    intervalo: '3.500 a.C. – 476 d.C.',
    cor: 'bg-yellow-600',
    corTexto: 'text-yellow-600 dark:text-yellow-400',
    corBorda: 'border-yellow-600/30',
    eventos: [
      { ano: 'c. 3.500 a.C.', titulo: 'Invenção da escrita', descricao: 'Sumérios desenvolvem a escrita cuneiforme na Mesopotâmia (atual Iraque).' },
      { ano: 'c. 3.100 a.C.', titulo: 'Unificação do Egito', descricao: 'Narmer (ou Menés) une o Alto e o Baixo Egito, inaugurando o período faraônico.' },
      { ano: '2.560 a.C.', titulo: 'Grande Pirâmide de Gizé', descricao: 'Conclusão da Grande Pirâmide de Quéops — a única das 7 Maravilhas antigas ainda de pé.' },
      { ano: '508 a.C.', titulo: 'Democracia em Atenas', descricao: 'Clístenes introduz a democracia em Atenas, revolucionando a organização política.' },
      { ano: '44 a.C.', titulo: 'Assassinato de César', descricao: 'Júlio César é assassinado nos Idos de Março, desencadeando o fim da República Romana.' },
      { ano: '476 d.C.', titulo: 'Queda de Roma', descricao: 'Rômulo Augusto, último imperador romano ocidental, é deposto por Odoacro.' },
    ],
  },
  {
    periodo: 'Idade Média',
    intervalo: '476 – 1.453 d.C.',
    cor: 'bg-stone-600',
    corTexto: 'text-stone-600 dark:text-stone-400',
    corBorda: 'border-stone-600/30',
    eventos: [
      { ano: '622', titulo: 'Hégira de Maomé', descricao: 'Maomé foge de Meca para Medina — o Anno Hegirae, início do calendário islâmico.' },
      { ano: '800', titulo: 'Coroação de Carlos Magno', descricao: 'Carlos Magno é coroado Imperador do Ocidente pelo Papa Leão III na véspera de Natal.' },
      { ano: '1.066', titulo: 'Conquista Normanda', descricao: 'Guilherme, o Conquistador, vence a Batalha de Hastings e conquista a Inglaterra.' },
      { ano: '1.215', titulo: 'Magna Carta', descricao: 'Rei João da Inglaterra assina a Magna Carta, base dos direitos constitucionais modernos.' },
      { ano: '1.347', titulo: 'Peste Negra', descricao: 'A Peste Bubônica chega à Europa, matando 30-60% da população do continente em 4 anos.' },
      { ano: '1.453', titulo: 'Queda de Constantinopla', descricao: 'Mehmed II toma Constantinopla, encerrando o Império Bizantino após 1.100 anos.' },
    ],
  },
  {
    periodo: 'Idade Moderna',
    intervalo: '1.453 – 1.789',
    cor: 'bg-teal-600',
    corTexto: 'text-teal-600 dark:text-teal-400',
    corBorda: 'border-teal-600/30',
    eventos: [
      { ano: '1.492', titulo: 'Colombo nas Américas', descricao: 'Cristóvão Colombo chega às Bahamas, iniciando a Era dos Descobrimentos nas Américas.' },
      { ano: '1.517', titulo: 'Reforma Protestante', descricao: 'Martinho Lutero afixa suas 95 Teses em Wittenberg, dividindo o Cristianismo ocidental.' },
      { ano: '1.543', titulo: 'Revolução Copernicana', descricao: 'Copérnico publica o modelo heliocêntrico, colocando o Sol no centro do universo.' },
      { ano: '1.687', titulo: 'Principia de Newton', descricao: 'Isaac Newton publica as Leis do Movimento e a Lei da Gravitação Universal.' },
      { ano: '1.776', titulo: 'Independência dos EUA', descricao: 'As 13 colônias americanas declaram independência da Grã-Bretanha em 4 de julho.' },
    ],
  },
  {
    periodo: 'Idade Contemporânea',
    intervalo: '1.789 – presente',
    cor: 'bg-blue-600',
    corTexto: 'text-blue-600 dark:text-blue-400',
    corBorda: 'border-blue-600/30',
    eventos: [
      { ano: '1.789', titulo: 'Revolução Francesa', descricao: 'Queda da Bastilha inicia a Revolução que varreria a monarquia absoluta da Europa.' },
      { ano: '1.822', titulo: 'Independência do Brasil', descricao: 'D. Pedro I proclama a independência do Brasil às margens do Ipiranga em 7 de setembro.' },
      { ano: '1.914', titulo: 'Primeira Guerra Mundial', descricao: 'Assassinato do Arquiduque Franz Ferdinand deflagra a Grande Guerra — 20 milhões de mortos.' },
      { ano: '1.939', titulo: 'Segunda Guerra Mundial', descricao: 'Hitler invade a Polônia em 1º de setembro, iniciando o maior conflito da história (70 mi mortos).' },
      { ano: '1.969', titulo: 'Homem na Lua', descricao: 'Neil Armstrong e Buzz Aldrin pousam na Lua na missão Apollo 11 em 20 de julho.' },
      { ano: '1.989', titulo: 'Queda do Muro de Berlim', descricao: 'Alemãos demolem o Muro de Berlim, símbolo da Guerra Fria, em 9 de novembro.' },
      { ano: '1.991', titulo: 'Fim da URSS', descricao: 'A União Soviética se dissolve oficialmente em 25 de dezembro, encerrando a Guerra Fria.' },
      { ano: '2.001', titulo: 'Atentados de 11 de setembro', descricao: 'Al-Qaeda derruba as Torres Gêmeas em Nova York — 3 mil mortos e o mundo muda.' },
    ],
  },
]

export default function LinhaDoTempoPage() {
  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-16">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-CustomSepia/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaScroll className="text-2xl text-CustomOldGold" />
            <span className="text-xs uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
              Da Pré-história ao Presente
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Linha do Tempo da História</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 max-w-2xl">
            Uma jornada pelos grandes marcos que definiram a civilização humana — da invenção da escrita à era digital.
          </p>
        </div>
      </section>

      <div className="w-full max-w-4xl mx-auto px-4">
        <AdBanner position="leaderboard" />

        {/* Eras */}
        <div className="mt-8 flex flex-col gap-12">
          {eras.map((era) => (
            <section key={era.periodo}>
              {/* Era header */}
              <div className={`flex items-center gap-3 mb-6 pb-3 border-b ${era.corBorda}`}>
                <div className={`w-3 h-3 rounded-full ${era.cor} shrink-0`} />
                <div>
                  <h2 className={`text-xl font-bold ${era.corTexto}`}>{era.periodo}</h2>
                  <span className="text-xs text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">{era.intervalo}</span>
                </div>
              </div>

              {/* Eventos */}
              <div className="relative pl-6 flex flex-col gap-6">
                {/* Linha vertical */}
                <div className={`absolute left-2.5 top-0 bottom-0 w-0.5 ${era.cor} opacity-20`} />

                {era.eventos.map((ev, i) => (
                  <div key={i} className="relative flex gap-5">
                    {/* Dot */}
                    <div className={`absolute -left-4 top-1.5 w-3 h-3 rounded-full border-2 ${era.cor} bg-CustomAntiqueWhite dark:bg-CustomCharcoal shrink-0`} />

                    <div className="flex flex-col gap-1 pt-0.5">
                      <div className="flex items-baseline gap-3">
                        <span className={`text-xs font-mono font-bold ${era.corTexto} shrink-0`}>{ev.ano}</span>
                        <h3 className="font-semibold text-sm leading-tight">{ev.titulo}</h3>
                      </div>
                      <p className="text-xs text-CustomSepia/65 dark:text-CustomAntiqueWhite/55 leading-relaxed">
                        {ev.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <AdBanner position="leaderboard" />
        </div>
      </div>
    </main>
  )
}
