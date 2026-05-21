import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'

const footerLinks = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/civilizacoes', label: 'Civilizações' },
  { href: '/personagens', label: 'Personagens' },
  { href: '/eventos', label: 'Hoje na História' },
  { href: '/linha-do-tempo', label: 'Linha do Tempo' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-CustomSepia/10 dark:border-white/5 bg-gradient-to-b from-[#F5E6C5]/60 to-[#FBF0E2] dark:from-[#0d1b2a]/80 dark:to-[#0d1b2a] mt-10 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 hover:text-CustomSepia dark:hover:text-CustomAntiqueWhite transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-CustomSepia/10 dark:border-CustomAntiqueWhite/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-CustomSepia/50 dark:text-CustomAntiqueWhite/40 text-center sm:text-left">
            © {year} Hoje na História · historiadodia.com · Todos os direitos reservados.
          </p>
          <Link
            href="https://t.me/historia_br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-CustomSepia/70 dark:text-CustomAntiqueWhite/60 hover:text-CustomSepia dark:hover:text-CustomAntiqueWhite transition-colors"
          >
            <FaTelegram className="text-lg text-blue-500" />
            @historia_br no Telegram
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
