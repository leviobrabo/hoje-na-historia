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
  title: {
    default: 'Hoje na História | historiadodia.com',
    template: '%s | Hoje na História',
  },
  description: 'Descubra o que aconteceu hoje na história: eventos, civilizações, personagens históricos, descobertas científicas e muito mais em português.',
  keywords: ['história', 'hoje na história', 'eventos históricos', 'civilizações', 'personagens históricos', 'brasil', 'mundo', 'fatos históricos'],
  openGraph: {
    title: 'Hoje na História | historiadodia.com',
    description: 'Descubra o que aconteceu hoje na história: eventos, civilizações, personagens históricos e muito mais.',
    url: 'https://www.historiadodia.com',
    siteName: 'Hoje na História',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoje na História',
    description: 'Descubra o que aconteceu hoje na história.',
  },
  robots: {
    index: true,
    follow: true,
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
              "description": "Descubra o que aconteceu hoje na história: eventos, civilizações, personagens históricos e muito mais.",
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
        className={`${outfit.className} flex flex-col min-h-screen justify-between bg-CustomAntiqueWhite dark:bg-CustomCharcoal transition-colors duration-500`}
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
