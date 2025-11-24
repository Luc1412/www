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

  return (
    <section id="technologies" className="w-full py-20 bg-main-bg" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-30">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 text-accent-yellow">
          Technologies
        </h2>
        <div className="max-w-5xl mx-auto">
          {/* Alternating rows with offset pattern */}
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Row 1 - starts normally */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {technologies.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex-none"
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
                    className="flex items-center justify-center bg-accent-yellow text-black text-sm md:text-base font-semibold py-2 md:py-2.5 px-4 md:px-5 rounded-2xl cursor-default hover:bg-accent-yellow/90 transition-colors whitespace-nowrap"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
            
            {/* Row 2 - offset with margin */}
            <div className="flex flex-wrap gap-3 md:gap-4 md:ml-12">
              {technologies.slice(6, 12).map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index + 6) * 0.03,
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
              ))}
            </div>
            
            {/* Row 3 - starts normally */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {technologies.slice(12, 18).map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index + 12) * 0.03,
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
              ))}
            </div>
            
            {/* Row 4 - offset with margin */}
            <div className="flex flex-wrap gap-3 md:gap-4 md:ml-12">
              {technologies.slice(18, 24).map((tech, index) => (
                <motion.div
                  key={tech}
                  className="flex-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index + 18) * 0.03,
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
              ))}
            </div>
            
            {/* Row 5 - remaining items */}
            {technologies.length > 24 && (
              <div className="flex flex-wrap gap-3 md:gap-4">
                {technologies.slice(24).map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="flex-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (index + 24) * 0.03,
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
