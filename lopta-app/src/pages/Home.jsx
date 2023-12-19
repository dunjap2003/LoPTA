import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Tab from '../components/PredictiveToolSection'
import DataInsights from '../components/DataInsights'
import Footer from '../components/Footer'
function Home() {
    return (
        <>
            <Navbar screen="Home" />
            <Hero />
            <About />
            <Tab />
            <DataInsights />
            <Footer />
        </>
    )
}

export default Home