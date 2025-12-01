
import './App.css'
import Header from './components/Header/Header'
import AboutUs from './pages/HomePage/components/AboutUs/AboutUs'
import OurFurniture from './pages/HomePage/components/OurFurniture/OurFurniture'
import Partners from './pages/HomePage/components/Partners/Partners'
import Section from './pages/HomePage/components/Section/Section'

function App() {

  return (
    <>
      <Header/>
      <Section/>
      <Partners/>
      <AboutUs/>
      <OurFurniture/>
    </>
  )
}

export default App
