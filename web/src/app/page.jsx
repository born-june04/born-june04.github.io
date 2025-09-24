export default function HomePage() {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "Built a scalable e-commerce platform with React and Node.js, handling over 10,000 daily transactions. Features include real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      link: "/projects/ecommerce-platform",
    },
    {
      id: "ai-chat-assistant",
      title: "AI Chat Assistant",
      description:
        "Developed an intelligent chatbot using OpenAI API and natural language processing. The system can handle customer inquiries, provide product recommendations, and integrate with existing CRM systems.",
      link: "/projects/ai-chat-assistant",
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description:
        "Created a collaborative task management application with real-time updates, team collaboration features, and advanced project tracking. Built with React, Firebase, and modern UI/UX principles.",
      link: "/projects/task-management-app",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-black">J-SMITH</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-black transition-colors"
              >
                PROJECTS
              </a>
              <a
                href="#journey"
                className="text-gray-600 hover:text-black transition-colors"
              >
                EXPERIENCE
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-black transition-colors"
              >
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-black mb-2">JOHN SMITH</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <span className="mr-2">💼</span>
                <span>Full Stack Developer @ Tech Solutions</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                With a strong background in software development, technical
                leadership, and product innovation, I excel at turning complex
                challenges into scalable, high-impact solutions— always staying
                ahead by leveraging the latest technologies and best practices.
              </p>

              <div className="flex items-center text-gray-600 mb-4">
                <span className="mr-2">📍</span>
                <span>San Francisco, California</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  Full Stack Developer
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  React
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  Node.js
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                  CONTACT ME
                </button>
                <button className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors">
                  VIEW RESUME
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  + more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Hi there! I'm John, Full Stack Developer at Tech Solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I am a Software Engineer focused on Web Development, Cloud
            Architecture, Scalable Applications, and technology that moves
            business forward.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          {projects.map((project, index) => (
            <div key={project.id} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🏆 {project.title}
              </h3>
              <p className="text-gray-700 mb-2 leading-relaxed">
                {project.description}{" "}
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Check project
                </a>
              </p>
            </div>
          ))}

          <p className="text-gray-700 mt-6">
            To get insight into how I can help your business, check out my
            complete{" "}
            <a
              href="/portfolio"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              portfolio
            </a>
            .
          </p>
        </section>

        {/* Professional Journey */}
        <section id="journey" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4">
            PROFESSIONAL JOURNEY
          </h2>
          <div className="space-y-2 text-gray-700">
            <div>- Full Stack Developer @ Tech Solutions · Ongoing</div>
            <div>
              - Senior Frontend Developer @ Digital Innovations · 2 years
            </div>
            <div>- Software Engineer @ StartupCorp · 1.5 years</div>
            <div>- Frontend Developer @ WebAgency · 1 year</div>
            <div>- Junior Developer @ CodeStudio · 8 months</div>
          </div>
        </section>

        {/* Academic Background */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4">
            ACADEMIC BACKGROUND
          </h2>
          <div className="space-y-2 text-gray-700">
            <div>- B.S. in Computer Science at Stanford University</div>
            <div>- M.S. in Software Engineering at UC Berkeley</div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4">LET'S CONNECT</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Explore my projects and read my articles to see my work in action.
            Feel free to contact me to discuss potential collaborations or to
            learn more about my experience and skills. Check out my portfolio or{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              book a call
            </a>
            .
          </p>
        </section>

        {/* Footer Social Links */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex justify-center items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.5 9c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                <path d="M17 7h-1.4l-.6-1.2c-.2-.4-.6-.8-1-.8h-2c-.4 0-.8.4-1 .8L10.4 7H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM16 15H9V9h1.4l.6-1.2c.2-.4.6-.8 1-.8h2c.4 0 .8.4 1 .8l.6 1.2H16v6z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
