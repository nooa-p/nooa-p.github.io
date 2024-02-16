import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

function Toggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // check user color scheme preference on page load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.getElementsByTagName('html')[0].classList.add('dark')
      setIsDark(true)
    }
  }, [])

  // handle clicking color scheme toggle
  function handleClick() {
    if (isDark) {
      setIsDark(false)
      document.getElementsByTagName('html')[0].classList.remove('dark')
    } else {
      setIsDark(true)
      document.getElementsByTagName('html')[0].classList.add('dark')
    }
  }

  return (
    <div onClick={handleClick} className="hover:cursor-pointer self-center" tabIndex={0}>
      <Moon className="opacity-100 dark:opacity-0 transition-opacity ease-in duration-150 motion-reduce:transition-none" />
      <Sun className="-mt-6 opacity-0 dark:opacity-100 transition-opacity ease-in duration-150 motion-reduce:transition-none" />
    </div>
  )
}

function Header() {
  return (
    <header className="flex flex-row justify-between max-w-3xl mx-auto lowercase md:text-lg">
      <h1 className="hover:cursor-default font-extrabold">Nooa P.</h1>
      <nav className="flex flex-row gap-x-4 md:gap-x-8 font-semibold">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
        <Toggle />
      </nav>
    </header>
  )
}

export default Header