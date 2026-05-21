'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import ThemeSwitcher from '../ThemeSwitcher'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/eventos', label: 'Hoje' },
  { href: '/civilizacoes', label: 'Civilizações' },
  { href: '/personagens', label: 'Personagens' },
  { href: '/categorias', label: 'Categorias' },
  { href: '/linha-do-tempo', label: 'Linha do Tempo' },
  { href: '/sobre', label: 'Sobre' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-CustomSepia/20 dark:border-CustomAntiqueWhite/10 bg-CustomAntiqueWhite dark:bg-CustomCharcoal sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <span className="font-bold text-xl lg:text-2xl text-CustomSepia dark:text-CustomAntiqueWhite tracking-tight">
            Hoje na História
          </span>
          <span className="text-xs text-CustomSepia/60 dark:text-CustomAntiqueWhite/50 hidden sm:block">
            historiadodia.com
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'bg-CustomSepia text-CustomAntiqueWhite dark:bg-CustomOldGold dark:text-CustomCharcoal'
                  : 'text-CustomSepia dark:text-CustomAntiqueWhite hover:bg-CustomSepia/10 dark:hover:bg-CustomAntiqueWhite/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <button
            className="lg:hidden text-CustomSepia dark:text-CustomAntiqueWhite p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-CustomSepia/10 dark:border-CustomAntiqueWhite/10 px-4 py-3 flex flex-col gap-1 bg-CustomAntiqueWhite dark:bg-CustomCharcoal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-CustomSepia text-CustomAntiqueWhite dark:bg-CustomOldGold dark:text-CustomCharcoal'
                  : 'text-CustomSepia dark:text-CustomAntiqueWhite hover:bg-CustomSepia/10 dark:hover:bg-CustomAntiqueWhite/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
