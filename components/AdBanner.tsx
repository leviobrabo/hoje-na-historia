'use client'

type AdPosition = 'leaderboard' | 'rectangle' | 'mobile-banner' | 'inline'

interface AdBannerProps {
  position: AdPosition
  className?: string
  adCode?: string
}

const sizeMap: Record<AdPosition, string> = {
  leaderboard: 'min-h-[90px] w-full max-w-[728px]',
  rectangle: 'min-h-[250px] w-full max-w-[300px]',
  'mobile-banner': 'min-h-[50px] w-full sm:hidden',
  inline: 'min-h-[90px] w-full',
}

const AdBanner = ({ position, className = '', adCode }: AdBannerProps) => {
  return (
    <div className={`flex flex-col items-center my-4 ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-CustomSepia/40 dark:text-CustomAntiqueWhite/30 mb-1">
        Publicidade
      </span>
      <div
        className={`${sizeMap[position]} bg-CustomSepia/5 dark:bg-CustomAntiqueWhite/5 border border-CustomSepia/10 dark:border-CustomAntiqueWhite/10 rounded-lg flex items-center justify-center mx-auto`}
      >
        {adCode ? (
          <div dangerouslySetInnerHTML={{ __html: adCode }} />
        ) : (
          /* Slot para código Monetag — substitua pelo ins/script do painel Monetag */
          <div
            id={`monetag-${position}`}
            className="w-full h-full"
            data-ad-position={position}
          />
        )}
      </div>
    </div>
  )
}

export default AdBanner
