import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

function Toggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.getElementById('root').classList.add('dark')
      setIsDark(true)
    }
  }, [])

  function handleClick() {
    if (isDark) {
      setIsDark(false)
      document.getElementById('root').classList.remove('dark')
    } else {
      setIsDark(true)
      document.getElementById('root').classList.add('dark')
    }
  }

  return (
    <div onClick={handleClick} className="hover:cursor-pointer">
      <Moon className={isDark ? 'opacity-0' : 'opacity-100'} />
      <Sun className={'-mt-6 ' + (isDark ? 'opacity-100' : 'opacity-0')} />
    </div>
  )
}

function Header() {
  return (
    <header className="flex flex-row justify-between max-w-3xl mx-auto lowercase">
      <h1 className="hover:cursor-default">Nooa P.</h1>
      <nav className="flex flex-row gap-x-4 md:gap-x-8">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
        <Toggle />
      </nav>
    </header>
  )
}

export default Header