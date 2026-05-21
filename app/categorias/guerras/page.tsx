import { FaFistRaised } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guerras & Conflitos',
  description: 'Explore as principais guerras e conflitos da história da humanidade — causas, consequências e números.',
}

const guerras = [
  {
    nome: 'Guerra do Peloponeso',
    periodo: '431–404 a.C.',
    regiao: 'Grécia Antiga',
    mortes: 'c. 50.000–100.000',
    descricao: 'Conflito devastador entre Atenas e Esparta que destruiu a hegemonia ateniense e enfraqueceu toda a Grécia, abrindo caminho para a conquista macedônica de Alexandre.',
    resultado: 'Vitória espartana. Fim do poderio naval ateniense.',
  },
  {
    nome: 'Guerras Púnicas',
    periodo: '264–146 a.C.',
    regiao: 'Mediterrâneo',
    mortes: 'c. 1,5 milhão',
    descricao: 'Três guerras entre Roma e Cartago pelo domínio do Mediterrâneo. Aníbal cruzou os Alpes com elefantes; Cipião Africano venceu Zama. Cartago foi destruída e o solo salgado para não crescer mais nada.',
    resultado: 'Vitória romana total. Cartago arrasada.',
  },
  {
    nome: 'Cruzadas',
    periodo: '1096–1291',
    regiao: 'Oriente Médio / Europa',
    mortes: 'c. 1–3 milhões',
    descricao: '8 cruzadas organizadas pela Igreja Católica para reconquistar Jerusalém dos muçulmanos. Resultaram em massacres de judeus na Europa, saque de Constantinopla (1204) e fracasso definitivo em 1291.',
    resultado: 'Fracasso cristão. Islã retém Jerusalém.',
  },
  {
    nome: 'Guerra dos Cem Anos',
    periodo: '1337–1453',
    regiao: 'França / Inglaterra',
    mortes: 'c. 2,3–3,3 milhões (incluindo Peste Negra)',
    descricao: 'Série de conflitos entre Inglaterra e França pelo trono francês. Joana d\'Arc liderou a virada francesa. Terminou com a expulsão inglesa da França continental, exceto Calais.',
    resultado: 'Vitória francesa. Unificação da França moderna.',
  },
  {
    nome: 'Guerra dos Trinta Anos',
    periodo: '1618–1648',
    regiao: 'Europa Central',
    mortes: 'c. 8 milhões',
    descricao: 'Conflito religioso que devastou a Europa Central, matando até um terço da população alemã. Terminou com a Paz de Vestfália, que estabeleceu o sistema moderno de Estados soberanos.',
    resultado: 'Paz de Vestfália. Nascimento do sistema de Estados nacionais.',
  },
  {
    nome: 'Guerras Napoleônicas',
    periodo: '1803–1815',
    regiao: 'Europa / Américas / África',
    mortes: 'c. 3,5–6 milhões',
    descricao: 'Napoleão conquistou quase toda a Europa antes de ser derrotado na Rússia e em Waterloo. Redesenhou fronteiras, aboliu feudalismo e espalhou os ideais da Revolução Francesa.',
    resultado: 'Derrota de Napoleão. Congresso de Viena redesenha a Europa.',
  },
  {
    nome: 'Guerra da Tríplice Aliança',
    periodo: '1864–1870',
    regiao: 'América do Sul',
    mortes: 'c. 400.000–1,2 milhão',
    descricao: 'Brasil, Argentina e Uruguai contra o Paraguai de Francisco Solano López. A guerra mais devastadora da América do Sul — o Paraguai perdeu 60-70% da população, incluindo quase todos os homens adultos.',
    resultado: 'Vitória da Tríplice Aliança. Destruição quase total do Paraguai.',
  },
  {
    nome: 'Primeira Guerra Mundial',
    periodo: '1914–1918',
    regiao: 'Europa / Oriente Médio / Colônias',
    mortes: 'c. 17–20 milhões',
    descricao: 'A "Grande Guerra" — trincheiras, gás mostarda, tanques e aviões de guerra. O assassinato do Arquiduque Franz Ferdinand desencadeou alianças automáticas. Terminou com o Tratado de Versalhes, que plantou as sementes da Segunda Guerra.',
    resultado: 'Vitória dos Aliados. Queda dos Impérios Austro-Húngaro, Otomano e Russo.',
  },
  {
    nome: 'Segunda Guerra Mundial',
    periodo: '1939–1945',
    regiao: 'Global',
    mortes: 'c. 70–85 milhões',
    descricao: 'O maior conflito da história humana — Holocausto, bomba atômica, Leningrado sitiada por 900 dias. Hitler invadiu a Europa; Japão atacou Pearl Harbor. Terminou com a rendição da Alemanha e do Japão após as bombas de Hiroshima e Nagasaki.',
    resultado: 'Vitória dos Aliados. Criação da ONU. Guerra Fria começa.',
  },
  {
    nome: 'Guerra da Coreia',
    periodo: '1950–1953',
    regiao: 'Coreia',
    mortes: 'c. 2,5–4 milhões',
    descricao: 'A "Guerra Esquecida" — EUA/ONU vs. Coreia do Norte/China. Terminou com armistício que manteve a divisão do paralelo 38. Tecnicamente, as duas Coreias ainda estão em guerra.',
    resultado: 'Armistício. Divisão permanente das Coreias.',
  },
  {
    nome: 'Guerra do Vietnã',
    periodo: '1955–1975',
    regiao: 'Vietnã / Laos / Camboja',
    mortes: 'c. 1,3–3,5 milhões',
    descricao: 'EUA entram no conflito para "conter o comunismo", mas se retiram em 1973 após forte oposição interna. Em 1975, o Vietnã do Norte unifica o país. A guerra traumatizou a sociedade americana por décadas.',
    resultado: 'Vitória vietnamita. Unificação comunista do Vietnã.',
  },
  {
    nome: 'Guerra do Golfo',
    periodo: '1990–1991',
    regiao: 'Iraque / Kuwait',
    mortes: 'c. 20.000–35.000',
    descricao: 'Saddam Hussein invade o Kuwait em agosto de 1990. Coalizão liderada pelos EUA liberta o Kuwait em 100 horas de combate terrestre. Saddam queima os campos de petróleo kuwaitianos antes de recuar.',
    resultado: 'Vitória da Coalizão. Kuwait liberado. Iraque mantido.',
  },
]

