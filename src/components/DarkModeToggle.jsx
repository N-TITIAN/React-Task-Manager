import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )