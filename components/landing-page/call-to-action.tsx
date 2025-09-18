"use client";
import Image from "next/image";
import ContactFormButton from "./contact-form-button";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true }}
      id="contact"
      className="card my-20 relative overflow-hidden shadow-md"
    >
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Tu próxima gran conexión{" "}
            <span className="text-[#00eaff] dark:text-[#00eaff]">
              empieza aquí
            </span>
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Disfruta de Internet de alta velocidad, estable y sin límites con
            nuestra red de fibra óptica y radiofrecuencia. Conéctate mejor,
            trabaja más rápido y vive sin interrupciones.
          </p>

          <div>
            <ContactFormButton>Contrata tu plan hoy</ContactFormButton>
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
