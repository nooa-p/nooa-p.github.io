function Header() {
  return (
    <header className="flex flex-row justify-between lowercase md:text-lg bg-slate-50 px-4 py-2 rounded-md">
      <h1 className="hover:cursor-default font-extrabold">Nooa P.</h1>
      <nav className="flex flex-row gap-x-4 md:gap-x-8 font-semibold">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header