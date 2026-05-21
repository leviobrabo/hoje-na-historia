import { FaFlask } from 'react-icons/fa'
import AdBanner from '@/components/AdBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Descobertas & Ciência',
  description: 'As principais descobertas científicas e invenções que transformaram a civilização humana.',
}

const descobertas = [
  {
    nome: 'Invenção da Escrita',
    ano: 'c. 3.500 a.C.',
    inventor: 'Sumérios',
    regiao: 'Mesopotâmia (atual Iraque)',
    impacto: 'Civilizacional',
    descricao: 'A escrita cuneiforme dos sumérios permitiu registrar transações, leis e narrativas — tornando possível a transmissão do conhecimento entre gerações. Sem escrita, não há história, ciência ou civilização complexa.',
  },
  {
    nome: 'Roda',
    ano: 'c. 3.500 a.C.',
    inventor: 'Mesopotamia',
    regiao: 'Mesopotâmia / Europa do Leste',
    impacto: 'Tecnológico',
    descricao: 'A roda (inicialmente usada em cerâmica, depois em transporte) transformou o comércio, a agricultura e a guerra. Civilizações sem ela — como as américas pré-colombianas — desenvolveram-se em desvantagem tecnológica significativa.',
  },
  {
    nome: 'Teorema de Pitágoras',
    ano: 'c. 570–495 a.C.',
    inventor: 'Pitágoras',
    regiao: 'Grécia Antiga',
    impacto: 'Matemático',
    descricao: 'a² + b² = c². Embora conhecido pelos babilônios antes, Pitágoras sistematizou a geometria que está na base de toda a arquitetura, engenharia e física moderna.',
  },
  {
    nome: 'Heliocentrismo',
    ano: '1543',
    inventor: 'Nicolau Copérnico',
    regiao: 'Polônia',
    impacto: 'Astronômico / Cultural',
    descricao: 'Copérnico provou que a Terra orbita o Sol — não o contrário. Derrubou 1.400 anos de dogma ptolomaico e iniciou a Revolução Científica que levaria Galileu à Inquisição e Newton às leis da gravitação.',
  },
  {
    nome: 'Imprensa com tipos móveis',
    ano: '1440',
    inventor: 'Johannes Gutenberg',
    regiao: 'Alemanha',
    impacto: 'Comunicação / Civilizacional',
    descricao: 'A Bíblia de Gutenberg (1455) foi o primeiro livro impresso em escala. A imprensa democratizou o conhecimento, tornou possível a Reforma Protestante e acelerou o Renascimento — revolucionando para sempre a transmissão de informação.',
  },
  {
    nome: 'Lei da Gravitação Universal',
    ano: '1687',
    inventor: 'Isaac Newton',
    regiao: 'Inglaterra',
    impacto: 'Físico / Astronômico',
    descricao: 'Newton formulou que todo objeto com massa atrai outros objetos com massa — a força proporcional ao produto das massas e inversamente proporcional ao quadrado da distância. Unificou física terrestre e celeste numa única equação.',
  },
  {
    nome: 'Vacina (varíola)',
    ano: '1796',
    inventor: 'Edward Jenner',
    regiao: 'Inglaterra',
    impacto: 'Médico / Humanitário',
    descricao: 'Jenner observou que ordenhadores imunes à varíola haviam contraído varíola bovina (mais branda). Inoculou o jovem James Phipps com cowpox e depois com varíola — ele ficou imune. Criou o conceito de vacinação que salvaria bilhões de vidas.',
  },
  {
    nome: 'Corrente Alternada (CA)',
    ano: '1887',
    inventor: 'Nikola Tesla',
    regiao: 'EUA (origem: Sérvia)',
    impacto: 'Energético / Industrial',
    descricao: 'Tesla desenvolveu o sistema de transmissão de energia em corrente alternada que derrotou a corrente contínua de Edison. A CA permite transmitir eletricidade por longas distâncias com perdas mínimas — base de toda a civilização elétrica moderna.',
  },
  {
    nome: 'Teoria da Relatividade',
    ano: '1905 / 1915',
    inventor: 'Albert Einstein',
    regiao: 'Alemanha / Suíça',
    impacto: 'Físico / Tecnológico',
    descricao: 'E=mc² (1905) mostrou que massa e energia são equivalentes — base da energia nuclear. A relatividade geral (1915) redefiniu a gravidade como curvatura do espaço-tempo. Sem ela: sem GPS, sem aceleradores de partículas, sem física moderna.',
  },
  {
    nome: 'Penicilina',
    ano: '1928',
    inventor: 'Alexander Fleming',
    regiao: 'Escócia',
    impacto: 'Médico',
    descricao: 'Fleming observou que bolor (Penicillium notatum) havia matado bactérias em uma placa esquecida. A penicilina, primeiro antibiótico, salvou dezenas de milhões de vidas na Segunda Guerra e tornou infecções antes letais facilmente tratáveis.',
  },
  {
    nome: 'Estrutura do DNA',
    ano: '1953',
    inventor: 'Watson, Crick & Franklin',
    regiao: 'Inglaterra',
    impacto: 'Biológico / Genético',
    descricao: 'A dupla hélice do DNA explicou como a informação genética é armazenada e replicada. Rosalind Franklin produziu a foto de raio-X crucial (Foto 51) que Watson e Crick usaram sem seu conhecimento. A descoberta fundou a biotecnologia e a medicina genômica.',
  },
  {
    nome: 'Internet',
    ano: '1969–1991',
    inventor: 'ARPANET / Tim Berners-Lee',
    regiao: 'EUA / Suíça',
    impacto: 'Comunicação / Civilizacional',
    descricao: 'A ARPANET (1969) conectou universidades americanas. Tim Berners-Lee inventou a World Wide Web em 1991. A internet transformou mais profundamente a humanidade em 30 anos do que qualquer outra tecnologia anterior — redefinindo comércio, política, cultura e conhecimento.',
  },
]

