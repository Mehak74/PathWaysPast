import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar";
import a from "../../assests/a.jpg";
import Footer from "../../components/Footer/Footer";
import AboutUs from "./AboutUs";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={a}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}


export default About;