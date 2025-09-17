import Link from 'next/link'
import PageContainer from '@/components/PageContainer'

export default function Home() {
  return (
    <PageContainer>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Professional portfolio showcasing my skills, projects, and experience
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/work"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}