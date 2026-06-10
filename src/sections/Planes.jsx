import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import tvBlanca from "../assets/imagenes/iconos/tvBlanca.png";
import wifiBlanco from "../assets/imagenes/iconos/wifiBLanco.png";
import tvMorada from "../assets/imagenes/iconos/tvMorada.png";
import wifiMorado from "../assets/imagenes/iconos/wifiMorado.png";
import wspBlanco from "../assets/imagenes/whatsapp_blanco.png";

import {
    internetPlanes,
    internetTvPlanes,
} from "../assets/data/planes";

export default function Planes() {
    const [activeTab, setActiveTab] =
        useState("internet");

    const planes =
        activeTab === "internet"
            ? internetPlanes
            : internetTvPlanes;


    return (
        <section id="planes" className="bg-[#FFFFFF] py-12 sm:py-16 lg:py-20 px-4">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-primary mb-8 font-extrabold">
                PLANES CONECTY
            </h2>

            <div className="max-w-6xl mx-auto">

                {/* MENU SUPERIOR */}
                <div className="flex justify-center mb-10">
                    <div className="relative bg-linear-to-r from-primary to-secondary p-1 rounded-[30px] flex w-full max-w-125 shadow-md">

                        {/* INTERNET */}
                        <button
                            onClick={() =>
                                setActiveTab("internet")
                            }
                            className="relative flex-1 px-3 sm:px-8 py-3 rounded-full font-bold uppercase z-10 cursor-pointer"
                        >
                            {activeTab === "internet" && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white rounded-full"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                />
                            )}

                            <span
                                className={`relative flex items-center gap-2 transition-colors duration-300 font-medium justify-center
                                    ${activeTab === "internet"
                                        ? "text-primary"
                                        : "text-white"
                                    }`}
                            >
                                <img
                                    src={
                                        activeTab === "internet"
                                            ? wifiMorado
                                            : wifiBlanco
                                    }
                                    alt="wifi"
                                    className="w-5"
                                />
                                Internet
                            </span>
                        </button>

                        {/* INTERNET + TV */}
                        <button
                            onClick={() =>
                                setActiveTab("internet-tv")
                            }
                            className="relative flex-1 px-3 sm:px-8 py-3 rounded-full font-bold uppercase z-10 cursor-pointer"
                        >
                            {activeTab ===
                                "internet-tv" && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white rounded-full"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                    />
                                )}

                            <span
                                className={`relative flex items-center justify-center gap-1 sm:gap-2 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base
                                    ${activeTab ===
                                        "internet-tv"
                                        ? "text-primary"
                                        : "text-white"
                                    }`}
                            >
                                <img
                                    src={
                                        activeTab === "internet-tv"
                                            ? wifiMorado
                                            : wifiBlanco
                                    }
                                    alt="wifi"
                                    className="w-5"
                                />

                                Internet +

                                <img
                                    src={
                                        activeTab === "internet-tv"
                                            ? tvMorada
                                            : tvBlanca
                                    }
                                    alt="tv"
                                    className="w-5"
                                />

                                TV
                            </span>
                        </button>
                    </div>
                </div>

                {/* CARDS */}
                <div className="bg-[#FFFFFF]">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-5 md:p-0"
                        >
                            {planes.map((plan) => (
                                <motion.div
                                    key={plan.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.95,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                    }}
                                    className="bg-[#FFFFFF] rounded-[30px] shadow-md border border-gray-200 overflow-hidden"
                                >
                                    <div className="p-4 sm:p-5">

                                        {/* TITULO */}
                                        <h3 className="text-secondary text-center uppercase font-medium text-lg sm:text-xl mb-3">
                                            {activeTab === "internet"
                                                ? "Internet"
                                                : "Internet + TV"}
                                        </h3>

                                        {/* VELOCIDAD */}
                                        <div className="text-center">
                                            <h2 className="text-[65px] sm:text-[80px] lg:text-[100px] font-extrabold text-primary leading-none">
                                                {plan.velocidad}
                                            </h2>

                                            <div className="flex justify-center items-center gap-2">
                                                <span className="bg-secondary text-white text-xs sm:text-sm px-4 sm:px-7 py-1 rounded-full font-semibold">
                                                    Mbps
                                                </span>

                                                <span className="text-secondary text-sm font-semibold">
                                                    de Velocidad
                                                </span>
                                            </div>
                                        </div>

                                        {/* INCLUDE */}
                                        <div className="border-2 border-secondary rounded-[20px] mt-5 overflow-hidden">

                                            <div className="bg-secondary p-3 text-center">
                                                <h4 className="font-semibold text-primary text-xl">
                                                    Incluye:
                                                </h4>

                                                <div className="flex items-center justify-center py-6">
                                                    {plan.incluye.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center"
                                                        >
                                                            <motion.img
                                                                src={item}
                                                                alt="incluye"
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.9,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                }}
                                                                className={`
                                                                    object-contain transition-all
                                                                    ${activeTab === "internet"
                                                                        ? "w-20 sm:w-24 lg:w-25"
                                                                        : index === 0
                                                                            ? "w-14 sm:w-18"
                                                                            : "w-14 sm:w-18"
                                                                    }
                                                                `}
                                                            />

                                                            {/* símbolo + */}
                                                            {index <
                                                                plan.incluye.length - 1 && (
                                                                    <span className="text-primary text-3xl font-bold mx-2">
                                                                        +
                                                                    </span>
                                                                )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <p
                                                    className={`
                                                        text-[10px] text-secondary min-h-8 pt-1 pb-3
                                                        ${!plan.regular && "invisible"}
                                                    `}
                                                >
                                                    PRECIO REGULAR:
                                                    <span className="line-through ml-2 text-lg">
                                                        S/. {plan.regular}.00
                                                    </span>
                                                </p>

                                                {/* PRECIO */}
                                                <div className="flex justify-center items-end">
                                                    <span className="text-[22px] text-primary mr-2">
                                                        s/.
                                                    </span>

                                                    <span className="text-[55px] sm:text-[70px] lg:text-[80px] text-primary leading-none">
                                                        {
                                                            plan.precio
                                                        }
                                                    </span>

                                                    <span className="text-primary text-2xl mb-2">
                                                        .00
                                                    </span>
                                                </div>
                                            </div>

                                            {/* PROMO */}
                                            <div
                                                className={`
                                                    border-t border-secondary text-center
                                                    text-secondary font-bold py-1 min-h-8.5
                                                    flex items-center justify-center
                                                    ${!plan.promo && "invisible"}
                                                `}
                                            >
                                                {plan.promo}
                                            </div>
                                        </div>

                                        {/* BOTON */}
                                        <button
                                            onClick={() => {
                                                const mensaje = `
                                                    Hola, quiero adquirir el plan:

                                                    📶 Velocidad: ${plan.velocidad} Mbps
                                                    💰 Precio: S/. ${plan.precio}.00
                                                    📦 Tipo: ${activeTab === "internet"
                                                        ? "Internet"
                                                        : "Internet + TV"
                                                    }
                                                    `;

                                                window.open(
                                                    `https://wa.me/51944972519?text=${encodeURIComponent(
                                                        mensaje
                                                    )}`,
                                                    "_blank"
                                                );
                                            }}
                                            className="w-full mt-4 bg-primary text-white rounded-2xl py-3 sm:py-4 flex items-center justify-center gap-2 font-bold text-sm sm:text-base uppercase transition hover:scale-[1.02] cursor-pointer"
                                        >
                                            <img src={wspBlanco} alt="" className="w-6"/>
                                            Quiero mi plan
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* FOOTER */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-primary text-sm sm:text-base font-extrabold mt-8 uppercase bg-[#FFFFFF] rounded-[30px] shadow-md p-3"
                    >
                        ¡Instalación Gratis!
                    </motion.p>
                </div>
            </div>
        </section>
    );
}