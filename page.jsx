export default function ProjectPage({ params }) {
    const projectId = params.id;
  
    const projects = {
      "ecommerce-platform": {
        title: "E-Commerce Platform",
        description:
          "Built a scalable e-commerce platform with React and Node.js, handling over 10,000 daily transactions.",
        fullDescription:
          "This comprehensive e-commerce platform was designed to handle high-volume transactions with real-time inventory management, secure payment processing, and advanced analytics. The system includes user authentication, product catalog management, shopping cart functionality, order processing, and administrative dashboards.",
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Stripe API",
          "AWS",
        ],
        features: [
          "Real-time inventory management",
          "Secure payment processing with Stripe",
          "Advanced analytics dashboard",
          "User authentication and profiles",
          "Order tracking and management",
          "Admin panel for product management",
        ],
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&auto=format&q=80",
      },
      "ai-chat-assistant": {
        title: "AI Chat Assistant",
        description:
          "Developed an intelligent chatbot using OpenAI API and natural language processing.",
        fullDescription:
          "An intelligent chatbot solution that leverages OpenAI's GPT API to provide customer support, product recommendations, and general assistance. The system integrates with existing CRM platforms and provides analytics on customer interactions and satisfaction.",
        technologies: [
          "React",
          "Node.js",
          "OpenAI API",
          "MongoDB",
          "Socket.io",
          "Express",
        ],
        features: [
          "Natural language understanding",
          "Product recommendation engine",
          "CRM system integration",
          "Real-time chat interface",
          "Analytics and reporting",
          "Multi-language support",
        ],
        image:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop&auto=format&q=80",
      },
      "task-management-app": {
        title: "Task Management App",
        description:
          "Created a collaborative task management application with real-time updates and team collaboration features.",
        fullDescription:
          "A comprehensive task management solution designed for teams of all sizes. Features real-time collaboration, project tracking, time management, and reporting capabilities. Built with modern web technologies to ensure fast performance and seamless user experience.",
        technologies: [
          "React",
          "Firebase",
          "Material-UI",
          "Node.js",
          "Express",
          "WebRTC",
        ],
        features: [
          "Real-time collaboration",
          "Project and task tracking",
          "Team management",
          "Time tracking and reporting",
          "File sharing and comments",
          "Mobile responsive design",
        ],
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&auto=format&q=80",
      },
    };
  
    const project = projects[projectId];
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            background: white;
            color: #333;
            line-height: 1.6;
          }
          
          .header {
            background: white;
            border-bottom: 1px solid #f0f0f0;
            padding: 1rem 0;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            font-weight: bold;
            font-size: 1.25rem;
            color: black;
          }
          
          .nav {
            display: flex;
            gap: 2rem;
          }
          
          .nav a {
            color: #666;
            text-decoration: none;
            transition: color 0.3s;
          }
          
          .nav a:hover {
            color: black;
          }
          
          .main {
            max-width: 1000px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
          }
          
          .back-link {
            color: #2563eb;
            text-decoration: none;
            font-size: 0.875rem;
            margin-bottom: 2rem;
            display: inline-block;
          }
          
          .project-header h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: black;
            margin-bottom: 1rem;
          }
          
          .project-description {
            font-size: 1.25rem;
            color: #666;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
          
          .project-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
          }
          
          .btn-primary, .btn-secondary {
            padding: 0.5rem 1.5rem;
            border-radius: 0.25rem;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s;
          }
          
          .btn-primary {
            background: black;
            color: white;
            border: none;
          }
          
          .btn-primary:hover {
            background: #333;
          }
          
          .btn-secondary {
            background: transparent;
            color: black;
            border: 1px solid black;
          }
          
          .btn-secondary:hover {
            background: black;
            color: white;
          }
          
          .project-image {
            width: 100%;
            height: 320px;
            object-fit: cover;
            border-radius: 0.5rem;
            margin-bottom: 3rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          
          .project-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
            margin-bottom: 3rem;
          }
          
          .content-main h2 {
            font-size: 1.5rem;
            font-weight: bold;
            color: black;
            margin-bottom: 1rem;
          }
          
          .content-main h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: black;
            margin-bottom: 1rem;
            margin-top: 1.5rem;
          }
          
          .content-main p {
            color: #555;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }
          
          .features-list {
            list-style: none;
            padding: 0;
          }
          
          .features-list li {
            color: #555;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: flex-start;
          }
          
          .features-list li::before {
            content: "•";
            color: #2563eb;
            margin-right: 0.5rem;
            margin-top: 0.1rem;
          }
          
          .sidebar h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: black;
            margin-bottom: 0.75rem;
          }
          
          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
          }
          
          .tech-tag {
            background: #f5f5f5;
            color: #555;
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.875rem;
          }
          
          .sidebar-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .sidebar-links a {
            color: #2563eb;
            text-decoration: underline;
          }
          
          @media (max-width: 768px) {
            .nav {
              display: none;
            }
            
            .project-content {
              grid-template-columns: 1fr;
            }
            
            .project-header h1 {
              font-size: 2rem;
            }
            
            .project-buttons {
              flex-direction: column;
            }
          }
        `}</style>
  
        <div>
          <header className="header">
            <div className="container">
              <div className="logo">Junhyeok Lee</div>
              <nav className="nav">
                <a href="/">HOME</a>
                <a href="/#projects">PROJECTS</a>
                <a href="/#contact">CONTACT</a>
              </nav>
            </div>
          </header>
  
          <main className="main">
            <a href="/" className="back-link">
              ← Back to Portfolio
            </a>
  
            <div className="project-header">
              <h1>{project.title}</h1>
              <p className="project-description">{project.description}</p>
  
              <div className="project-buttons">
                <a href="#" className="btn-primary">
                  View Live Demo
                </a>
                <a href="#" className="btn-secondary">
                  View on GitHub
                </a>
              </div>
            </div>
  
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
  
            <div className="project-content">
              <div className="content-main">
                <h2>About This Project</h2>
                <p>{project.fullDescription}</p>
  
                <h3>Key Features</h3>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
  
              <div className="sidebar">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
  
                <h3>Project Links</h3>
                <div className="sidebar-links">
                  <a href="#">Live Demo →</a>
                  <a href="#">GitHub Repository →</a>
                </div>
              </div>
            </div>
  
            <div
              style={{
                textAlign: "center",
                marginTop: "3rem",
                padding: "2rem",
                backgroundColor: "#f9fafb",
                borderRadius: "0.5rem",
              }}
            >
              <h3 style={{ marginBottom: "1rem", color: "black" }}>
                Interested in Working Together?
              </h3>
              <p style={{ marginBottom: "1.5rem", color: "#555" }}>
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
              <a href="/#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </main>
        </div>
      </>
    );
  }
  