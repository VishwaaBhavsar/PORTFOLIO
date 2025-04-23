"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { clsx } from 'clsx'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Smart Recipe Generator And Meal Planner",
      description:
        "Built 'Flavour with Fusion' – a smart meal planner that generates personalized recipes based on dietary preferences and creates weekly meal plans",
      image: "/Meal_planner.png?height=600&width=800",
      tags: ["Next.js", "Node.js", "Firebase", "LLAMA"],
      demoLink: "https://drive.google.com/file/d/14cb8R4C8KTLG0eKMZAHEHG_O7rhOhpQ5/view?usp=drive_link",
      githubLink: "https://github.com/VishwaaBhavsar/HACKATHON",
    },
    {
      id: 2,
      title: "CropCare",
      description: "An AI-powered platform designed to assist farmers with real-time agricultural guidance, crop health monitoring, weather updates, pest detection, and personalized recommendations to boost productivity and sustainability",
      image: "/crop.png?height=700&width=900",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 3,
      title: "AI Interview Simulator",
      description: "Built an AI-powered Interview Simulator with modules for Aptitude, Group Discussion, and Resume-based Technical Interview, offering real-time evaluation and feedback.",
      image: "/aiinterview.jpg?height=600&width=800",
      tags: ["Next.js", "Node.js", "Supabase", "Gemini"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 4,
      title: "UBER Clone",
      description: "A sophisticated analytics platform that integrates multiple data sources to deliver actionable insights on marketing campaign performance across channels.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Express", "GraphQL", "Machine Learning"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 5,
      title: "Quizo",
      description: "Created Quizo, an AI-powered platform that transforms lecture notes, handwritten content, and audio recordings into personalized quizzes and flashcards. Features include adaptive difficulty, spaced repetition, concept mapping, and collaborative study tools for smarter learning.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React.js", "Firebase", "Fast Api", "Health APIs"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextProject()
      }, 6000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isAutoplay, currentIndex])

  // Get array of visible projects in the correct order
  const getVisibleProjects = () => {
    const result = []
    const totalProjects = projects.length

    // Current project
    result.push({
      ...projects[currentIndex],
      position: "center",
    })

    // Right side projects (2)
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex + i) % totalProjects
      result.push({
        ...projects[index],
        position: `right-${i}`,
      })
    }

    // Left side projects (2)
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex - i + totalProjects) % totalProjects
      result.push({
        ...projects[index],
        position: `left-${i}`,
      })
    }

    return result
  }

  const visibleProjects = getVisibleProjects()

  // Handle drag gestures
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x

    if (Math.abs(velocity.x) > 500 || Math.abs(swipe) > 100) {
      if (swipe < 0) {
        nextProject()
      } else {
        prevProject()
      }
    }
  }

  // Get position-specific styles
  const getPositionStyles = (position) => {
    switch (position) {
      case "center":
        return {
          zIndex: 5,
          scale: 1,
          opacity: 1,
          x: 0,
          rotateY: 0,
        }
      case "right-1":
        return {
          zIndex: 4,
          scale: 0.8,
          opacity: 0.6,
          x: "45%",
          rotateY: 12,
        }
      case "right-2":
        return {
          zIndex: 3,
          scale: 0.65,
          opacity: 0.4,
          x: "75%",
          rotateY: 24,
        }
      case "left-1":
        return {
          zIndex: 4,
          scale: 0.8,
          opacity: 0.6,
          x: "-45%",
          rotateY: -12,
        }
      case "left-2":
        return {
          zIndex: 3,
          scale: 0.65,
          opacity: 0.4,
          x: "-75%",
          rotateY: -24,
        }
      default:
        return {
          zIndex: 1,
          scale: 0.5,
          opacity: 0,
          x: 0,
          rotateY: 0,
        }
    }
  }

  return (
    <section className="relative w-full max-w-7xl mx-auto py-24 px-4">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my portfolio of professional applications showcasing expertise in frontend development, 
          user experience design, and full-stack implementation.
        </p>
      </div>
  
      {/* Carousel container */}
      <div className="relative h-[520px] perspective-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Projects */}
          <div className="relative w-full max-w-lg mx-auto h-[450px]">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleProjects.map((project) => {
                const styles = getPositionStyles(project.position)
  
                return (
                  <motion.div
                    key={project.id}
                    className={clsx(
                      "absolute top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",
                      project.position === "center" ? "cursor-grab active:cursor-grabbing" : "pointer-events-none",
                    )}
                    style={{ height: "450px" }}
                    initial={{
                      ...styles,
                      filter: project.position === "center" ? "brightness(1)" : "brightness(0.7)",
                    }}
                    animate={{
                      ...styles,
                      filter: project.position === "center" ? "brightness(1)" : "brightness(0.7)",
                    }}
                    exit={{
                      scale: 0.5,
                      opacity: 0,
                      transition: { duration: 0.4 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      duration: 0.4,
                    }}
                    drag={project.position === "center" ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.08}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
  
        {/* Navigation buttons */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
  
      {/* Controls and indicators */}
      <div className="flex flex-col items-center mt-10 space-y-6">
        {/* Autoplay toggle */}
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className={clsx(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            isAutoplay
              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
              : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
          )}
        >
          {isAutoplay ? "Autoplay: Active" : "Autoplay: Paused"}
        </button>
  
        {/* Indicators */}
        <div className="flex justify-center space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={clsx(
                "transition-all duration-300",
                index === currentIndex
                  ? "w-8 h-2 bg-blue-600 dark:bg-blue-500 rounded-full"
                  : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full",
              )}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}