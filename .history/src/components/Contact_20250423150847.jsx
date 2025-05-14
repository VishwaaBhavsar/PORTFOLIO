import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your actual EmailJS service, template, and user IDs
    emailjs.sendForm(
      'service_90qoy37', 
      'template_ok5n3gh', 
      form.current, 
      'ObN_wKqBQp3ZaRTPt'
    )
    .then((result) => {
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      form.current.reset();
    })
    .catch((error) => {
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    })
    .finally(() => {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div className="bg-gray-50">
      <section id="contact" className="py-20 px-4 md:px-16 max-w-6xl mx-auto">
        {/* Header with icon and title */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white text-xl">✉️</span>
          </div>
          <h1 className="text-4xl font-bold text-center">
            Contact <span className="text-gray-600">Me</span>
          </h1>
          <div className="h-1 w-24 bg-gray-600 mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info Cards */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Email</h3>
                </div>
              </div>
              <p className="text-gray-600 ml-2">vishwaa0606@gmail.com</p>
              <a 
                href="mailto:vishwaa0606@gmail.com" 
                className="inline-flex items-center mt-4 text-gray-600 hover:text-gray-800 font-medium"
              >
                Send Email
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Location</h3>
                </div>
              </div>
              <p className="text-gray-600 ml-2">Anand, India - 388001</p>
              <a 
                href="https://maps.google.com/?q=Anand,Gujarat,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-gray-600 hover:text-gray-800 font-medium"
              >
                View on Map
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Social Media Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Connect</h3>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/VishwaaBhavsar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/vishwaa-bhavsar-827907251/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:vishwaa0606@gmail.com" 
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-xl p-8 transition duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-5 rounded-lg mb-6 inline-block shadow-md">
                <h2 className="text-2xl font-bold">Get In Touch</h2>
                <p className="font-medium text-gray-200">Send me a message</p>
              </div>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="from_name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="reply_to" className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="reply_to"
                      name="reply_to"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${isSubmitting ? 'bg-gray-500' : 'bg-gray-700 hover:bg-gray-800'} text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-z-90 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;