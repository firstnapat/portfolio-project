interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 ${className}`}>
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </main>
  )
}

export default PageContainer