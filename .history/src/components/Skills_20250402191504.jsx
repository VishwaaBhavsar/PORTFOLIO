"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Code,
  FileCode,
  Folder,
  FolderOpen,
  Settings,
  Braces,
  FileType,
  Layers,
  Database,
  Server,
  GitBranch,
  Box,
  Terminal,
  Cpu,
} from "lucide-react"

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function VSCodeSkills() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: false,
    tools: false,
  })

  const skillCategories = [
    {
      name: "frontend",
      skills: [
        {
          name: "React",
          icon: <Braces className="w-4 h-4 mr-1 text-blue-400" />, 
          level: 90,
          description: "Building interactive UIs with React and its ecosystem",
          code: "const App = () => {\n  const [state, setState] = useState(initialState);\n  return <Component prop={state} />;\n};",
        },
        {
          name: "TypeScript",
          icon: <FileType className="w-4 h-4 mr-1 text-blue-500" />, 
          level: 85,
          description: "Type-safe JavaScript development",
          code: "interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst getUser = (id) => {\n  // Implementation\n};",
        },
      ],
    },
    {
      name: "backend",
      skills: [
        {
          name: "Node.js",
          icon: <Server className="w-4 h-4 mr-1 text-green-500" />, 
          level: 85,
          description: "Server-side JavaScript with Node.js",
          code: "import express from 'express';\n\nconst app = express();\napp.get('/api', (req, res) => {\n  res.json({ message: 'Hello World' });\n});\n\napp.listen(3000);",
        },
      ],
    },
  ]

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))

    if (!expandedCategories[category]) {
      setActiveCategory(category)
    }
  }

  const selectSkill = (category) => {
    setActiveCategory(category)
    if (!expandedCategories[category]) {
      setExpandedCategories((prev) => ({
        ...prev,
        [category]: true,
      }))
    }
  }

  const getActiveSkills = () => {
    return skillCategories.find((cat) => cat.name === activeCategory)?.skills || []
  }

  return (
    <div className="w-full max-w-5xl mx-auto border border-gray-800 rounded-md overflow-hidden shadow-xl bg-[#1e1e1e] text-gray-300 font-mono">
      <div className="flex">
        <div className="w-64 bg-[#252526] border-r border-gray-800 flex flex-col">
          <div className="p-2 text-sm font-semibold uppercase text-gray-500">Explorer</div>
          <div className="flex-1">
            {skillCategories.map((category) => (
              <div key={category.name} className="px-2">
                <div
                  className="flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] rounded px-1"
                  onClick={() => toggleCategory(category.name)}
                >
                  {expandedCategories[category.name] ? (
                    <ChevronDown className="w-4 h-4 mr-1 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 mr-1 text-gray-400" />
                  )}
                  {expandedCategories[category.name] ? (
                    <FolderOpen className="w-4 h-4 mr-1 text-blue-400" />
                  ) : (
                    <Folder className="w-4 h-4 mr-1 text-blue-400" />
                  )}
                  <span className="capitalize">{category.name}</span>
                </div>
                {expandedCategories[category.name] && (
                  <div className="ml-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] rounded px-1",
                          activeCategory === category.name && "bg-[#37373d]",
                        )}
                        onClick={() => selectSkill(category.name)}
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[#1e1e1e] overflow-auto p-4">
          {getActiveSkills().map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex items-center mb-2">
                {skill.icon}
                <span className="text-[#569cd6] mr-2">const</span>
                <span className="text-[#4ec9b0]">{skill.name}</span>
                <span className="text-white"> = </span>
                <span className="text-[#ce9178]">"{skill.description}"</span>
                <span className="text-white">;</span>
              </div>
              <div className="mt-2 bg-[#2d2d2d] p-3 rounded text-sm overflow-x-auto">
                <pre className="text-[#d4d4d4]">{skill.code}</pre>
              </div>
              <div className="mt-2 w-full bg-[#2d2d2d] rounded-full h-2.5">
                <div className="bg-[#007acc] h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
