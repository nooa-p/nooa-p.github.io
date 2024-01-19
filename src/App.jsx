import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-screen h-screen bg-stone-200 dark:bg-zinc-900 text-zinc-900 dark:text-stone-200 pt-8 transition-colors duration-150 ease-in px-4 motion-reduce:transition-none">
      <Header />
      <main>
        <Intro />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
