import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import WspBoton from "../components/WspBoton";
import Beneficios from "../sections/Beneficios";
import Hero from "../sections/Hero";
import Hero2 from "../sections/Hero2";
import Hero3 from "../sections/Hero3";
import Planes from "../sections/Planes";
import { useScroll } from "../hooks/useScroll";

const TOP_BAR_HEIGHT = 40;
const NAVBAR_HEIGHT = 72;

export default function Home() {
    const scrollY = useScroll();
    const offset = Math.min(scrollY, TOP_BAR_HEIGHT);

    return (
        <>
            <TopBar />
            <Navbar />

            <main
                className="transition-all duration-300"
                style={{
                    paddingTop: `${TOP_BAR_HEIGHT - offset + NAVBAR_HEIGHT}px`
                }}
            >
                <Hero />
                <Planes />
                <Hero2 />
                <Beneficios />
                <Faq />
                <Hero3 />
            </main>

            <Footer />
            <WspBoton />
        </>
    );
}