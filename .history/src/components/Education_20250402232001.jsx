'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Code,
  FileCode,
  Folder,
  FolderOpen,
  Settings,
  GitBranch,
  Box,
  Terminal,
  Cpu,
  Layers,
  Database,
  Server,
} from 'lucide-react';
import clsx from 'clsx';

const skillsData = [
  {
    name: 'Frontend',
    icon: <Folder className='text-blue-400' />,
    skills: [
      {
        name: 'React',
        icon: <Layers className='text-blue-400' />,
        level: 90,
        description: 'Building interactive UIs with React.',
        code: `const App = () => {
  const [state, setState] = useState(initialState);
  return <Component prop={state} />;
};`,
      },
      {
        name: 'TypeScript',
        icon: <Cpu className='text-blue-500' />,
        level: 85,
        description: 'Type-safe JavaScript development.',
        code: `interface User {
  id: number;
  name: string;
  email: string;
}`,
      },
    ],
  },
  {
    name: 'Backend',
    icon: <Server className='text-green-500' />,
    skills: [
      {
        name: 'Node.js',
        icon: <Database className='text-green-500' />,
        level: 85,
        description: 'Server-side JavaScript with Node.js.',
        code: `import express from 'express';

const app = express();
app.get('/api', (req, res) => res.json({ message: 'Hello' }));
app.listen(3000);`,
      },
    ],
  },
];

const SkillCategory = ({ category, expanded, onToggle }) => (
  <div className='p-2'>
    <div
      className='flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded'
      onClick={() => onToggle(category.name)}
    >
      {expanded ? <ChevronDown /> : <ChevronRight />}
      {category.icon}
      <span className='ml-2'>{category.name}</span>
    </div>
  </div>
);

const SkillItem = ({ skill }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='p-2'>
    <div className='flex items-center text-lg'>
      {skill.icon} <span className='ml-2 font-semibold'>{skill.name}</span>
    </div>
    <div className='text-sm text-gray-400'>{skill.description}</div>
    <div className='bg-gray-700 h-2 rounded-full mt-2'>
      <motion.div
        className='bg-blue-500 h-2 rounded-full'
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
      />
    </div>
  </motion.div>
);

export default function VSCodeSkills() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className='w-screen max-w-3xl mx-auto border rounded-md bg-gray-900 text-gray-300'>
      <div className='bg-gray-800 p-3 font-mono text-sm'>skills.jsx - My Portfolio</div>
      <div className='flex'>
        {/* Sidebar */}
        <div className='w-64 bg-gray-850 border-r'>
          <div className='p-3 font-semibold text-gray-500'>Explorer</div>
          {skillsData.map((category) => (
            <SkillCategory
              key={category.name}
              category={category}
              expanded={expandedCategory === category.name}
              onToggle={setExpandedCategory}
            />
          ))}
        </div>

        {/* Editor */}
        <div className='flex-1 p-4'>
          {expandedCategory && (
            skillsData
              .find((cat) => cat.name === expandedCategory)
              ?.skills.map((skill) => <SkillItem key={skill.name} skill={skill} />)
          )}
        </div>
      </div>
    </div>
  );
}