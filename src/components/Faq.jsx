import { useRef, useEffect, useState } from "react";
import { faqData } from "../assets/data/faqs";
import logo from "../assets/imagenes/logo.png"

function Faq() {
    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section id="preguntas" className="pb-40 px-4 bg-[#FFFFFF]">
            <img src={logo} alt="" className="mx-auto h-30 md:h-45 mb-10"/>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-secondary">
                    PREGUNTAS FRECUENTES
                </h2>
                <p className="text-primary font-medium text-sm md:text-xl mt-2">
                    Obtén respuestas que te importan para conocer más a CONECTY
                </p>
            </div>

            <div className="max-w-3xl mx-auto mt-8 space-y-4">
                {faqData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition"
                    >
                        <button
                            onClick={() => toggle(item.id)}
                            className="w-full justify-center flex items-center p-4 gap-2 cursor-pointer"
                        >
                            <span className="text-purple-700">
                                {activeId === item.id ? "▼" : "▶"}
                            </span>
                            <span className="text-primary font-light text-sm md:text-xl uppercase">
                                {item.pregunta}
                            </span>
                        </button>

                        <div
                            className={`px-4 text-primary text-sm md:text-base overflow-hidden transition-all duration-300 ease-in-out ${activeId === item.id ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                                }`}
                        >
                            {item.respuesta}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;