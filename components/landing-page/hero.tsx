"use client";
import Image from "next/image";
import ContactFormButton from "./contact-form-button";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const API_URL = "https://www.cloud.wispro.co/api/v1/clients";
  const API_KEY = "722b13d6-3a27-41ea-9937-f18b1931d71f";
  useEffect(() => {
    const clients = async () => {
      const res = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la petición");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    clients();
  });
  return (
    <motion.section
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true }}
      id="hero"
      className="card my-8 relative overflow-hidden shadow-md"
    >
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Internet que impulsa.
            <span className="block text-[#00eaff] dark:text-[#00eaff]">
              tu mundo
            </span>
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Conexiones rápidas, seguras y estables para que trabajes, estudies y
            disfrutes sin límites.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
          </div>
        </div>

        {/* Image - hidden on mobile, visible on md and up */}
        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <Image
            src="/purple-circle-wave-static.png"
            alt="Purple Wave"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </motion.section>
  );
}
