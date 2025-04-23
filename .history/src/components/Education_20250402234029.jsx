"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Braces,
  FileType,
  Folder,
  FolderOpen,
  Server,
} from "lucide-react";
import clsx from "clsx";

export default function Education() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: false,
    tools: false,
  });

  const skillCategories = [
    {
      name: "frontend",
      skills: [
        {
          name: "React",
          icon: <Braces className="w-4 h-4 mr-1 text-blue-400" />,
          level: 90,
          description: "Building interactive UIs with React and its ecosystem",
          code: `const App = () => {
  const [state, setState] = useState(initialState);
  return <Component prop={state} />;
};`,
        },
        {
          name: "TypeScript",
          icon: <FileType className="w-4 h-4 mr-1 text-blue-500" />,
          level: 85,
          description: "Type-safe JavaScript development",
          code: `interface User {
  id: number;
  name: string;
  email: string;
}

const getUser = (id: number): User => {
  return { id, name: "John Doe", email: "john@example.com" };
};`,
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
          code: `import express from 'express';

const app = express();
app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => console.log("Server running on port 3000"));`,
        },
      ],
    },
  ];

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));

    if (!expandedCategories[category]) {
      setActiveCategory(category);
    }
  };

  return (
    <div className="w-screen mx-auto border border-gray-800 rounded-md overflow-hidden shadow-xl bg-[#1e1e1e] text-gray-300 font-mono">
      {/* VS Code Header */}
      <div className="flex items-center bg-[#323233] px-4 py-1 text-sm">
        <div className="flex space-x-2 text-white opacity-60">
          <div>File</div>
          <div>Edit</div>
          <div>View</div>
          <div>Go</div>
          <div>Run</div>
        </div>
        <div className="mx-auto font-semibold">skills.jsx - My Portfolio</div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-gray-800">
          <div className="p-2 text-sm font-semibold uppercase text-gray-500">Explorer</div>
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
                      className={clsx(
                        "flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] rounded px-1",
                        { "bg-[#37373d]": activeCategory === category.name }
                      )}
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

        {/* Code Editor */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto p-4">
          {skillCategories
            .find((cat) => cat.name === activeCategory)
            ?.skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex items-center mb-2">
                  {skill.icon}
                  <span className="text-[#569cd6] mr-2">const</span>
                  <span className="text-[#4ec9b0]">{skill.name}</span>
                  <span className="text-white"> = </span>
                  <span className="text-[#ce9178]">"{skill.description}"</span>;
                </div>

                <div className="mt-2 bg-[#2d2d2d] p-3 rounded text-sm overflow-x-auto">
                  <pre className="text-[#d4d4d4] whitespace-pre-wrap">{skill.code}</pre>
                </div>

                {/* Skill Proficiency Bar */}
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

      {/* Status Bar */}
      <div className="flex items-center justify-between bg-[#007acc] px-4 py-0.5 text-xs text-white">
        <div className="flex items-center space-x-4">
          <div>main*</div>
          <div>JavaScript React</div>
        </div>
        <div className="flex items-center space-x-4">
          <div>Ln 42, Col 18</div>
          <div>Spaces: 2</div>
          <div>UTF-8</div>
        </div>
      </div>
    </div>
  );
}