import { useEffect } from 'react';
import TagCloud from 'tagcloud';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'GitHub', icon: <FaGithub /> }
];

export default function Skills() {
  useEffect(() => {
    const texts = skills.map(skill => skill.name);
    const container = document.querySelector('.tagcloud-container');
    TagCloud(container, texts, {
      radius: 150,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true
    });
  }, []);

  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="flex justify-center">
        <div className="tagcloud-container text-lg"></div>
      </div>
    </section>
  );
}
expo