import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar";
import c2 from "../../assests/c2.avif";
import Footer from "../../components/Footer/Footer";
import ContactForm from "./ContactForm";
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={c2}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}


export default Contact;