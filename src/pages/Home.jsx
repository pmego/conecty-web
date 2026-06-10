import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WspBoton from "../components/WspBoton";
import Beneficios from "../sections/Beneficios";
import Hero from "../sections/Hero";
import Hero2 from "../sections/Hero2";
import Hero3 from "../sections/Hero3";
import Planes from "../sections/Planes";


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Planes />
            <Hero2 />
            <Beneficios />
            <Faq />
            <Hero3 />
            <Footer />
            <WspBoton />
        </>
    )
}
