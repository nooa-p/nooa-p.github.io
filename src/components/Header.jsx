function Header() {
  return (
    <header className="flex flex-row justify-between items-center lowercase md:text-lg bg-slate-50 px-6 py-4 rounded-md smooth-shadow">
      <h1 className="hover:cursor-default font-extrabold">Nooa P.</h1>
      <nav className="flex flex-row gap-x-2 md:gap-x-8 font-semibold text-sm md:text-lg">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header