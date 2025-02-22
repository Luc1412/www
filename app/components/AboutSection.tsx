import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import general from "@/data/general.json"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import Link from "next/link"
import React, { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export default function AboutSection() {
  const birthday = new Date(general.birthdayTimestamp * 1000)
  const age = new Date().getFullYear() - birthday.getFullYear()
  const birthdayFmt = birthday.toLocaleDateString("en", { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: 'numeric'})
  return (
    <section id="about" className="w-full py-20 bg-main-bg">
      <div className="container mx-auto px-4 md:px-30">
        <Card className="bg-card-bg text-white">
          <CardHeader>
            <CardTitle className="text-6xl md:text-7xl lg:text-8xl font-black text-accent-yellow mb-6">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              I'm a <AboutTooltip tooltipText={`Born on ${birthdayFmt}`}>{age}-year-old</AboutTooltip> software engineer based in{' '}
              <AboutLink href={general.locationLink}>{general.location}</AboutLink>. My journey in tech began at the age of 15 when I started developing my first game extensions in Java. My passion for technology grew quickly, leading me to write my first scientific paper in 9th grade.<br />
              After graduating from high school in 2020, I pursued a degree in Computer Science at the <AboutLink href='https://hwr-berlin.de/'>Berlin School of Economics and Law</AboutLink>.  
              As part of a <AboutTooltip tooltipText={`50% studying, 50% working`}>dual study program</AboutTooltip>, I had the opportunity to work as a software developer at the{' '} 
              <AboutLink href='https://fu-berlin.de/'>Free University of Berlin</AboutLink>. I completed my bachelor's degree in 2023 and continued working at my apprenticeship company as a full-time employee.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface AboutTooltipProps {
  tooltipText: string
  children: React.ReactNode
}

const AboutTooltip: React.FC<AboutTooltipProps> = ({ tooltipText, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="text-accent-yellow">
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface AboutLinkProps {
  href: string
  children: React.ReactNode
}

const AboutLink: React.FC<AboutLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" className="text-accent-yellow"> 
      {children}
    </Link>
  )
}
