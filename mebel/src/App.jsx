
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AboutUs from './pages/HomePage/components/AboutUs/AboutUs'
import AllFurniture from './pages/HomePage/components/AllFurniture/AllFurniture'
import OurFurniture from './pages/HomePage/components/OurFurniture/OurFurniture'
import Partners from './pages/HomePage/components/Partners/Partners'
import Section from './pages/HomePage/components/Section/Section'
import Subscribe from './pages/HomePage/components/Subscribe/Subscribe'

function App() {

  return (
    <>
      <Header/>
      <Section/>
      <Partners/>
      <AboutUs/>
      <OurFurniture/>
      <AllFurniture/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
