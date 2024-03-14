import { useState, useEffect } from "react"

function Header() {
  const [isMobile, setMobile] = useState(false)

  // check window size on load to show mobile version of name for smaller screens
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 640) {
        setMobile(false)
      } else {
        setMobile(true)
      }
    }

    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  return (
    <header className="flex flex-row justify-between items-center lowercase md:text-lg bg-slate-50 px-6 py-4 rounded-md smooth-shadow">
      <h1 className="hover:cursor-default font-extrabold">{isMobile ? "nooa p." : "nooa peltokangas"}</h1>
      <nav className="flex flex-row gap-x-2 md:gap-x-8 font-semibold md:text-lg">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
      </nav>
    </header>
  )
}

export default Header
