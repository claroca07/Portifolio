import Navbar from "./components/Navbar"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <StarsBackground className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  )
}

export default App