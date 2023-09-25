import { useEffect, useState } from 'react'

interface TypingWritterProps {
  content: string
  delay?: number
  showCursor?: boolean
}

export function TypingWritter({
  content,
  delay,
  showCursor,
}: TypingWritterProps) {
  const [text, setText] = useState('')
  const [mostrarCursor, setMostrarCursor] = useState(false)

  const escreverNaTela = (content: string, i = 0) => {
    if (i < content.length) {
      setMostrarCursor(true)

      setText(content.slice(0, i + 1))
      setTimeout(() => escreverNaTela(content, i + 1), 100)
    } else if (i >= content.length && showCursor) {
      setMostrarCursor(false)
    }
  }

  useEffect(() => {
    setTimeout(() => escreverNaTela(content), delay ?? 200)
  }, [])

  return (
    <div>
      {text}
      {mostrarCursor && (
        <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">
          |
        </span>
      )}
    </div>
  )
}
