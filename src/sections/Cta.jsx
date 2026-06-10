import cablesLeft from "../assets/imagenes/cableLeft.webp";
import cablesRight from "../assets/imagenes/cableRight.jpg";
import wsp from "../assets/imagenes/whatsapp_blanco.png";

function Cta() {

  const mensaje = "Hola, quiero información sobre sus planes de internet";
  const url = `https://wa.me/51944972519?text=${encodeURIComponent(mensaje)}`;

  return (
    <section className="relative w-full overflow-hidden h-full">

      {/* Fondo */}
      <div className="relative bg-primary py-8">

        {/* Cables izquierda */}
        {/* <img
          src={cablesLeft}
          alt=""
          className="absolute left-0 -top-10 object-contain pointer-events-none h-50"
        /> */}

        {/* Cables derecha */}
        {/* <img
          src={cablesRight}
          alt=""
          className="absolute right-0 top-0 h-full object-contain pointer-events-none"
        /> */}

        {/* Contenido */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Texto */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Mantente siempre conectado
            </h2>
            <p className="text-xl font-light opacity-90">
              EXIGE LA MEJOR VELOCIDAD DE RED!
            </p>
          </div>

          {/* Botón */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-secondary hover:shadow-[0_0_8px_1px_var(--color-secondary)] text-white px-7 py-3 rounded-full shadow-md transition-all duration-300 font-bold"
          >
            <img src={wsp} alt="" className="w-6" />
            ¡QUIERO MI PLAN!
          </a>

        </div>
      </div>
    </section>
  );
}

export default Cta;