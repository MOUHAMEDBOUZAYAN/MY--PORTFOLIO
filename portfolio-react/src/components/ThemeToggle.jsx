// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext'
import React from 'react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      aria-label={`Basculer vers le mode ${theme === 'light' ? 'sombre' : 'clair'}`}
      className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-500 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle