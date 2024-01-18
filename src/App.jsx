import Header from "./components/Header"

function App() {

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('root').classList.add('dark')
  }

  return (
    <div className="w-screen h-screen bg-stone-200 dark:bg-stone-800">
      <Header />
    </div>
  )
}

export default App
