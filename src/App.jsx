import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="max-w-3xl mx-auto">
      <Header />
        <Intro />
        <About />
        <Project />
        <Contact />
      <Footer />
    </main>
  )
}

export default App
