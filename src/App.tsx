import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Programs from "./components/Programs"
import Donate from "./components/Donate"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Programs/>
      <Donate/>
      <Footer/>
    </div>
  )
}

export default App
