import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="max-w-3xl mx-auto mt-12 flex flex-col p-8 gap-4">
      <Header />
      <div className="bg-slate-50 px-6 py-4 rounded-md smooth-shadow">
        <Intro />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App
