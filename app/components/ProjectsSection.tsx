"use client"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import projects from "@/data/projects.json"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Markdown from "react-markdown"
import Link from "next/link"

export default function ProjectsSection() {
  const projectRefs = projects.map(() => useRef(null))
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="w-full py-20 bg-main-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16 text-accent-yellow">Projects</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent-yellow/20 md:transform md:-translate-x-1/2" />

          {projects.map((project, index) => {
            const ref = projectRefs[index]
            const isInView = useInView(ref, { once: true })

            return (
              <motion.div
                ref={ref}
                key={project.name}
                className="mb-16 md:mb-32 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-accent-yellow rounded-full" />

                <div
                  className={`flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-4 md:gap-8 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Date */}
                  <div className="text-left md:text-center w-32 flex flex-row md:flex-col items-center gap-2 md:gap-0">
                    <span className="text-accent-yellow font-medium">
                      {project.startedAt.split("-").reverse().join("/")}
                    </span>
                    <span className="text-accent-yellow/60 font-medium md:my-1">-</span>
                    <span className="text-accent-yellow font-medium">
                      {project.endedAt ? project.endedAt.split("-").reverse().join("/") : "Present"}
                    </span>
                  </div>

                  {/* Project Card */}
                  <div
                    className="w-full md:w-1/2 bg-card-bg rounded-[24px] p-6 cursor-pointer hover:bg-card-hover transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{project.name}</h3>
                    <Markdown className="text-gray-300 mb-4 line-clamp-3 text-sm md:text-base prose prose-invert">
                      {project.description}
                    </Markdown>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="bg-accent-yellow text-black cursor-default text-xs md:text-sm"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-accent-yellow text-black cursor-default text-xs md:text-sm"
                        >
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button variant="link" className="text-accent-yellow p-0">
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
      <DialogContent className="bg-card-bg text-white max-w-2xl max-h-[80vh] flex flex-col mx-auto overflow-hidden">          {selectedProject && (
            <>
              {/* Static Header: Only the Title */}
              <div className="flex-shrink-0">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.name}</DialogTitle>
                </DialogHeader>
              </div>

              {/* Scrollable Main Content: Image, Markdown, and Technologies */}
              <div className="flex-1 overflow-y-auto">
                <img
                  src={selectedProject.imageUrl || "/placeholder.svg"}
                  alt={selectedProject.name}
                  className="w-full h-32 md:h-48 object-cover mb-6"
                />
                <div className="prose prose-invert max-w-none mb-6 text-sm md:text-base">
                  <Markdown>{selectedProject.description}</Markdown>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-semibold mb-3 text-accent-yellow">Technologies</h4>
                  <div className="grid gap-4">
                    {selectedProject.technologies.map((tech) => (
                      <div key={tech.name} className="bg-card-hover rounded-[16px] p-4">
                        <h5 className="text-sm md:text-base font-medium text-accent-yellow mb-1">
                          {tech.name}
                          {tech.subTechnologies && (
                            <span className="text-xs md:text-sm font-normal text-gray-300">
                              {" "}
                              ({tech.subTechnologies.join(", ")})
                            </span>
                          )}
                        </h5>
                        <p className="text-xs md:text-sm text-gray-300">{tech.usage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Static Footer: Action Button */}
              {selectedProject.url && (
                <div className="flex-shrink-0">
                <DialogFooter className="flex justify-between">
                  <Button asChild className="bg-accent-yellow text-black hover:bg-accent-yellow/90">
                    <Link href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                      View Project
                    </Link>
                  </Button>
                </DialogFooter>
              </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