const impactoCor: Record<string, string> = {
  'Civilizacional': 'bg-CustomOldGold/20 text-CustomOldGold',
  'Tecnológico': 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
  'Matemático': 'bg-purple-500/15 text-purple-600 dark:text-purple-400',
  'Astronômico / Cultural': 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
  'Astronômico': 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
  'Comunicação / Civilizacional': 'bg-CustomOldGold/20 text-CustomOldGold',
  'Físico / Astronômico': 'bg-teal-500/15 text-teal-600 dark:text-teal-400',
  'Médico / Humanitário': 'bg-green-500/15 text-green-600 dark:text-green-400',
  'Energético / Industrial': 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400',
  'Físico / Tecnológico': 'bg-teal-500/15 text-teal-600 dark:text-teal-400',
  'Médico': 'bg-green-500/15 text-green-600 dark:text-green-400',
  'Biológico / Genético': 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
}

export default function DescobertasPage() {
  return (
    <main className="flex flex-col items-center w-full text-CustomSepia dark:text-CustomAntiqueWhite pb-16">
      <section className="w-full bg-gradient-to-b from-green-500/10 to-transparent py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <FaFlask className="text-2xl text-green-500" />
            <span className="text-xs uppercase tracking-widest text-CustomSepia/50 dark:text-CustomAntiqueWhite/40">
              Inovações que Mudaram o Mundo
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Descobertas & Ciência</h1>
          <p className="text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 max-w-2xl">
            As invenções e descobertas científicas que transformaram para sempre a vida da humanidade — da roda ao DNA.
          </p>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4">
        <AdBanner position="leaderboard" />

        <div className="flex flex-col gap-5 mt-8">
          {descobertas.map((d, i) => {
            const corImpacto = impactoCor[d.impacto] || 'bg-gray-500/15 text-gray-600'
            return (
              <article
                key={i}
                className="rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/40 p-5 hover:border-green-500/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h2 className="font-bold text-lg leading-tight">{d.nome}</h2>
                    <p className="text-sm text-CustomSepia/55 dark:text-CustomAntiqueWhite/45 mt-0.5">
                      {d.ano} · {d.inventor} · {d.regiao}
                    </p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit shrink-0 ${corImpacto}`}>
                    {d.impacto}
                  </span>
                </div>
                <p className="text-sm text-CustomSepia/75 dark:text-CustomAntiqueWhite/70 leading-relaxed">
                  {d.descricao}
                </p>
              </article>
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
