"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Instagram, Twitter, Github } from "lucide-react"
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
    <section className="w-full min-h-screen flex flex-col">
      {/* Main content with flex-grow to push navigation to bottom */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-accent-yellow rounded-[48px] pt-6 px-6 pb-16 sm:pt-8 sm:px-8 sm:pb-20 md:pt-12 md:px-12 md:pb-24 lg:pt-16 lg:px-16 lg:pb-28 w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-20 w-full">
            {/* Image container */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <div className="w-full h-full relative overflow-hidden rounded-[48px]">
                  <Image src="/logo.gif" alt="Profile Picture" fill style={{ objectFit: "cover" }} priority />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 text-black z-10 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 text-black">
                Hey, I'm {general.name} <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-4 sm:mb-6 h-8">
                I'm a{" "}
                <span className={`transition-opacity duration-1000 ease-in-out ${isChanging ? "opacity-0" : "opacity-100"}`}>
                  {general.roles[currentRoleIndex]}
                </span>
              </p>
                <p className="text-base sm:text-lg opacity-80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                  Crafting intuitive user experiences with elegant code.
                </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href={general.socials.instagramUrl}
                  className="p-2 bg-black rounded-full text-accent-yellow hover:bg-opacity-80 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={general.socials.twitterUrl}
                  className="p-2 bg-black rounded-full text-accent-yellow hover:bg-opacity-80 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={general.socials.githubUrl}
                  className="p-2 bg-black rounded-full text-accent-yellow hover:bg-opacity-80 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
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
