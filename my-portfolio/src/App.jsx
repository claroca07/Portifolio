import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import { TypeAnimation } from "react-type-animation"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"

function App() {
  return (
    <div className="fundo">
      <div className="background relative min-h-screen">
        <StarsBackground className="absolute inset-0 z-0" />

        <div className="relative z-10 mx-5 sm:mx-10">
          <Navbar />
          <section className="banner flex flex-col items-center justify-center text-center mt-20">
            <div className="flex items-center mt-10 text-[var(--light-color)]">
              <span className="mr-1 text-xs">1</span><h2>&lt;p&gt;</h2><h1 className="mx-1 text-2xl sm:text-3xl md:text-4xl font-bold">hi, I'm <span className="text-glow">Ana Clara</span></h1><h2>&lt;/p&gt;</h2>
            </div>
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
            <div className="mt-6 h-1 w-64 sm:w-96 bg-gradient-to-r from-transparent via-blue-800 to-transparent"></div>
            <p className="mt-4 font-medium text-lg sm:text-2xl text-[var(--light-color)] max-w-2xl leading-relaxed">
              passionate about creating beautiful and functional web experiences, transforming ideas into digital reality.
            </p>
          </section>
          <About />
          <Skills />
        </div>

      </div>
    </div>

  )
}

export default App