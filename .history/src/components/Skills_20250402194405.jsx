"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Braces,
  FileType,
  Layers,
  Database,
  Server,
  Cpu,
  Folder,
  FolderOpen,
} from "lucide-react";
import clsx from "clsx";

export default function VSCodeSkills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: false,
  });

  const skillCategories = [
    {
      name: "frontend",
      skills: [
        {
          name: "React",
          icon: <Braces className="w-4 h-4 mr-1 text-blue-400" />,
          level: 90,
          code: "const App = () => {\n  const [state, setState] = useState(initialState);\n  return <Component prop={state} />;\n};",
        },
        {
          name: "TypeScript",
          icon: <FileType className="w-4 h-4 mr-1 text-blue-500" />,
          level: 85,
          code: "interface User {\n  id: number;\n  name: string;\n  email: string;\n}",
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
          code: "import express from 'express';\n\nconst app = express();\napp.get('/api', (req, res) => {\n  res.json({ message: 'Hello World' });\n});\n\napp.listen(3000);",
        },
        {
          name: "PostgreSQL",
          icon: <Database className="w-4 h-4 mr-1 text-cyan-400" />,
          level: 75,
          code: "SELECT users.name, COUNT(orders.id) as order_count\nFROM users\nJOIN orders ON users.id = orders.user_id\nGROUP BY users.id\nHAVING COUNT(orders.id) > 5;",
        },
      ],
    },
  ];

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const selectSkill = (category) => {
    setActiveCategory(category);
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: true, // Ab category expand bhi hoga
    }));
  };

  const getActiveSkills = () =>
    skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <div className="w-full max-w-5xl mx-auto border border-gray-800 rounded-md overflow-hidden shadow-xl bg-[#1e1e1e] text-gray-300 font-mono">
      <div className="flex items-center bg-[#323233] px-4 py-1 text-sm">
        <div className="mx-auto font-semibold">skills.jsx - My Portfolio</div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-gray-800 flex flex-col">
          <div className="p-2 text-sm font-semibold uppercase text-gray-500">
            Explorer
          </div>

          <div className="flex-1">
            {skillCategories.map((category) => (
              <div key={category.name} className="px-2">
                {/* Category Toggle */}
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

                {/* Skills List */}
                {expandedCategories[category.name] && (
                  <div className="ml-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={clsx(
                          "flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] rounded px-1",
                          activeCategory === category.name && "bg-[#37373d]"
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

        {/* Skills Display */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto">
          <div className="p-4">
            {getActiveSkills().map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="mt-2 bg-[#2d2d2d] p-3 rounded text-sm overflow-x-auto">
                  <pre className="text-[#d4d4d4]">{skill.code}</pre>
                </div>
                <div className="mt-2 w-full bg-[#2d2d2d] rounded-full h-2.5">
                  <div
                    className="bg-[#007acc] h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
