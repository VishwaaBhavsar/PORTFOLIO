const Experience = () => {
  return (
    <section id="experience" className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4">💼 Experience</h2>
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Generative AI Intern</h3>
          <p className="text-sm text-gray-500">
            <strong>Flaunch</strong> — <em>Remote</em> | Sep 2024 – Nov 2024
          </p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Designed and developed an AI-powered whiteboard leveraging LLaMA
            Multimodal, enabling seamless collaboration for teachers and
            students in solving graphical physics and math problems.
          </li>
          <li>
            Built domain-specific AI applications including:
            <ul className="list-disc list-inside ml-6">
              <li>A fine-tuned medical chatbot for disease diagnosis and Q&A</li>
              <li>A chat-with-PDF tool and quiz generator</li>
              <li>A resume matcher for job application optimization</li>
            </ul>
          </li>
          <li>
            Gained hands-on experience in:
            <ul className="list-disc list-inside ml-6">
              <li>Fine-tuning and integrating Large Language Models (LLMs)</li>
              <li>Building Retrieval-Augmented Generation (RAG) systems with vector databases</li>
              <li>Prompt engineering and multimodal AI development using advanced embeddings</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
