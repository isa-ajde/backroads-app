import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tour from './components/Tour'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Hero />
      <Services />
      <Tour />
      <About />
      <Footer />
    </div>
  )
}

export default App
