import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import wsp from "../assets/imagenes/whatsapp_blanco.png";
import logo from "../assets/imagenes/logo.png";

const TOP_BAR_HEIGHT = 60;

function Navbar() {
    const [open, setOpen] = useState(false);
    const scrollY = useScroll();

    const offset = Math.min(scrollY, TOP_BAR_HEIGHT);

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <header
            className={`w-full fixed left-0 z-50 transition-all duration-300 ${scrollY > 10
                    ? "bg-white/90 backdrop-blur shadow-md"
                    : "bg-white shadow-sm"
                }`}
            style={{
                top: `${TOP_BAR_HEIGHT - offset}px`
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <a href="#">
                    <img src={logo} alt="" className="w-20 cursor-pointer" />
                </a>

                <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-secondary">
                    <a href="#planes" className="hover:text-primary transition duration-500">
                        PLANES
                    </a>
                    <a href="#elegirnos" className="hover:text-primary transition duration-500">
                        POR QUÉ ELEGIRNOS
                    </a>
                    <a href="#preguntas" className="hover:text-primary transition duration-500">
                        PREGUNTAS FRECUENTES
                    </a>
                </nav>

                <a
                    href="https://wa.me/51944972519?text=Hola%20,%20quiero%20información%20sobre%20sus%20planes%20de%20internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-1 text-sm md:text-base bg-secondary hover:shadow-[0_0_8px_1px_var(--color-secondary)] text-white px-7 py-3 rounded-full shadow-md transition-all duration-300 font-bold"
                >
                    <img src={wsp} alt="" className="w-6" />
                    ¡QUIERO MI PLAN!
                </a>

                <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1">
                    <span className="w-6 h-0.5 bg-secondary"></span>
                    <span className="w-6 h-0.5 bg-secondary"></span>
                    <span className="w-6 h-0.5 bg-secondary"></span>
                </button>
            </div>

            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-6" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col items-center gap-6 text-secondary font-medium">

                    <a href="#planes" onClick={closeMenu}>PLANES</a>
                    <a href="#elegirnos" onClick={closeMenu}>PORQUÉ ELEGIRNOS</a>
                    <a href="#preguntas" onClick={closeMenu}>PREGUNTAS FRECUENTES</a>

                    <a
                        href="https://wa.me/51944973155?text=Hola%20,%20quiero%20información%20sobre%20sus%20planes%20de%20internet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-secondary text-white px-6 py-3 rounded-full font-bold"
                    >
                        <img src={wsp} alt="" className="w-5" />
                        ¡QUIERO MI PLAN!
                    </a>

                </nav>
            </div>
        </header>
    );
}

export default Navbar;