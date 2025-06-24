// import React from 'react';

// const Experience = () => {
//   return (
//     <div className="bg-gray-50">
//       <section id="experience" className="py-20 px-4 md:px-16 max-w-6xl mx-auto">
//         {/* Header with icon and title */}
//         <div className="flex flex-col items-center justify-center mb-12">
//           <div className="bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
//             <span className="text-white text-xl">💼</span>
//           </div>
//           <h1 className="text-4xl font-bold text-black text-center">
//             Work <span className="text-gray-600">Experience</span>
//           </h1>
//           <div className="h-1 w-24 bg-gray-600 mt-4 rounded-full"></div>
//         </div>

//         {/* Experience Card */}
//         <div className="bg-white rounded-xl shadow-xl p-8 transition duration-300 hover:shadow-2xl mb-8">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">Generative AI Intern</h3>
//               <p className="text-gray-600 font-medium">1M1B Foundation</p>
//             </div>
//             <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2 rounded-lg shadow-md mt-3 md:mt-0">
//               <p className="font-medium text-sm">Remote | Sep 2024 – Nov 2024</p>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <div className="flex items-start">
//               <div className="bg-gray-100 p-2 rounded-full mt-1 mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <p className="text-gray-700">
//                 Designed and developed an AI-powered whiteboard leveraging LLaMA Multimodal, enabling seamless collaboration for teachers and students in solving graphical physics and math problems.
//               </p>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-gray-100 p-2 rounded-full mt-1 mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div className="text-gray-700">
//                 <p>Built domain-specific AI applications including:</p>
//                 <ul className="ml-6 mt-2 space-y-2">
//                   <li className="flex items-center">
//                     <div className="bg-gray-100 p-1 rounded-full mr-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     A fine-tuned medical chatbot for disease diagnosis and Q&A
//                   </li>
//                   <li className="flex items-center">
//                     <div className="bg-gray-100 p-1 rounded-full mr-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     A quiz generator tool for educational content
//                   </li>
//                   <li className="flex items-center">
//                     <div className="bg-gray-100 p-1 rounded-full mr-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     A news summarizer application for condensing articles
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-gray-100 p-2 rounded-full mt-1 mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div className="text-gray-700">
//                 <p>Gained hands-on experience in:</p>
//                 <ul className="ml-6 mt-2 space-y-2">
//                   <li className="flex items-center">
//                     <div className="bg-gray-100 p-1 rounded-full mr-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Fine-tuning and integrating Large Language Models (LLMs)
//                   </li>
//                   <li className="flex items-center">
//                     <div className="bg-gray-100 p-1 rounded-full mr-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Document processing and text summarization workflows
//                   </li>
//                   <li className="flex items-center">
//                     <div className="bg-gray-100 p-1 rounded-full mr-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Prompt engineering and multimodal AI development using advanced embeddings
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Experience;