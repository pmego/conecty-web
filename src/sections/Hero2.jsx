import conectyTv from "../assets/imagenes/conectyTv.png";
import wifi from "../assets/imagenes/iconos/wifiBlanco.png";

import imgIzquierda from "../assets/imagenes/heros/imgIzquierda.webp"
import imgDerecha from "../assets/imagenes/heros/imgDerecha.webp"

export default function Hero2() {
    return (
        <section className="w-full">
            <div className="relative">

                {/* GRID */}
                <div className="grid md:grid-cols-2">

                    {/* IZQUIERDA */}
                    <div className="relative min-h-80 md:min-h-112.5">
                        <img
                            src={imgIzquierda}
                            alt="Conecty TV"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/45 md:bg-black/10 z-1" />

                        {/* CONTENIDO */}
                        <div className="relative z-10 h-full flex flex-col justify-center text-center px-6 text-white items-center md:items-end">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={conectyTv}
                                    alt="Conecty TV"
                                    className="w-32 md:w-40 mb-4"
                                />

                                <p className="text-xs md:text-sm tracking-wide max-w-75">
                                    Disfruta de tus canales favoritos
                                    sin cables molestos y con
                                    tus dispositivos favoritos.
                                </p>

                                <span className="text-sm md:text-lg font-light mt-2">
                                    + DE
                                </span>

                                <h2 className="text-secondary text-5xl md:text-7xl font-extrabold leading-none">
                                    140
                                </h2>

                                <p className="tracking-[0.3em] text-sm md:text-base">
                                    CANALES
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* DERECHA */}
                    <div className="relative min-h-80 md:min-h-120">
                        <img
                            src={imgDerecha}
                            alt="Wifi 6"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/45 md:bg-black/10 z-1" />

                        {/* CONTENIDO */}
                        <div className="relative z-10 h-full flex flex-col justify-center text-center px-6 items-center md:items-start">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={wifi}
                                    alt="Wifi"
                                    className="w-16 md:w-20 mb-8"
                                />

                                <p className="text-[10px] md:text-xs max-w-65 mb-4 text-white">
                                    Estabilidad total para videojuegos,
                                    trabajos y estudios sin interrupciones.
                                </p>

                                <h2 className="text-secondary text-5xl md:text-7xl font-extrabold leading-none mt-3">
                                    Wifi6
                                </h2>

                                <p className="tracking-[0.3em] text-sm md:text-base text-white">
                                    MEJOR CONEXIÓN
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* LINEA CENTRAL */}
                <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-white/90 -translate-x-1/2" />
            </div>
        </section>
    );
}