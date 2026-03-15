import Navbar from "./components/Navbar"
import { TypeAnimation } from "react-type-animation"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <StarsBackground className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <Navbar />
        <section className="flex flex-col items-center justify-center text-center mt-20">
          <h1 className="text-[var(--light-color)] mt-10 text-4xl font-bold">hi, I'm <span className="text-glow">Ana Clara</span></h1>
          <div className="text-typed mt-4">
            <TypeAnimation
              sequence={[
                'I am a front-end developer',
                1000,
                'I am a web designer',
                1000,
                'I am a artist',
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
          <div className="mt-6 h-1 w-96 bg-gradient-to-r from-transparent via-blue-800 to-transparent"></div>
          <p className="mt-4 font-medium text-2xl text-[var(--light-color)] max-w-2xl leading-relaxed">
            Passionate about creating beautiful and functional web experiences, transforming ideas into digital reality.
          </p>
        </section>
      </div>
    </div>
  )
}

export default App