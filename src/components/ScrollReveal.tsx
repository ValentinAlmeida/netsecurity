'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: string
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, className = '', delay = '', style = {} }: ScrollRevealProps) {
  const domRef = useRef<HTMLDivElement>(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            setVisible(true)
            if (domRef.current) observer.unobserve(domRef.current)
        }
      })
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

    const currentElement = domRef.current
    if (currentElement) observer.observe(currentElement)

    return () => { if (currentElement) observer.unobserve(currentElement) }
  }, [])

  return (
    <div ref={domRef} className={`scroll-reveal ${delay} ${isVisible ? 'visible' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}