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
  Code,
  Coffee,
  Settings,
  Flame,
} from "lucide-react"
import clsx from "clsx"

export default function Education() {
  const [activeSkill, setActiveSkill] = useState("React")
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: false,
    databases: false,
    languages: false,
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
          name: "JavaScript",
          icon: <Code className="w-4 h-4 mr-1 text-yellow-400" />,
          level: 92,
          description: "Core web programming language for dynamic content",
          code: `// Modern JavaScript features
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    
    // Using destructuring and spread
    const { id, ...rest } = data;
    const newObj = { 
      ...rest, 
      modified: true 
    };
    
    return newObj;
  } catch (error) {
    console.error(error);
  }
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

const getUser = (id) => {
  return { id, name: "John Doe", email: "john@example.com" };
};`,
        },
        {
          name: "Next.js",
          icon: <Globe className="w-4 h-4 mr-1 text-white" />,
          level: 88,
          description: "React framework for production-grade applications",
          code: `// app/page.jsx
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
          name: "Express",
          icon: <Server className="w-4 h-4 mr-1 text-gray-400" />,
          level: 84,
          description: "Web application framework for Node.js",
          code: `import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/users';

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

export default app;`,
        },
        

        
      ],
    },
    {
      name: "databases",
      skills: [
        {
          name: "MongoDB",
          icon: <Database className="w-4 h-4 mr-1 text-green-500" />,
          level: 86,
          description: "NoSQL document database",
          code: `// MongoDB with Mongoose
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

// Create a new user
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw error;
  }
};`,
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
          name: "MySQL",
          icon: <Database className="w-4 h-4 mr-1 text-blue-600" />,
          level: 82,
          description: "Popular open-source relational database",
          code: `-- MySQL query example
SELECT 
  u.id, 
  u.name, 
  COUNT(o.id) AS total_orders,
  SUM(o.amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY total_spent DESC
LIMIT 10;`,
        },
        {
          name: "SQL Server",
          icon: <Database className="w-4 h-4 mr-1 text-red-400" />,
          level: 78,
          description: "Microsoft's enterprise database solution",
          code: `-- SQL Server stored procedure
CREATE PROCEDURE GetUserOrders
    @UserId INT,
    @StartDate DATE
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        o.OrderId,
        o.OrderDate,
        o.TotalAmount,
        p.ProductName
    FROM Orders o
    JOIN OrderDetails od ON o.OrderId = od.OrderId
    JOIN Products p ON od.ProductId = p.ProductId
    WHERE o.UserId = @UserId
    AND o.OrderDate >= @StartDate
    ORDER BY o.OrderDate DESC;
END`,
        },
        {
          name: "Firebase",
          icon: <Flame className="w-4 h-4 mr-1 text-yellow-500" />,
          level: 83,
          description: "Google's app development platform with real-time database",
          code: `// Firebase Firestore example
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  onSnapshot
} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a document
const addUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Real-time listener
const subscribeToUsers = (callback) => {
  const q = query(collection(db, "users"), where("active", "==", true));
  return onSnapshot(q, (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    callback(users);
  });
};`,
        },
      ],
    },
    {
      name: "languages",
      skills: [
        {
          name: "Java",
          icon: <Coffee className="w-4 h-4 mr-1 text-red-600" />,
          level: 79,
          description: "Object-oriented programming language",
          code: `// Java class example
public class User {
    private Long id;
    private String name;
    private String email;
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Getters and setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}`,
        },
        {
          name: "Python",
          icon: <Code className="w-4 h-4 mr-1 text-blue-500" />,
          level: 80,
          description: "Versatile high-level programming language",
          code: `# Python class with data processing
import pandas as pd
from datetime import datetime

class DataAnalyzer:
    def __init__(self, data_path):
        self.data_path = data_path
        self.data = None
        
    def load_data(self):
        try:
            self.data = pd.read_csv(self.data_path)
            return True
        except Exception as e:
            print(f"Error loading data: {e}")
            return False
            
    def process_data(self, column, operation):
        if self.data is None:
            raise ValueError("Data not loaded")
            
        if operation == "mean":
            return self.data[column].mean()
        elif operation == "sum":
            return self.data[column].sum()
        elif operation == "count":
            return self.data[column].count()
        else:
            raise ValueError(f"Operation {operation} not supported")
            
    def filter_by_date(self, date_column, start_date, end_date):
        mask = (self.data[date_column] >= start_date) & (self.data[date_column] <= end_date)
        return self.data[mask]`,
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
        
        },
      ],
    },
  ]

  const toggleCategory = (category) => {
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

  const selectSkill = (skillName) => {
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
        <div className="mx-auto font-semibold">skills.jsx - My Portfolio</div>
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
                {currentSkill.name === "JavaScript" &&
                  "Developed numerous web applications with vanilla JavaScript and modern ES6+ features. Comfortable with asynchronous programming, closures, and functional programming concepts."}
                {currentSkill.name === "TypeScript" &&
                  "Implemented TypeScript in large-scale applications, created complex type definitions, and integrated with various libraries and frameworks."}
                {currentSkill.name === "Node.js" &&
                  "Developed RESTful APIs, microservices, and server-side applications. Familiar with Express, Fastify, and NestJS frameworks."}
                {currentSkill.name === "Express" &&
                  "Created robust backend services with Express.js, implementing middleware, authentication, and RESTful routing patterns. Experienced with API development and MVC architecture."}
                {currentSkill.name === "Next.js" &&
                  "Created full-stack applications with Next.js, utilizing both the Pages and App Router. Experienced with SSR, SSG, and ISR rendering strategies."}
                {currentSkill.name === "CSS/Tailwind" &&
                  "Designed responsive interfaces with modern CSS, Flexbox, Grid, and Tailwind CSS. Implemented complex animations and transitions."}
                {currentSkill.name === "MongoDB" &&
                  "Designed and implemented NoSQL database solutions using MongoDB Atlas and Mongoose ODM. Created efficient schemas and indexes for optimized queries."}
                {currentSkill.name === "PostgreSQL" &&
                  "Designed database schemas, wrote complex queries, and implemented database migrations. Familiar with indexing and query optimization."}
                {currentSkill.name === "MySQL" &&
                  "Developed and maintained relational database systems, created stored procedures, and optimized query performance in production environments."}
                {currentSkill.name === "SQL Server" &&
                  "Implemented enterprise database solutions with SQL Server, including indexing strategies, stored procedures, and performance tuning for high-traffic applications."}
                {currentSkill.name === "Firebase" &&
                  "Built real-time applications with Firebase, integrating authentication, Firestore, Cloud Functions, and Storage. Implemented security rules and data validation."}
                {currentSkill.name === "Java" &&
                  "Developed enterprise applications with Java, including Spring Boot APIs and Android mobile applications. Experienced with OOP principles and design patterns."}
                {currentSkill.name === "Python" &&
                  "Created data analysis tools, automation scripts, and web applications with Python. Familiar with libraries like Pandas, NumPy, Django, and Flask."}
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
          <div className="hidden sm:block">JavaScript React</div>
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