import Header from "./components/Header"

function App() {
  return (
    <div className="w-screen h-screen bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 pt-8 transition-colors duration-75 ease-in">
      <Header />
      <div id="about" className="">about</div>
      <div id="project">project</div>
      <div id="contact">contact</div>
    </div>
  )
}

export default App
