export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional portfolio showcasing my skills, projects, and experience
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View Projects
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}