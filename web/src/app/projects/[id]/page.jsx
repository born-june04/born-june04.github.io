export default function ProjectPage({ params }) {
  const projectId = params.id;

  const projects = {
    'ecommerce-platform': {
      title: 'E-Commerce Platform',
      description: 'Built a scalable e-commerce platform with React and Node.js, handling over 10,000 daily transactions.',
      fullDescription: 'This comprehensive e-commerce platform was designed to handle high-volume transactions with real-time inventory management, secure payment processing, and advanced analytics. The system includes user authentication, product catalog management, shopping cart functionality, order processing, and administrative dashboards.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS'],
      features: [
        'Real-time inventory management',
        'Secure payment processing with Stripe',
        'Advanced analytics dashboard',
        'User authentication and profiles',
        'Order tracking and management',
        'Admin panel for product management'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&auto=format&q=80',
      liveUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/john-smith/ecommerce-platform'
    },
    'ai-chat-assistant': {
      title: 'AI Chat Assistant',
      description: 'Developed an intelligent chatbot using OpenAI API and natural language processing.',
      fullDescription: 'An intelligent chatbot solution that leverages OpenAI\'s GPT API to provide customer support, product recommendations, and general assistance. The system integrates with existing CRM platforms and provides analytics on customer interactions and satisfaction.',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Socket.io', 'Express'],
      features: [
        'Natural language understanding',
        'Product recommendation engine',
        'CRM system integration',
        'Real-time chat interface',
        'Analytics and reporting',
        'Multi-language support'
      ],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop&auto=format&q=80',
      liveUrl: 'https://chatbot-demo.example.com',
      githubUrl: 'https://github.com/john-smith/ai-chat-assistant'
    },
    'task-management-app': {
      title: 'Task Management App',
      description: 'Created a collaborative task management application with real-time updates and team collaboration features.',
      fullDescription: 'A comprehensive task management solution designed for teams of all sizes. Features real-time collaboration, project tracking, time management, and reporting capabilities. Built with modern web technologies to ensure fast performance and seamless user experience.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Node.js', 'Express', 'WebRTC'],
      features: [
        'Real-time collaboration',
        'Project and task tracking',
        'Team management',
        'Time tracking and reporting',
        'File sharing and comments',
        'Mobile responsive design'
      ],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&auto=format&q=80',
      liveUrl: 'https://taskmanager-demo.example.com',
      githubUrl: 'https://github.com/john-smith/task-management-app'
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Project Not Found</h1>
          <a href="/" className="text-blue-600 hover:text-blue-800 underline">
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-black">
              J-SMITH
            </div>
            <nav className="flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-black transition-colors">HOME</a>
              <a href="/#projects" className="text-gray-600 hover:text-black transition-colors">PROJECTS</a>
              <a href="/#contact" className="text-gray-600 hover:text-black transition-colors">CONTACT</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to Portfolio
          </a>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              View Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-black mb-4">About This Project</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            <h3 className="text-xl font-semibold text-black mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Project Links</h3>
              <div className="space-y-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 underline"
                >
                  Live Demo →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 underline"
                >
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-black mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(projects)
              .filter(([id]) => id !== projectId)
              .slice(0, 2)
              .map(([id, proj]) => (
                <a
                  key={id}
                  href={`/projects/${id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-black mb-2">{proj.title}</h4>
                  <p className="text-gray-600 text-sm">{proj.description}</p>
                </a>
              ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-black mb-4">Interested in Working Together?</h3>
          <p className="text-gray-700 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a
            href="/#contact"
            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </main>
    </div>
  );
}