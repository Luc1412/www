"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Instagram, Github, Linkedin } from "lucide-react"
import general from "@/data/general.json"
import Link from "next/link"

export default function LandingSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true)
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % general.roles.length)
        setIsChanging(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full h-screen flex flex-col">
      {/* Main content with flex-grow to push navigation to bottom */}
        <div className="flex flex-col justify-center h-full bg-accent-yellow rounded-squircle lg:rounded-[48px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10   p-6 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-20 w-full">
            {/* Image container */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <div className="w-full h-full relative overflow-hidden rounded-[48px]">
                  <Image src="/logo.webp" alt="Profile Picture" fill style={{ objectFit: "cover" }} priority />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 text-black z-10 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 text-black">
                Hey, I&apos;m {general.name} <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-4 sm:mb-6 h-8">
                I&apos;m a{" "}
                <span className={`transition-opacity duration-1000 ease-in-out ${isChanging ? "opacity-0" : "opacity-100"}`}>
                  {general.roles[currentRoleIndex]}
                </span>
              </p>
                <p className="text-base sm:text-lg opacity-80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                  Crafting intuitive user experiences with elegant code.
                </p>
              <div className="flex justify-center lg:justify-start gap-4">
              <Link
                  href={general.socials.githubUrl}
                  className="p-2 bg-black rounded-full text-accent-yellow hover:bg-opacity-80 transition-colors"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href={general.socials.instagramUrl}
                  className="p-2 bg-black rounded-full text-accent-yellow hover:bg-opacity-80 transition-colors"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href={general.socials.linkedinUrl}
                  className="p-2 bg-black rounded-full text-accent-yellow hover:bg-opacity-80 transition-colors"
                >
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      {/* Navigation at bottom */}
      <nav className="flex justify-center gap-8 sm:gap-12 py-6">
        <Link
          href="#about"
          className="text-base sm:text-lg font-medium text-white hover:text-accent-yellow transition-colors"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-base sm:text-lg font-medium text-white hover:text-accent-yellow transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-base sm:text-lg font-medium text-white hover:text-accent-yellow transition-colors"
        >
          Contact
        </Link>
      </nav>
    </section>
  )
}
