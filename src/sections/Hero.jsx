import banner from "../assets/imagenes/hero.webp";
import wspBlanco from "../assets/imagenes/whatsapp_blanco.png";

function Hero() {
  const numero = "51987654321";

  const mensaje =
    "Hola 👋, quiero información sobre los planes de internet de Conecty.";

  return (
    <section className="w-full pt-21.5">
      <div className="relative">

        <img
          src={banner}
          alt="Hero conecty"
          className="
                w-full
                h-65
                sm:h-80
                md:h-auto
                object-cover
            "
        />
        {/* BOTÓN */}
        <a
          href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
                        absolute left-1/2 -translate-x-1/2

                        bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-16 xl:bottom-20

                        flex items-center gap-2
                        bg-primary text-white

                        px-5 py-2
                        sm:px-6 sm:py-2.5
                        md:px-8 md:py-3
                        lg:px-10

                        rounded-xl
                        font-bold

                        text-xs
                        sm:text-sm
                        md:text-base

                        transition-all duration-500
                        hover:scale-[1.02]
                        hover:-translate-y-1

                        cursor-pointer
                        whitespace-nowrap
                    "
        >
          <img
            src={wspBlanco}
            alt="WhatsApp"
            className="
                            w-4
                            sm:w-5
                            md:w-6
                        "
          />

          ¡QUIERO MI PLAN!
        </a>
      </div>
    </section>
  );
}

export default Hero;