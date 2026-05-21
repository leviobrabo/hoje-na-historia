import Script from 'next/script';
import ReactQueryClientProvider from '@/context/ReactQueryClientProvider';
import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import { Analytics } from '@vercel/analytics/react';
import { Outfit } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.historiadodia.com'),
  title: {
    default: 'Hoje na História — O Que Aconteceu Neste Dia',
    template: '%s | Hoje na História',
  },
  description: 'Descubra o que aconteceu hoje na história: guerras, descobertas científicas, grandes personagens, civilizações antigas e fatos que mudaram o mundo — tudo em português.',
  keywords: [
    'hoje na história', 'história do dia', 'fatos históricos', 'eventos históricos',
    'civilizações antigas', 'personagens históricos', 'descobertas científicas',
    'guerras históricas', 'história do brasil', 'história do mundo', 'historiadodia.com',
  ],
  openGraph: {
    title: 'Hoje na História — O Que Aconteceu Neste Dia',
    description: 'Explore guerras, descobertas, civilizações e personagens que marcaram a história da humanidade. Novo conteúdo todo dia, em português.',
    url: 'https://www.historiadodia.com',
    siteName: 'Hoje na História',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/logo.jpg', width: 1200, height: 630, alt: 'Hoje na História' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoje na História — O Que Aconteceu Neste Dia',
    description: 'Guerras, descobertas, civilizações e personagens que marcaram a história. Em português.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google AdSense */}
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3470054444155641"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SZP8KF5M0E"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SZP8KF5M0E', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Monetag - Pop-under */}
        <Script
          async
          data-cfasync="false"
          src="//pl24337684.cpmrevenuegate.com/596c35b184829f16cdf98a7f664a19da/invoke.js"
        />

        {/* Monetag - Multitag */}
        <Script
          strategy="afterInteractive"
          src="https://quge5.com/88/tag.min.js"
          data-zone="241767"
          data-cfasync="false"
        />

        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hoje na História",
              "url": "https://www.historiadodia.com",
              "description": "Descubra o que aconteceu hoje na história: guerras, descobertas, civilizações e personagens históricos.",
              "inLanguage": "pt-BR",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.historiadodia.com/eventos?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} flex flex-col min-h-screen justify-between transition-colors duration-500 bg-gradient-to-br from-[#FBF0E2] via-[#F5E6C5] to-[#FAEBD7] dark:from-[#0d1b2a] dark:via-[#162130] dark:to-[#1e2d3d]`}
      >
        <ReactQueryClientProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>

          {/* Monetag ad container */}
          <div id="container-596c35b184829f16cdf98a7f664a19da" />

          <Footer />
        </ReactQueryClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
