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
                src="" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3">
            <div className=" text-black p-4 rounded-md mb-6 inline-block">
              <h2 className="text-2xl font-bold">I'm Vishwaa</h2>
              <p className="font-medium">Full Stack Developer</p>
            </div>

            <div className="text-black p-6 rounded-md mb-6">
              <p className="leading-relaxed">
              Hi, I'm Vishwaa Bhavsar, a Full-Stack Developer based in Anand, India. Currently pursuing my undergraduate degree in Information Technology at CVM University (MBIT), I’m passionate about building robust web applications that make an impact.

I specialize in creating seamless, scalable solutions with the MERN stack. From crafting user-friendly web apps to building clones of popular platforms, I love bringing ideas to life and continuously improving my skills.

My journey in tech is all about exploring new challenges, learning from every project, and turning complex problems into elegant solutions. If you’re looking for someone who’s eager to innovate, let’s connect and create something amazing together!
              </p>
            </div>

            <div className="mb-4">
              <div className=" text-black px-4 py-1 rounded-md inline-block mb-3">
                <p><span className='text-gray-600'>Email:</span> vishwaa0606@gmail.com</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-black px-4  rounded-md inline-block">
                <p><span className='text-gray-600'>Place:</span> Anand, India - 388001</p>
              </div>
            </div>

            <a 
              href="/Vishwaa_Bhavsar.pdf" 
              className="bg-gray-600 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md inline-flex items-center transition duration-300"
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
