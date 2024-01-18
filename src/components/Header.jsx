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

  if (isDark) {
    return <Sun onClick={handleClick}/>
  } else {
    return <Moon onClick={handleClick}/>
  }
}

function Header() {
  return (
    <header className="flex flex-row">
      <h1>Nooa Peltokangas</h1>
      <nav>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
        <Toggle />
      </nav>
    </header>
  )
}

export default Header