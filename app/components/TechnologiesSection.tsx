"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import technologies from "@/data/technologies.json"
import { useEffect, useState, useRef } from "react"

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

  // Create an alternating pattern by assigning different spans to grid items
  // This creates a more dynamic, non-uniform grid
  const getGridSpanClass = (index: number) => {
    // Pattern: 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1...
    const pattern = [2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1]
    const span = pattern[index % pattern.length]
    return span === 2 ? "col-span-2" : "col-span-1"
  }

  return (
    <section id="technologies" className="w-full py-20 bg-main-bg" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-30">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 text-accent-yellow">
          Technologies
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 auto-rows-fr">
            {technologies.map((tech, index) => {
              return (
                <motion.div
                  key={tech}
                  className={getGridSpanClass(index)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.03,
                    ease: "easeOut"
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="w-full h-full flex items-center justify-center bg-accent-yellow text-black text-sm md:text-base font-semibold py-3 md:py-4 px-3 md:px-4 rounded-2xl cursor-default hover:bg-accent-yellow/90 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
