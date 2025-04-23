"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import {clsx } from 'clsx';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration, user authentication, and product management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "Auth0"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "D3.js", "Express", "Social APIs"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A mobile-first application for tracking workouts, nutrition, and fitness goals.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "GraphQL", "MongoDB", "Health APIs"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
  ]

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextProject()
      }, 5000)
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
          scale: 0.85,
          opacity: 0.7,
          x: "40%",
          rotateY: 15,
        }
      case "right-2":
        return {
          zIndex: 3,
          scale: 0.7,
          opacity: 0.5,
          x: "70%",
          rotateY: 30,
        }
      case "left-1":
        return {
          zIndex: 4,
          scale: 0.85,
          opacity: 0.7,
          x: "-40%",
          rotateY: -15,
        }
      case "left-2":
        return {
          zIndex: 3,
          scale: 0.7,
          opacity: 0.5,
          x: "-70%",
          rotateY: -30,
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
    <div className="relative w-full max-w-6xl mx-auto py-16 px-4 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      {/* Carousel container */}
      <div className="relative h-[500px] perspective-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Background circle */}
          <div className="absolute w-[120%] h-[120%] rounded-full border-4 border-dashed border-gray-200 dark:border-gray-700 opacity-30 animate-spin-slow"></div>

          {/* Projects */}
          <div className="relative w-full max-w-md mx-auto h-[400px]">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleProjects.map((project) => {
                const styles = getPositionStyles(project.position)

                return (
                  <motion.div
                    key={project.id}
                    className={cn(
                      "absolute top-0 left-0 right-0 w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden",
                      project.position === "center" ? "cursor-grab active:cursor-grabbing" : "pointer-events-none",
                    )}
                    style={{ height: "400px" }}
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
                      transition: { duration: 0.3 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3,
                    }}
                    drag={project.position === "center" ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                        >
                          <Github className="w-4 h-4 mr-1" />
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Autoplay toggle */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            isAutoplay
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
          )}
        >
          {isAutoplay ? "Autoplay: On" : "Autoplay: Off"}
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500",
            )}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

