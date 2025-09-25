import type { Route } from "./+types/home";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { VantaBackground } from "../components/VantaBackground";
import SocialIcons from "../components/SocialIcons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sam Mathew - Portfolio" },
    { name: "description", content: "Computer Engineering and AI @ Carnegie Mellon University - Full Stack Developer & AI Engineer" },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <VantaBackground className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="animate-fade-in-up block">Hello, I'm</span>
            <span className="gradient-text animate-fade-in-up animate-delay-200 block">Sam Mathew</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animate-delay-400">
            Computer Engineering and AI @ Carnegie Mellon University
          </p>
          
          {/* Social Media Icons */}
          <div className="animate-fade-in-up animate-delay-600">
            <SocialIcons />
          </div>

          
          {/* Animated scroll indicator */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </VantaBackground>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I’m an aspiring engineer with a strong focus on Artificial Intelligence, Machine Learning, and Robotics. 
              My passion lies in building intelligent systems that bridge the gap between theory and real-world application.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I actively explore the intersections of ECE, CS, and AI, while contributing to open-source
              work and leading robotics initiatives. Beyond technical development, I enjoy mentoring students, 
              driving collaborative innovation, and sharing insights with the broader tech community.
              </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="flex justify-center">
                  <div className="w-75 h-75 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/images/pfp.jpg" 
                      alt="Sam Mathew" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Project 1 BizGrow */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">My Projects</h2>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 -gap-y-18">
            <ScrollAnimation>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">BizGrow — Gamified AI Micro-Loan Incubator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built a quests → XP/coins → eligibility funnel with deterministic scoring and admin review tools. Full stack app with auth, storage, and review workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">SQL</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://bizgrow-psi.vercel.app/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="https://github.com/SamEthanMathew/bizgrow" className="text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

           {/* Project 2 — Speech → ROS2 Motion Pipeline */}
           <ScrollAnimation>
             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
               <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Speech → ROS2 Motion Pipeline</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Converts free-form speech to structured JSON → ROS2 actions; validated multi-command sequences in RViz/TurtleBot and generalized to SO-100 arm with safer URDF loading.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">ROS2</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">RViz</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">URDF</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://drive.google.com/file/d/1E1LuNfbxKIevJ0KEDwhklV1Dars9kX3k/view?usp=sharing" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Video</a>
                  <a href="https://github.com/SamEthanMathew/speech-to-ros2" className="text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          {/* Project 3 — mtvg_TSP (Dubins TSP research) */}
          <ScrollAnimation>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Bounded-Suboptimal Algorithms for Dubins TSP
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Re-implemented core algorithms from the WAFR 2024 paper on Dubins-TSP, ran reproducibility experiments on benchmarks, and explored extensions for new variants.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Search Algorithms</span>
                   <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Dubins TSP</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Benchmarking</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/SamEthanMathew/mtvg_TSP" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
           {/* Project 4 — Helmet Compliance Detector */}
           <ScrollAnimation>
             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
               <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Helmet Compliance Detector</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Curated dataset and trained/exported ONNX; achieves ~35 FPS real-time detection with timestamped events on live streams.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">YOLOv8</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">OpenCV</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">ONNX</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">Python</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Get In Touch</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                I'm always interested in new opportunities and exciting projects. Let's connect!
              </p>
            </ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ScrollAnimation>
                <a href="mailto:semathew@andrew.cmu.edu" className="text-center block hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">semathew@andrew.cmu.edu</p>
                </a>
              </ScrollAnimation>
              <ScrollAnimation>
                <a href="https://github.com/SamEthanMathew" target="_blank" rel="noopener noreferrer" className="text-center block hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300">github.com/SamEthanMathew</p>
                </a>
              </ScrollAnimation>
              <ScrollAnimation>
                <a href="https://www.linkedin.com/in/sam-mathew-1a9778254/" target="_blank" rel="noopener noreferrer" className="text-center block hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300">https://www.linkedin.com/in/sam-mathew-1a9778254/</p>
                </a>
              </ScrollAnimation>
            </div>
            <ScrollAnimation>
              <a href="mailto:semathew@andrew.cmu.edu" className="btn-animated bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 inline-block">
                Send me an email
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2025 Sam Mathew. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
