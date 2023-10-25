import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar'
import h1 from "../assests/c2.jpg";
import Destination from '../components/Destination/Destination';
import Trip from '../components/Trip/Trip';
import Footer from '../components/Footer/Footer';
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={h1}
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        buttonText="Travel Plan"
        url="/contact"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}


export default Home;