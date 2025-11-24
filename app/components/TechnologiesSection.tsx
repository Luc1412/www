"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import technologies from "@/data/technologies.json"
import { useEffect, useState, useRef } from "react"

const ITEMS_PER_ROW = 6

export default function TechnologiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Split technologies into rows of ITEMS_PER_ROW
  const rows: string[][] = []
  for (let i = 0; i < technologies.length; i += ITEMS_PER_ROW) {
    rows.push(technologies.slice(i, i + ITEMS_PER_ROW))
  }

  const renderBadge = (tech: string, globalIndex: number) => (
    <motion.div
      key={tech}
      className="flex-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.3, 
        delay: globalIndex * 0.03,
        ease: "easeOut"
      }}
    >
      <Badge
        variant="secondary"
        className="flex items-center justify-center bg-accent-yellow text-black text-sm md:text-base font-semibold py-2 md:py-2.5 px-4 md:px-5 rounded-2xl cursor-default hover:bg-accent-yellow/90 transition-colors whitespace-nowrap"
      >
        {tech}
      </Badge>
    </motion.div>
  )

  return (
    <section id="technologies" className="w-full py-20 bg-main-bg" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-30">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 text-accent-yellow">
          Technologies
        </h2>
        <div className="max-w-5xl mx-auto">
          {/* Alternating rows with offset pattern */}
          <div className="flex flex-col gap-3 md:gap-4">
            {rows.map((row, rowIndex) => {
              const isEvenRow = rowIndex % 2 === 0
              const startIndex = rowIndex * ITEMS_PER_ROW
              
              return (
                <div 
                  key={`row-${rowIndex}`}
                  className={`flex flex-wrap gap-3 md:gap-4 ${!isEvenRow ? 'md:ml-12' : ''}`}
                >
                  {row.map((tech, indexInRow) => 
                    renderBadge(tech, startIndex + indexInRow)
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
