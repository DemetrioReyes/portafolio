'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypingEffectProps {
  text: string
  speed?: number
}

export function TypingEffect({ text, speed = 100 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [index, speed, text])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xl md:text-2xl text-green-400 font-mono"
    >
      {displayText}
      {index < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-6 bg-green-400 ml-1"
        />
      )}
    </motion.div>
  )
}

