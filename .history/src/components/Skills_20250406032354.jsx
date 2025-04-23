"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Braces,
  FileType,
  Folder,
  FolderOpen,
  Server,
  Database,
  Terminal,
  GitBranch,
  Globe,
  Layers,
} from "lucide-react"
import clsx from "clsx"

type Skill = {
  name: string
  icon: JSX.Element
  level: number
  description: string
  code: string
}

type Category = {
  name: string
  skills: Skill[]
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState("React")
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: false,
    tools: false,
  })

  const skillCategories: Category[] = [
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
  
  useEffect(() => {
    // Side effects here
    return () => {
      // Cleanup function
    };
  }, [dependencies]);
  
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
        {
          name: "Next.js",
          icon: <Globe className="w-4 h-4 mr-1 text-white" />,
          level: 88,
          description: "React framework for production-grade applications",
          code: `// app/page.tsx
export default function Page() {
  return (
    <main>
      <h1>Welcome to my Next.js application</h1>
      <p>This is a server component by default</p>
    </main>
  );
}`,
        },
        {
          name: "CSS/Tailwind",
          icon: <Layers className="w-4 h-4 mr-1 text-sky-400" />,
          level: 92,
          description: "Styling with modern CSS and utility-first frameworks",
          code: `// Using Tailwind CSS
const Card = () => (
  <div className="max-w-md mx-auto bg-white rounded-xl 
    shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="p-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Card Title
        </h2>
      </div>
    </div>
  </div>
);`,
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
        {
          name: "PostgreSQL",
          icon: <Database className="w-4 h-4 mr-1 text-blue-300" />,
          level: 80,
          description: "Relational database management",
          code: `-- Create a table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Query data
SELECT * FROM users WHERE id = 1;`,
        },
        {
          name: "GraphQL",
          icon: <Globe className="w-4 h-4 mr-1 text-pink-500" />,
          level: 78,
          description: "API query language and runtime",
          code: `// GraphQL schema
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }
  
  type Query {
    getUser(id: ID!): User
    getPosts: [Post!]!
  }
\`;`,
        },
      ],
    },
    {
      name: "tools",
      skills: [
        {
          name: "Git",
          icon: <GitBranch className="w-4 h-4 mr-1 text-orange-400" />,
          level: 88,
          description: "Version control and collaboration",
          code: `# Common Git commands
git init
git add .
git commit -m "Initial commit"
git branch feature/new-feature
git checkout feature/new-feature
git push origin feature/new-feature
git pull origin main`,
        },
        {
          name: "Docker",
          icon: <Terminal className="w-4 h-4 mr-1 text-blue-400" />,
          level: 75,
          description: "Containerization and deployment",
          code: `# Dockerfile example
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]`,
        },
      ],
    },
  ]

  const toggleCategory = (category: string) => {
    console.log("Toggling category:", category)
    setExpandedCategories((prev) => {
      const newState = {
        ...prev,
        [category]: !prev[category],
      }
      console.log("New expanded state:", newState)
      return newState
    })
  }

  const selectSkill = (skillName: string) => {
    console.log("Selecting skill:", skillName)
    setActiveSkill(skillName)
  }

  const currentSkill =
    skillCategories.flatMap((cat) => cat.skills).find((s) => s.name === activeSkill) || skillCategories[0].skills[0]

  return (
    <div className="w-full h-screen mx-auto border border-gray-800 rounded-md overflow-hidden shadow-xl bg-[#1e1e1e] text-gray-300 font-mono">
      {/* Header */}
      <div className="flex items-center bg-[#323233] px-4 py-1 text-sm">
        <div className="hidden sm:flex space-x-2 text-white opacity-60">
          <div className="cursor-pointer hover:opacity-100">File</div>
          <div className="cursor-pointer hover:opacity-100">Edit</div>
          <div className="cursor-pointer hover:opacity-100">View</div>
          <div className="cursor-pointer hover:opacity-100">Go</div>
          <div className="cursor-pointer hover:opacity-100">Run</div>
        </div>
        <div className="mx-auto font-semibold">skills.tsx - My Portfolio</div>
      </div>

      <div className="flex flex-col md:flex-row h-[calc(100vh-2.5rem)]">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-[#252526] border-r border-gray-800 md:h-full h-48 overflow-y-auto">
          <div className="p-2 text-sm font-semibold uppercase text-gray-500 flex justify-between items-center">
            <span>Explorer</span>
            <span className="text-xs text-gray-400 md:hidden">Swipe for more →</span>
          </div>
          {skillCategories.map((category) => (
            <div key={category.name} className="px-2">
              <button
                className="flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] rounded px-1 transition-colors duration-200 w-full text-left"
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
              </button>

              {expandedCategories[category.name] && (
                <div className="ml-6">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => selectSkill(skill.name)}
                      className={clsx(
                        "flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] rounded px-1 transition-colors duration-200 w-full text-left",
                        { "bg-[#37373d]": activeSkill === skill.name },
                      )}
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 bg-[#1e1e1e] overflow-auto p-4">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              {currentSkill.icon}
              <span className="text-[#569cd6] mr-2">const</span>
              <span className="text-[#4ec9b0]">{currentSkill.name}</span>
              <span className="text-white"> = </span>
              <span className="text-[#ce9178]">"{currentSkill.description}"</span>;
            </div>

            <div className="mt-4 bg-[#2d2d2d] p-3 rounded text-sm overflow-x-auto">
              <pre className="text-[#d4d4d4] whitespace-pre-wrap">
                <code>{currentSkill.code}</code>
              </pre>
            </div>

            {/* Proficiency Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Proficiency</span>
                <span>{currentSkill.level}%</span>
              </div>
              <div className="w-full bg-[#2d2d2d] rounded-full h-2.5">
                <div
                  className="bg-[#007acc] h-2.5 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${currentSkill.level}%` }}
                ></div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-3 bg-[#2d2d2d] rounded">
              <h3 className="text-sm font-semibold mb-2 text-[#569cd6]">// Experience with {currentSkill.name}</h3>
              <p className="text-xs text-[#d4d4d4]">
                {currentSkill.name === "React" &&
                  "Built multiple production applications with React, including state management with Redux and Context API. Experienced with React hooks and modern patterns."}
                {currentSkill.name === "TypeScript" &&
                  "Implemented TypeScript in large-scale applications, created complex type definitions, and integrated with various libraries and frameworks."}
                {currentSkill.name === "Node.js" &&
                  "Developed RESTful APIs, microservices, and server-side applications. Familiar with Express, Fastify, and NestJS frameworks."}
                {currentSkill.name === "Next.js" &&
                  "Created full-stack applications with Next.js, utilizing both the Pages and App Router. Experienced with SSR, SSG, and ISR rendering strategies."}
                {currentSkill.name === "CSS/Tailwind" &&
                  "Designed responsive interfaces with modern CSS, Flexbox, Grid, and Tailwind CSS. Implemented complex animations and transitions."}
                {currentSkill.name === "PostgreSQL" &&
                  "Designed database schemas, wrote complex queries, and implemented database migrations. Familiar with indexing and query optimization."}
                {currentSkill.name === "GraphQL" &&
                  "Built GraphQL APIs with Apollo Server, implemented resolvers, and created efficient client-side queries with Apollo Client."}
                {currentSkill.name === "Git" &&
                  "Managed version control for team projects, implemented Git workflows, and resolved merge conflicts. Experienced with GitHub Actions for CI/CD."}
                {currentSkill.name === "Docker" &&
                  "Containerized applications for consistent development and deployment environments. Created multi-container applications with Docker Compose."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-[#007acc] px-4 py-0.5 text-xs text-white">
        <div className="flex items-center space-x-4">
          <div>main*</div>
          <div className="hidden sm:block">TypeScript React</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">Ln 42, Col 18</div>
          <div>Spaces: 2</div>
          <div className="hidden sm:block">UTF-8</div>
        </div>
      </div>
    </div>
  )
}


expo