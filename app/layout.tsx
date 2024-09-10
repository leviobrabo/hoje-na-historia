import Script from 'next/script'; // Já está importado no seu código

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3470054444155641"
          crossOrigin="anonymous"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-SZP8KF5M0E`}
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
        {/* Aqui você insere o código do Native Banner */}
        <Script
          async
          data-cfasync="false"
          src="//pl24337684.cpmrevenuenugate.com/596c35b184829f16cdf98a7f664a19da/invoke.js"
        />
      </head>
      <body className={`${outfit.className} flex flex-col min-h-screen justify-between bg-CustomAntiqueWhite dark:bg-CustomCharcoal transition-colors duration-1000`}>
        <ReactQueryClientProvider>
          <Header />
          {children}
          {/* Aqui, você pode inserir o container do Native Banner */}
          <div id="container-596c35b184829f16cdf98a7f664a19da"></div>
          <Footer />
        </ReactQueryClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
