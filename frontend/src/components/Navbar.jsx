import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-saudi-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <span className="text-2xl font-bold">🚗</span>
            <span className="text-xl font-bold hidden sm:inline">لوحات السيارات</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="hover:text-saudi-light transition">
              الرئيسية
            </Link>
            <Link to="/templates" className="hover:text-saudi-light transition">
              التصاميم
            </Link>
            <Link to="/admin" className="hover:text-saudi-light transition">
              لوحة التحكم
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-saudi-light rounded">
              الرئيسية
            </Link>
            <Link to="/templates" className="block px-4 py-2 hover:bg-saudi-light rounded">
              التصاميم
            </Link>
            <Link to="/admin" className="block px-4 py-2 hover:bg-saudi-light rounded">
              لوحة التحكم
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
