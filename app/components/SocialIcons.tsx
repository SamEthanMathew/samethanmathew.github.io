import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a 
        href="https://www.linkedin.com/in/sam-mathew-1a9778254/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={32} className="hover:scale-110 transition-transform duration-300" />
      </a>
      <a 
        href="mailto:semathew@andrew.cmu.edu"
        className="text-white hover:text-blue-300 transition-colors duration-300"
        aria-label="Send Email"
      >
        <FaEnvelope size={32} className="hover:scale-110 transition-transform duration-300" />
      </a>
      <a 
        href="https://github.com/SamEthanMathew" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <FaGithub size={32} className="hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
