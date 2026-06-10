import wsp from "../assets/imagenes/whatsapp_blanco.png";
import bg from "../assets/imagenes/heros/hero3.jpg"

function Hero3() {

  const mensaje = "Hola, quiero información sobre sus planes de internet";
  const url = `https://wa.me/51944972519?text=${encodeURIComponent(mensaje)}`;

  return (
    <section className="relative w-full py-10 md:py-0 md:h-80 flex items-center justify-center">

      {/* Imagen de fondo */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-wide">
          ¿LISTO PARA EL INTERNET DE VERDAD?
        </h1>

        <p className="text-gray-200 mt-2 md:mt-3 text-sm md:text-xl">
          Consulta tus planes y conéctate a una velocidad que no miente
        </p>

        {/* Botón */}
        <a
          href={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-secondary hover:shadow-[0_0_8px_4px_var(--color-secondary)] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-500 cursor-pointer"
        >
          <img src={wsp} alt="" className="h-5" />

          ¡QUIERO MI PLAN!
        </a>
    </div>
    </section >
  );
}
export default Hero3;