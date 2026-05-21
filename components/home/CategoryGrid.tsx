import Link from 'next/link'
import { FaLandmark, FaScroll, FaUserSecret, FaFistRaised, FaFlask, FaClock } from 'react-icons/fa'

const categories = [
  { href: '/eventos', label: 'Hoje na História', icon: FaScroll, desc: 'Eventos que aconteceram neste dia', color: 'text-CustomOldGold' },
  { href: '/civilizacoes', label: 'Civilizações', icon: FaLandmark, desc: 'Grandes civilizações da humanidade', color: 'text-CustomTerracotta' },
  { href: '/personagens', label: 'Personagens', icon: FaUserSecret, desc: 'Vilões, inventores e heroínas', color: 'text-CustomSepia dark:text-CustomAntiqueWhite' },
  { href: '/categorias/guerras', label: 'Guerras e Batalhas', icon: FaFistRaised, desc: 'Conflitos que mudaram o mundo', color: 'text-red-600 dark:text-red-400' },
  { href: '/categorias/descobertas', label: 'Descobertas', icon: FaFlask, desc: 'Ciência e descobertas históricas', color: 'text-green-600 dark:text-green-400' },
  { href: '/linha-do-tempo', label: 'Linha do Tempo', icon: FaClock, desc: 'Cronologia da história mundial', color: 'text-blue-600 dark:text-blue-400' },
]

const CategoryGrid = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-CustomSepia dark:text-CustomAntiqueWhite mb-2 text-center">
        Explore a História
      </h2>
      <p className="text-sm text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 text-center mb-8">
        Navegue pelas categorias e descubra o passado
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group flex flex-col gap-2 p-4 rounded-xl border border-CustomSepia/15 dark:border-CustomAntiqueWhite/15 bg-CustomAntiqueWhite/50 dark:bg-CustomCharcoal/50 hover:border-CustomOldGold/50 hover:bg-CustomOldGold/5 transition-all duration-200"
          >
            <cat.icon className={`text-2xl ${cat.color} group-hover:scale-110 transition-transform`} />
            <span className="font-semibold text-sm text-CustomSepia dark:text-CustomAntiqueWhite leading-tight">
              {cat.label}
            </span>
            <span className="text-xs text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 leading-tight">
              {cat.desc}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid
