import PageContainer from '@/components/PageContainer'

export default function Work() {
  const projects = [
    {
      title: "Project One",
      description: "A description of your first project with key features and technologies used.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      status: "Completed"
    },
    {
      title: "Project Two",
      description: "A description of your second project highlighting the problem it solves.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      status: "In Progress"
    },
    {
      title: "Project Three",
      description: "A description of your third project and its impact or achievements.",
      tech: ["Python", "Django", "React"],
      status: "Completed"
    }
  ]

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A showcase of projects I've built and contributed to
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      View Live
                    </button>
                    <button className="border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 px-4 py-2 rounded text-sm font-medium transition-colors">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in working together?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get In Touch
            </button>
          </div>
      </div>
    </PageContainer>
  )
}