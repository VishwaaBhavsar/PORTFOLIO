import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Terminal,
  Server,
  Cpu,
  Database,
  Zap,
  Music,
  Monitor,
  Headphones,
  LayoutGrid,
  Settings,
  List,
} from "lucide-react";
import "tailwindcss/tailwind.css";

const skillsData = [
  { name: "JavaScript", level: 90, category: "languages", icon: "Code" },
  { name: "Python", level: 80, category: "languages", icon: "Code" },
  { name: "React", level: 95, category: "frameworks", icon: "Code" },
  { name: "Docker", level: 80, category: "systems", icon: "Cpu" },
  { name: "Music Production", level: 70, category: "music", icon: "Headphones" },
];

const categoryColors = {
  languages: "#facc15",
  frameworks: "#4ade80",
  music: "#fb7185",
  systems: "#a78bfa",
};

const IconComponents = { Code, Terminal, Server, Cpu, Database, Zap, Music, Monitor, Headphones };

const VSCodeSkillUI = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6">
        <LayoutGrid className="text-gray-400 hover:text-white cursor-pointer" onClick={() => setActiveTab("skills")} />
        <Terminal className="text-gray-400 hover:text-white cursor-pointer" onClick={() => setActiveTab("terminal")} />
        <List className="text-gray-400 hover:text-white cursor-pointer" onClick={() => setActiveTab("list")} />
        <Settings className="text-gray-400 hover:text-white cursor-pointer mt-auto mb-4" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-800 p-2 text-sm flex justify-between items-center">
          <span>VS Code Skill Explorer</span>
          <span>CPU: 32% | MEM: 1.2GB/8GB</span>
        </div>

        <div className="p-4 flex flex-wrap gap-4">
          {skillsData.map((skill) => {
            const IconComponent = IconComponents[skill.icon];
            return (
              <div
                key={skill.name}
                className="bg-gray-700 p-4 rounded-lg w-48 cursor-pointer hover:bg-gray-600 transition"
                onClick={() => setSelectedSkill(skill)}
              >
                {IconComponent && <IconComponent size={20} className="mb-2" style={{ color: categoryColors[skill.category] }} />}
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <div className="w-full h-2 bg-gray-600 mt-2 rounded">
                  <div className="h-2 rounded" style={{ width: `${skill.level}%`, backgroundColor: categoryColors[skill.category] }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skill Detail Panel */}
      {selectedSkill && (
        <div className="w-64 bg-gray-800 p-4 border-l border-gray-700">
          <h2 className="text-xl font-bold">{selectedSkill.name}</h2>
          <p className="mt-2 text-gray-400">Proficiency: {selectedSkill.level}%</p>
          <button className="mt-4 bg-red-500 p-2 rounded text-sm" onClick={() => setSelectedSkill(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default VSCodeSkillUI;
