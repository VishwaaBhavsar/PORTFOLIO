// Contact.jsx
import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      // Example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      
      // Reset form
      formRef.current.reset();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      if (submitStatus?.success) {
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to discussing new opportunities. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="bg-indigo-700 text-white p-8 lg:p-10 lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-indigo-200 mb-8">Have a question or want to work together? I'd love to hear from you.</p>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:your.email@example.com" className="text-indigo-200 hover:text-white transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+11234567890" className="text-indigo-200 hover:text-white transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-indigo-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <p className="mb-4 font-medium">Connect with me</p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                     className="bg-indigo-800 p-3 rounded-full hover:bg-indigo-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                     className="bg-indigo-800 p-3 rounded-full hover:bg-indigo-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                     className="bg-indigo-800 p-3 rounded-full hover:bg-indigo-900 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 lg:p-10 lg:col-span-3">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
              
              {submitStatus && (
                <div 
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 
                    'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Hello, I'd like to discuss a project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
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
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;