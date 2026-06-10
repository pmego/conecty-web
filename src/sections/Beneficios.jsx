import bg from "../assets/imagenes/beneficios/bg_beneficios.webp";

export default function Beneficios() {
    const cards = [
        {
            title: "FIBRA AL 100%",
            text: "Fibra óptica pura desde la calle hasta tu router. Sin cobre, sin compromisos, sin degradación a lo largo de la distancia.",
            position:
                "xl:top-[-10%] xl:left-1/2 xl:-translate-x-1/2",
        },
        {
            title: "EXPERIMENTA EL VERDADERO PODER",
            text: "Descarga parches pesados en segundos, transmite en vivo sin cortes y mantén tus MS al mínimo.",
            position:
                "xl:left-[-6%] xl:top-4/9 xl:-translate-y-1/2",
        },
        {
            title: "LATENCIA ULTRABAJA PARA JUEGOS",
            text: "En la competición, cada milisegundo cuenta. Mantén tu conexión estable y tus reflejos más rápidos.",
            position:
                "xl:right-[-6%] xl:top-4/9 xl:-translate-y-1/2",
        },
        {
            title: "RENDIMIENTO TOTAL, JUEGA 24/7",
            text: "Domina el mapa las 24 horas del día. Olvídate del lag al instante y mantén tu nivel competitivo.",
            position:
                "xl:bottom-[2%] xl:left-1/2 xl:-translate-x-1/2",
        },
    ];

    return (
        <section id="elegirnos" className="bg-[#FFFFFF] py-14 md:py-20 xl:py-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5">

                {/* MOBILE / TABLET */}
                <div className="xl:hidden flex flex-col items-center gap-6">

                    <img
                        src={bg}
                        alt="Gaming"
                        className="w-full max-w-3xl object-contain"
                    />

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-4xl
                                shadow-[0_8px_15px_rgba(0,0,0,0.15)]
                                w-full
                                max-w-xl
                                px-6 md:px-10
                                py-6
                                text-center
                            "
                        >
                            <h3 className="text-primary font-bold uppercase mb-2 text-sm md:text-base">
                                {card.title}
                            </h3>

                            <p className="text-primary text-sm md:text-base leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* DESKTOP */}
                <div className="hidden xl:block relative min-h-212.5">

                    <img
                        src={bg}
                        alt="Gaming"
                        className="absolute inset-0 mx-auto h-full object-contain z-10"
                    />

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`
                                absolute ${card.position}
                                bg-white rounded-4xl
                                shadow-[0_8px_15px_rgba(0,0,0,0.15)]
                                w-105
                                px-10 py-8
                                text-center
                                z-20
                            `}
                        >
                            <h3 className="text-primary font-bold uppercase mb-2 text-sm">
                                {card.title}
                            </h3>

                            <p className="text-primary text-sm leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}