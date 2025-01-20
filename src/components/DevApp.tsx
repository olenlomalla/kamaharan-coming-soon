import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components/ui/Logo'

export const DevApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo variant="horizontal" className="h-8 w-auto" />
          <Link
            to="/"
            className="text-sm font-medium text-gray-body hover:text-primary-default transition-colors"
          >
            View Public Site
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-title font-heading animate-fadeIn">
          Development Environment
        </h1>
        <p className="mt-4 text-gray-body animate-fadeIn">
          This is the protected development version of the application.
        </p>
      </main>
    </div>
  )
}