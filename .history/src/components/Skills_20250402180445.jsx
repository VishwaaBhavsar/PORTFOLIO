import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';

const skills = [
  { icon: <FaReact className="text-blue-400" />, position: [2, 2, 2] },
  { icon: <FaNodeJs className="text-green-500" />, position: [-2, 2, -2] },
  { icon: <FaHtml5 className="text-orange-500" />, position: [2, -2, -2] },
  { icon: <FaCss3Alt className="text-blue-500" />, position: [-2, -2, 2] },
  { icon: <FaJs className="text-yellow-500" />, position: [3, 1, -1] },
  { icon: <FaGithub className="text-gray-500" />, position: [-3, -1, 1] }
];

export default function Skills() {
  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="h-[400px]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {skills.map((skill, index) => (
            <mesh key={index} position={skill.position}>
              <textGeometry args={[skill.icon.props.className, { size: 1, height: 0.1 }]} />
              <meshStandardMaterial attach="material" color="white" />
            </mesh>
          ))}
          <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
