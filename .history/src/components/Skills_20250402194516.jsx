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
import clx from "clsx"

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
        {
          name: "CSS/Tailwind",
          icon: <Layers className="w-4 h-4 mr-1 text-pink-400" />,
          level: 80,
          description: "Styling with modern CSS and Tailwind",
          code: 'const Button = () => (\n  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n    Click me\n  </button>\n);',
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
        {
          name: "PostgreSQL",
          icon: <Database className="w-4 h-4 mr-1 text-cyan-400" />,
          level: 75,
          description: "Relational database management",
          code: "SELECT users.name, COUNT(orders.id) as order_count\nFROM users\nJOIN orders ON users.id = orders.user_id\nGROUP BY users.id\nHAVING COUNT(orders.id) > 5;",
        },
        {
          name: "GraphQL",
          icon: <Cpu className="w-4 h-4 mr-1 text-purple-400" />,
          level: 70,
          description: "API query language and runtime",
          code: "type Query {\n  user(id: ID!): User\n}\n\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}",
        },
      ],
    },
    {
      name: "tools",
      skills: [
        {
          name: "Git",
          icon: <GitBranch className="w-4 h-4 mr-1 text-orange-500" />,
          level: 90,
          description: "Version control and collaboration",
          code: 'git checkout -b feature/new-feature\ngit add .\ngit commit -m "Add new feature"\ngit push origin feature/new-feature',
        },
        {
          name: "Docker",
          icon: <Box className="w-4 h-4 mr-1 text-blue-400" />,
          level: 75,
          description: "Containerization for applications",
          code: 'FROM node:16\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]',
        },
        {
          name: "VS Code",
          icon: <Terminal className="w-4 h-4 mr-1 text-gray-400" />,
          level: 95,
          description: "Primary development environment",
          code: '// settings.json\n{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode"\n}',
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

  const selectSkill = (category, skillName) => {
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
      {/* VS Code Header */}
      <div className="flex items-center bg-[#323233] px-4 py-1 text-sm">
        <div className="flex space-x-2">
          <div className="text-white opacity-60">File</div>
          <div className="text-white opacity-60">Edit</div>
          <div className="text-white opacity-60">View</div>
          <div className="text-white opacity-60">Go</div>
          <div className="text-white opacity-60">Run</div>
        </div>
        <div className="mx-auto font-semibold">skills.jsx - My Portfolio</div>
      </div>

      <div className="flex">
        {/* VS Code Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-gray-800 flex flex-col">
          <div className="p-2 text-sm font-semibold uppercase text-gray-500">Explorer</div>

          {/* Folders */}
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
                        onClick={() => selectSkill(category.name, skill.name)}
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

          {/* Bottom icons */}
          <div className="mt-auto border-t border-gray-800">
            <div className="p-2 flex flex-col items-center space-y-4">
              <Settings className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Code className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* VS Code Editor */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto">
          <div className="flex border-b border-gray-800">
            <div className="px-4 py-1 bg-[#2d2d2d] text-white border-r border-gray-800 flex items-center">
              <FileCode className="w-4 h-4 mr-1 text-orange-400" />
              <span>skills.jsx</span>
            </div>
          </div>

          <div className="p-4">
            {getActiveSkills().map((skill, index) => (
              <div key={skill.name} className="mb-6">
                <div className="flex items-center mb-2">
                  {skill.icon}
                  <span className="text-[#569cd6] mr-2">const</span>
                  <span className="text-[#4ec9b0]">{skill.name}</span>
                  <span className="text-white"> = </span>
                  <span className="text-[#ce9178]">"{skill.description}"</span>
                  <span className="text-white">;</span>
                </div>

                <div className="flex items-center mb-2">
                  <span className="text-[#569cd6] mr-2">const</span>
                  <span className="text-[#4ec9b0]">proficiency</span>
                  <span className="text-white"> = </span>
                  <span className="text-[#b5cea8]">{skill.level}</span>
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

      {/* VS Code Status Bar */}
      <div className="flex items-center justify-between bg-[#007acc] px-4 py-0.5 text-xs text-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span>main*</span>
          </div>
          <div>JavaScript React</div>
        </div>
        <div className="flex items-center space-x-4">
          <div>Ln 42, Col 18</div>
          <div>Spaces: 2</div>
          <div>UTF-8</div>
        </div>
      </div>
    </div>
  )
}

