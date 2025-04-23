import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Sample skills data - replace with your own
const skillsData = [
  // Programming Languages
  { name: "JavaScript", level: 90, category: "programming", description: "Modern ES6+, async/await, functional programming" },
  { name: "TypeScript", level: 85, category: "programming", description: "Type safety and interface design" },
  { name: "Python", level: 80, category: "programming", description: "Data analysis, automation, and backend development" },
  { name: "Java", level: 75, category: "programming", description: "Enterprise applications and Android development" },
  { name: "SQL", level: 85, category: "programming", description: "Complex queries and database optimization" },
  
  // Frameworks
  { name: "React", level: 95, category: "frameworks", description: "Component architecture, hooks, state management" },
  { name: "Node.js", level: 85, category: "frameworks", description: "RESTful APIs and server-side applications" },
  { name: "Express", level: 80, category: "frameworks", description: "Web application frameworks and middleware" },
  { name: "Next.js", level: 75, category: "frameworks", description: "Server-side rendering and static site generation" },
  { name: "Django", level: 70, category: "frameworks", description: "Full-stack Python web development" },
  
  // Music
  { name: "Guitar", level: 80, category: "music", description: "Acoustic and electric playing, improvisation" },
  { name: "Music Theory", level: 75, category: "music", description: "Harmony, composition, and arrangement" },
  { name: "Music Production", level: 70, category: "music", description: "Recording, mixing, and mastering" },
  { name: "Piano", level: 60, category: "music", description: "Accompaniment and composition" },
  { name: "Singing", level: 65, category: "music", description: "Vocal techniques and performance" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", description: "Version control and collaboration" },
  { name: "Docker", level: 80, category: "tools", description: "Containerization and deployment" },
  { name: "AWS", level: 75, category: "tools", description: "Cloud infrastructure and services" },
  { name: "Figma", level: 70, category: "tools", description: "UI/UX design and prototyping" },
  { name: "Ableton Live", level: 85, category: "tools", description: "Digital audio workstation for music production" }
];

// Category colors for the skills
const categoryColors = {
  programming: "#4F46E5", // indigo
  frameworks: "#10B981", // emerald
  music: "#EC4899",      // pink
  tools: "#F59E0B"       // amber
};

const SkillGalaxy = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Calculate container dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Position skills in a spiral pattern
  const getSkillPositions = () => {
    const center = {
      x: dimensions.width / 2,
      y: dimensions.height / 2
    };
    
    const positions = {};
    const categoryGroups = {};
    
    // Group skills by category
    skillsData.forEach(skill => {
      if (!categoryGroups[skill.category]) {
        categoryGroups[skill.category] = [];
      }
      categoryGroups[skill.category].push(skill);
    });
    
    // Position each category in its own section of the galaxy
    let categoryIndex = 0;
    const totalCategories = Object.keys(categoryGroups).length;
    
    Object.entries(categoryGroups).forEach(([category, skills]) => {
      const angle = (categoryIndex / totalCategories) * 2 * Math.PI;
      const categoryCenter = {
        x: center.x + Math.cos(angle) * (dimensions.width / 4),
        y: center.y + Math.sin(angle) * (dimensions.height / 4)
      };
      
      // Position skills in a spiral within their category group
      skills.forEach((skill, i) => {
        const skillAngle = (i / skills.length) * 2 * Math.PI;
        const distance = 80 + (i * 15);
        positions[skill.name] = {
          x: categoryCenter.x + Math.cos(skillAngle) * distance,
          y: categoryCenter.y + Math.sin(skillAngle) * distance
        };
      });
      
      categoryIndex++;
    });
    
    return positions;
  };

  const skillPositions = dimensions.width ? getSkillPositions() : {};

  // Handle zoom with mouse wheel
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prevScale => Math.min(Math.max(prevScale * zoomFactor, 0.5), 3));
  };

  // Handle galaxy dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      setStartPos({ x: e.clientX, y: e.clientY });
      setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Get constellation connections - connect skills within the same category
  const getConstellationLines = () => {
    const lines = [];
    const categorizedSkills = {};
    
    // Group skills by category
    skillsData.forEach(skill => {
      if (!categorizedSkills[skill.category]) {
        categorizedSkills[skill.category] = [];
      }
      categorizedSkills[skill.category].push(skill.name);
    });
    
    // Create connections within each category
    Object.values(categorizedSkills).forEach(skillNames => {
      for (let i = 0; i < skillNames.length; i++) {
        const start = skillPositions[skillNames[i]];
        
        // Connect to the next skill in the category (circular)
        const nextIndex = (i + 1) % skillNames.length;
        const end = skillPositions[skillNames[nextIndex]];
        
        if (start && end) {
          lines.push({ 
            start, 
            end,
            category: skillsData.find(s => s.name === skillNames[i]).category
          });
        }
      }
    });
    
    return lines;
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen bg-black overflow-hidden relative" 
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Star background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full" 
            style={{
              width: Math.random() * 2 + 'px', 
              height: Math.random() * 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Galaxy elements container with zoom and pan */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          scale,
          x: position.x, 
          y: position.y
        }}
      >
        {/* Constellation lines */}
        {dimensions.width > 0 && getConstellationLines().map((line, i) => (
          <div 
            key={`line-${i}`}
            className="absolute bg-opacity-30"
            style={{
              left: line.start.x,
              top: line.start.y,
              width: Math.sqrt(Math.pow(line.end.x - line.start.x, 2) + Math.pow(line.end.y - line.start.y, 2)),
              height: 1,
              backgroundColor: categoryColors[line.category],
              opacity: 0.3,
              transform: `rotate(${Math.atan2(line.end.y - line.start.y, line.end.x - line.start.x)}rad)`,
              transformOrigin: '0 0'
            }}
          />
        ))}

        {/* Skills as stars */}
        {skillsData.map((skill) => {
          const position = skillPositions[skill.name];
          if (!position) return null;
          
          const size = (skill.level / 100) * 40 + 10; // Size based on skill level
          
          return (
            <motion.div
              key={skill.name}
              className="absolute rounded-full flex items-center justify-center cursor-pointer select-none"
              style={{
                left: position.x,
                top: position.y,
                width: size,
                height: size,
                backgroundColor: categoryColors[skill.category],
                boxShadow: `0 0 ${size/2}px ${categoryColors[skill.category]}`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedSkill(skill)}
            >
              {size > 25 && (
                <span className="text-xs font-bold text-white">{skill.name}</span>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skill info popup */}
      {selectedSkill && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-700 
                      rounded-lg p-4 max-w-xs z-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: categoryColors[selectedSkill.category] }}>
            {selectedSkill.name}
          </h3>
          <p className="text-gray-300 mb-3">{selectedSkill.description}</p>
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Proficiency:</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full" 
                  style={{ 
                    backgroundColor: i < Math.round(selectedSkill.level / 20) 
                      ? categoryColors[selectedSkill.category] 
                      : '#4B5563'
                  }}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-300">{selectedSkill.level}%</span>
          </div>
          <button 
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            onClick={() => setSelectedSkill(null)}
          >
            ×
          </button>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg 
                    border border-gray-800 rounded-lg p-3 z-10">
        <h4 className="text-white text-sm font-bold mb-2">Skill Categories</h4>
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }} />
            <span className="text-gray-300 text-xs capitalize">{category}</span>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg 
                    border border-gray-800 rounded-lg p-3 z-10 text-xs text-gray-400">
        <p>Scroll to zoom • Drag to move • Click stars for details</p>
      </div>
    </div>
  );
};

export default SkillGalaxy;