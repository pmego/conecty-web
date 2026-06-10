import tiktok from "../assets/imagenes/iconos/tiktok_morado.png";
import ig from "../assets/imagenes/iconos/instagram_morado.png";
import fb from "../assets/imagenes/iconos/facebook_morado.png";
import wsp from "../assets/imagenes/iconos/whatsapp_morado.png";

import logo from "../assets/imagenes/logo.png";

function Footer() {
    return (
        <footer className="w-full bg-gray-100">

            {/* Contenido principal */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">

                {/* Logo */}
                <div className="mb-7 md:mb-0">
                    <img
                        src={logo}
                        alt="Conecty"
                        className="h-15"
                    />
                </div>

                {/* Navegación */}
                <nav className="flex flex-wrap justify-center gap-6 text-primary text-sm font-medium tracking-wide">
                    <a href="#planes" className="hover:opacity-70 transition">
                        PLANES
                    </a>
                    <a href="#" className="hover:opacity-70 transition">
                        COBERTURA
                    </a>
                    <a href="#elegirnos" className="hover:opacity-70 transition">
                        PORQUÉ ELEGIRNOS
                    </a>
                    <a href="#preguntas" className="hover:opacity-70 transition">
                        PREGUNTAS FRECUENTES
                    </a>
                </nav>

                {/* Redes */}
                <div className="flex gap-3 mt-10 md:mt-0">

                    <a
                        href="https://www.tiktok.com/@tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition duration-300"
                    >
                        <img src={tiktok} className="h-8 w-8" />
                    </a>

                    <a
                        href="https://www.instagram.com/conecty.internet.hogar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition duration-300"
                    >
                        <img src={ig} className="h-8 w-8" />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61588925704814&sk=about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition duration-300"
                    >
                        <img src={fb} className="h-8 w-8" />
                    </a>

                    <a
                        href="https://wa.me/51944972519"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition duration-300"
                    >
                        <img src={wsp} className="h-8 w-8" />
                    </a>

                </div>
            </div>

            {/* Línea divisora */}
            <div className="w-full h-0.5 bg-secondary"></div>

            {/* Copyright */}
            <div className="text-center text-secondary text-sm py-4 tracking-wide font-poppins">
                © 2026 CONECTY. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;