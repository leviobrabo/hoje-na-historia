'use client'

import { useState } from 'react'
import { FaShareAlt, FaCheck, FaCopy } from 'react-icons/fa'

interface ShareButtonProps {
  text: string
}

export default function ShareButton({ text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text })
        return
      } catch {
        // user cancelled or API unavailable — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard also unavailable — silent fail
    }
  }

  return (
    <button
      onClick={handleShare}
      title={copied ? 'Copiado!' : 'Compartilhar evento'}
      className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-CustomSepia/20 dark:border-CustomAntiqueWhite/20 hover:border-CustomOldGold/60 hover:text-CustomOldGold transition-colors"
    >
      {copied ? (
        <>
          <FaCheck className="text-green-500 text-[10px]" />
          <span className="text-green-500">Copiado</span>
        </>
      ) : (
        <>
          <FaShareAlt className="text-[10px]" />
          <span>Compartilhar</span>
        </>
      )}
    </button>
  )
}
