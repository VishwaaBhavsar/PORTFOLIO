import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50 " id>
      {/* About Section */}
      <section className="py-20 px-4 md:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse">
            <span className="text-white text-xl">👤</span>
          </div>
          <h1 className="text-4xl font-bold text-black text-center">About <span className="text-gray-600">Me</span></h1>
          <div className="h-1 w-24 bg-gray-600 mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Image with hover effects */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transition duration-300 hover:shadow-2xl transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="/vish.jpg"
                  alt="Profile"
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
                  <p className="text-white font-medium text-lg">Vishwaa Bhavsar</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content with enhanced design */}
          <div className="w-full md:w-2/3">
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-5 rounded-lg mb-6 inline-block shadow-md">
              <h2 className="text-3xl font-bold">I'm Vishwaa</h2>
              <p className="font-medium text-gray-200">Full Stack Developer</p>
            </div>
            
            <div className="bg-white text-gray-700 p-8 rounded-lg mb-8 shadow-md border-l-4 border-gray-600">
              <p className="leading-relaxed text-lg">
                Hi, I'm <span className="font-semibold text-gray-700">Vishwaa Bhavsar</span>, a Full-Stack Developer based in Anand, India. Currently pursuing my undergraduate degree in Information Technology at CVM University (MBIT), I'm passionate about building robust web applications that make an impact.
              </p>
              <div className="my-4 border-l-2 border-gray-300 pl-4 italic text-gray-600">
                I specialize in creating seamless, scalable solutions with the MERN stack. From crafting user-friendly web apps to building clones of popular platforms, I love bringing ideas to life and continuously improving my skills.
              </div>
              <p className="leading-relaxed text-lg">
                My journey in tech is all about exploring new challenges, learning from every project, and turning complex problems into elegant solutions. If you're looking for someone who's eager to innovate, let's connect and create something amazing together!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Email</p>
                  <p className="font-semibold">vishwaa0606@gmail.com</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Location</p>
                  <p className="font-semibold">Anand, India - 388001</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/Vishwaa_Bhavsar.pdf"
                className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="bg-white border-2 border-gray-600 text-gray-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg inline-flex items-center transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About