import { useState } from "react";
import { Mail, Github, Linkedin, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Try again later!");
    }
  };

  return (
    <motion.section
      id="contact"
      className="p-6 md:p-12 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900">📬 Let’s Connect</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Whether you have an idea, opportunity, or just want to vibe on AI, tech, or design — shoot your message below or hit me up on socials 👇
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="col-span-1 md:col-span-2 p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleChange}
            className="p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-black"
          />
          <textarea
            name="message"
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="col-span-1 md:col-span-2 p-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-2xl hover:bg-gray-900 transition col-span-1 md:col-span-2"
          >
            <SendHorizonal className="w-5 h-5" /> Send Message
          </button>
        </form>
      ) : (
        <motion.p
          className="text-green-600 font-medium text-lg mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Thank you! Your message has been sent. I’ll get back to you soon.
        </motion.p>
      )}

      <div className="mt-10 text-gray-700">
        <p className="mb-3 text-lg font-semibold">Or find me on:</p>
        <div className="flex flex-wrap gap-6 items-center">
          <a
            href="mailto:yourname@email.com"
            className="flex items-center space-x-2 text-black hover:underline"
          >
            <Mail className="w-5 h-5" /> <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center space-x-2 text-blue-700 hover:underline"
            rel="noreferrer"
          >
            <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="flex items-center space-x-2 text-gray-800 hover:underline"
            rel="noreferrer"
          >
            <Github className="w-5 h-5" /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
