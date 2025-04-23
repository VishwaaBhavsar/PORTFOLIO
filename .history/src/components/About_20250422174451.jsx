import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen'>
    <section className="flex flex-row  gap-8 p-8 max-w-5xl mx-auto">
      {/* Left side - Full Bitmoji */}
      <div className="w-1/3 flex justify-center">
        <img 
          className="w-64 h-auto object-contain" 
          src="/api/placeholder/240/400" 
          alt="Vishwaa Bhavsar Bitmoji" 
        />
      </div>
      
      {/* Right side - Your info */}
      <div className="w-2/3 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Vishwaa Bhavsar</h2>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            I'm a passionate developer with expertise in building modern web applications. I focus on creating clean, efficient, and user-friendly experiences.
          </p>
          
          <p className="text-lg text-gray-700">
            With a background in [your background], I bring a unique perspective to every project I work on. I'm constantly learning and exploring new technologies to enhance my skill set.
          </p>
          
          <div className="pt-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">CSS/Tailwind</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">UI/UX</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">Node.js</span>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Contact Me
            </button>
            <a 
  href="/public/Vishwaa_Bhavsar.pdf" 
  download 
  className="px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-100 transition"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About