import AboutUs from './components/AboutUs/AboutUs'
import AllFurniture from './components/AllFurniture/AllFurniture'
import OurCustomers from './components/OurCustomers/OurCustomers'
import OurFurniture from './components/OurFurniture/OurFurniture'
import Partners from './components/Partners/Partners'
import Section from './components/Section/Section'
import Subscribe from './components/Subscribe/Subscribe'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function HomePage() {

    return (
        <>
            <Header/>
            <Section />
            <Partners />
            <AboutUs />
            <OurFurniture />
            <AllFurniture />
            <OurCustomers />
            <Subscribe />
            <Footer/>
        </>
    )
}

export default HomePage


