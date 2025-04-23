import React from 'react'

const About = () => {
  return (
    <section className="flex flex-row items-start gap-8 p-8 max-w-6xl mx-auto">
      {/* Left side - Full Bitmoji */}
      <div className="w-1/3 flex justify-center">
        <img 
          className="w-64 h-auto object-contain" 
          src="/api/placeholder/240/400" 
          alt="Vishwaa Bhavsar Bitmoji" 
        />
      </div>
      
      {/* Right side - Your info and resume */}
      <div className="w-2/3 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Vishwaa Bhavsar</h2>
        
        <div className="space-y-2">
          <p className="text-lg text-gray-700">
            I'm a passionate developer with expertise in building modern web applications.
          </p>
          
          <div className="flex gap-4 py-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Contact Me
            </button>
            <a 
              href="/resume.pdf" 
              download 
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition flex items-center"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        
        {/* Resume Section */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Resume</h3>
          
          {/* Experience */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Experience</h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <h5 className="font-medium text-lg">Senior Frontend Developer</h5>
                  <span className="text-gray-500">2022 - Present</span>
                </div>
                <div className="text-blue-600 mb-2">Tech Company Inc.</div>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Led the development of responsive web applications using React</li>
                  <li>Improved site performance by 40% through code optimization</li>
                  <li>Collaborated with design team to implement UI/UX improvements</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <h5 className="font-medium text-lg">Web Developer</h5>
                  <span className="text-gray-500">2020 - 2022</span>
                </div>
                <div className="text-blue-600 mb-2">Digital Solutions LLC</div>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Developed and maintained client websites using JavaScript and CSS</li>
                  <li>Built custom CMS solutions for content management</li>
                  <li>Implemented responsive designs for mobile and desktop platforms</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Education</h4>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between">
                <h5 className="font-medium text-lg">Bachelor of Science in Computer Science</h5>
                <span className="text-gray-500">2016 - 2020</span>
              </div>
              <div className="text-blue-600">University Name</div>
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">CSS/Tailwind</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">UI/UX Design</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full">Git</span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About