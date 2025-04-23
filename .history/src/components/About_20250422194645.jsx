import React from 'react'

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-16 px-4 md:px-16 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className=" h-10 w-10  flex items-center justify-center mr-4">
            <span className="text-white text-xl">👤</span>
          </div>
          <h1 className="text-3xl font-bold">About <span className="text-gray-500">Me</span></h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
              <img 
                src="/api/placeholder/400/500" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-blue-600 text-white p-4 rounded-md mb-6 inline-block">
              <h2 className="text-2xl font-bold">I'm Jigar</h2>
              <p className="font-medium">Full Stack Developer</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-md mb-6">
              <p className="leading-relaxed">
                I am a Full-Stack developer based in Pune, India. I am an Information Technology 
                undergraduate from SPPU. I am very passionate about improving my coding skills 
                & developing applications & websites. I build WebApps and Websites using MERN 
                Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
              </p>
            </div>

            <div className="mb-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-md inline-block mb-3">
                <p>Email: jigarsable21@gmail.com</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-md inline-block">
                <p>Place: Pune, India - 412206</p>
              </div>
            </div>

            <a 
              href="/" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md inline-flex items-center transition duration-300"
            >
              Resume
              <span className="ml-1">&#8250;</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
