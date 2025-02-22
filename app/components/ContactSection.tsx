import { Github, Linkedin, Mail, Disc, X } from "lucide-react"
import Link from "next/link"
import { env } from "process"
import general from "@/data/general.json"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 text-accent-yellow">
          Get in Touch
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <Link href={general.socials.githubUrl} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-[#2A3F2A] p-6 rounded-[24px] group-hover:bg-[#3A4F3A] transition-colors">
              <Github className="w-8 h-8 text-[#E2FF7D]" />
            </div>
            <span className="block text-center mt-4 text-[#E2FF7D] opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </Link>
          <Link href={general.socials.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-[#2A3F2A] p-6 rounded-[24px] group-hover:bg-[#3A4F3A] transition-colors">
              <Linkedin className="w-8 h-8 text-[#E2FF7D]" />
            </div>
            <span className="block text-center mt-4 text-[#E2FF7D] opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </Link>
          <Link href={`mailto:${env.CONTACT_EMAIL}`} className="group">
            <div className="bg-[#2A3F2A] p-6 rounded-[24px] group-hover:bg-[#3A4F3A] transition-colors">
              <Mail className="w-8 h-8 text-[#E2FF7D]" />
            </div>
            <span className="block text-center mt-4 text-[#E2FF7D] opacity-0 group-hover:opacity-100 transition-opacity">
              Email
            </span>
          </Link>
          <Link href={general.socials.discordUrl} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-[#2A3F2A] p-6 rounded-[24px] group-hover:bg-[#3A4F3A] transition-colors">
              <Disc className="w-8 h-8 text-[#E2FF7D]" />
            </div>
            <span className="block text-center mt-4 text-[#E2FF7D] opacity-0 group-hover:opacity-100 transition-opacity">
              Discord
            </span>
          </Link>
          <Link
            href={general.socials.xingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-[#2A3F2A] p-6 rounded-[24px] group-hover:bg-[#3A4F3A] transition-colors">
              <X className="w-8 h-8 text-[#E2FF7D]" />
            </div>
            <span className="block text-center mt-4 text-[#E2FF7D] opacity-0 group-hover:opacity-100 transition-opacity">
              Xing
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
