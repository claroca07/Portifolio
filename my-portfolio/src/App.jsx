import Navbar from "./components/Navbar"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <StarsBackground className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <Navbar />
        <section className="flex justify-center">
        <h1 className="text-white mt-10 text-4xl font-bold">Hi, I'm <span className="text-glow">Ana Clara</span></h1>
        </section>
      </div>
    </div>
  )
}

export default App