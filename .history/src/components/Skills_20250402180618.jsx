import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { useLoader } from "@react-three/fiber";
import robotoFont from "/path-to-your-font.json"; // Replace with actual font JSON
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";

extend({ TextGeometry });

const skills = [
  { text: "React", position: [2, 2, 2] },
  { text: "Node.js", position: [-2, 2, -2] },
  { text: "HTML5", position: [2, -2, -2] },
  { text: "CSS3", position: [-2, -2, 2] },
  { text: "JavaScript", position: [3, 1, -1] },
  { text: "GitHub", position: [-3, -1, 1] }
];

function SkillText({ text, position }) {
  const font = useLoader(FontLoader, robotoFont); // Load font

  return (
    <mesh position={position}>
      <textGeometry args={[text, { font, size: 0.5, height: 0.1 }]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export default function Skills() {
  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="h-[400px]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {skills.map((skill, index) => (
            <SkillText key={index} text={skill.text} position={skill.position} />
          ))}
          <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
