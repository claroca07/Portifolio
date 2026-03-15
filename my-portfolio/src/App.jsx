import Navbar from "./components/Navbar"
import { TypeAnimation } from "react-type-animation"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <StarsBackground className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <Navbar />
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white mt-10 text-4xl font-bold">Hi, I'm <span className="text-glow">Ana Clara</span></h1>
          <div className="text-typed mt-4">
            <TypeAnimation
              sequence={[
                'I am a Front-end Developer',
                1000,
                'I am a Web Designer',
                1000,
                'I am a Artist',
                1000,
                'I am here to help you',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App