export default function GuerrasPage() {
  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-16">
      <section className="w-full bg-gradient-to-b from-red-500/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaFistRaised className="text-2xl text-red-500" />
            <span className="text-xs uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
              Conflitos que Moldaram o Mundo
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Guerras & Conflitos</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 max-w-2xl">
            Das batalhas da Antiguidade às guerras modernas — os conflitos que redesenharam fronteiras, civilizações e o destino da humanidade.
          </p>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4">
        <AdBanner position="leaderboard" />

        <div className="flex flex-col gap-5 mt-8">
          {guerras.map((g, i) => (
            <article
              key={i}
              className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 p-5 hover:border-red-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h2 className="font-bold text-lg leading-tight">{g.nome}</h2>
                  <p className="text-sm text-CustomSepia/55 dark:text-CustomAntiqueWhite/45 mt-0.5">
                    {g.periodo} · {g.regiao}
                  </p>
                </div>
                <span className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-500/10 px-3 py-1 rounded-full w-fit shrink-0">
                  {g.mortes} mortos
                </span>
              </div>
              <p className="text-sm text-CustomSepia/75 dark:text-CustomAntiqueWhite/70 leading-relaxed mb-3">
                {g.descricao}
              </p>
              <div className="flex items-start gap-2 text-xs">
                <span className="font-semibold text-CustomSepia/50 dark:text-CustomAntiqueWhite/40 shrink-0">Resultado:</span>
                <span className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60">{g.resultado}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <AdBanner position="leaderboard" />
        </div>
      </div>
    </main>
  )
}
