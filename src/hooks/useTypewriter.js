import { useEffect, useRef, useState } from 'react'

// Typewriter effect for a piece of text. Returns the currently displayed slice
// and whether it is still typing. Explicitly guards against an out-of-bounds /
// undefined character so we can never append the literal string "undefined".
export function useTypewriter(text, typingSpeed = 30) {
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const typewriterRef = useRef(null)

  useEffect(() => {
    if (!text) {
      // Deferred via setTimeout so the state updates happen outside the effect
      // body (avoids cascading renders) — same 0ms-later reset, imperceptible.
      const timer = setTimeout(() => {
        setDisplayed('')
        setIsTyping(false)
      }, 0)
      return () => clearTimeout(timer)
    }

    const textToDisplay = text
    let charIndex = 0
    if (typewriterRef.current) clearTimeout(typewriterRef.current)

    function typeNextChar() {
      const ch = textToDisplay[charIndex]
      if (ch === undefined) {
        setIsTyping(false)
        return
      }
      setDisplayed((prev) => prev + ch)
      charIndex += 1
      if (charIndex < textToDisplay.length) {
        typewriterRef.current = setTimeout(typeNextChar, typingSpeed)
      } else {
        setIsTyping(false)
      }
    }

    // Deferred via setTimeout so the reset state updates happen outside the
    // effect body (avoids cascading renders) — the typing loop then starts
    // right after, same as before.
    typewriterRef.current = setTimeout(() => {
      setDisplayed('')
      setIsTyping(true)
      typewriterRef.current = setTimeout(typeNextChar, typingSpeed)
    }, 0)

    return () => {
      if (typewriterRef.current) clearTimeout(typewriterRef.current)
    }
  }, [text, typingSpeed])

  return { displayed, isTyping }
}
