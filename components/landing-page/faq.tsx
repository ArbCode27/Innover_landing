"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "¿Qué diferencia hay entre la fibra óptica y la radiofrecuencia?",
    answer:
      "La fibra óptica ofrece velocidades más altas y conexión más estable, ideal para hogares y empresas con gran demanda de internet. La radiofrecuencia permite acceso en zonas donde no llega la fibra, siendo más flexible para áreas rurales o difíciles de cubrir con cableado.",
  },
  {
    id: 2,
    question: "H¿En qué zonas está disponible el servicio de fibra óptica?",
    answer:
      "El servicio de fibra óptica está disponible principalmente en áreas urbanas y suburbanas con cobertura de infraestructura. Puedes consultar la disponibilidad exacta ingresando tu dirección en nuestro sitio web o contactando a nuestro equipo de ventas.",
  },
  {
    id: 3,
    question:
      "Si vivo en un área rural, ¿puedo contratar internet por radiofrecuencia?",
    answer:
      "Sí, el internet por radiofrecuencia está diseñado para zonas rurales y lugares donde la fibra óptica no llega, ofreciendo conexión estable y velocidades competitivas.",
  },
  {
    id: 4,
    question: "¿Qué velocidad de internet ofrecen los planes?",
    answer:
      "Ofrecemos distintos planes que se ajustan a tus necesidades, con velocidades desde [X Mbps] hasta [Y Mbps] tanto para fibra óptica como para radiofrecuencia. Puedes elegir el plan ideal según tu consumo y dispositivos conectados.",
  },
  {
    id: 5,
    question: "¿Puedo cambiar de plan si necesito más velocidad?",
    answer:
      "Sí, puedes actualizar o cambiar de plan en cualquier momento sin complicaciones. Nuestro equipo te guiará para ajustar tu servicio a tus necesidades.",
  },
  {
    id: 6,
    question: "¿El servicio incluye instalación y configuración?",
    answer:
      "Sí, todos nuestros planes incluyen instalación profesional y configuración del equipo, asegurando que tu conexión funcione correctamente desde el primer día.",
  },
];

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Preguntas frecuentes sobre tu
          <span className="block text-[#00eaff] dark:text-[#00eaff]">
            servicio de internet
          </span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Have questions about our services? Find answers to the most common
          questions and learn how our team can enhance your creative process.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b pb-4 border-gray-300 dark:border-gray-700"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openItem === faq.id ? "rotate-180 text-[#00eaff]" : ""
                  }`}
                />
              </button>
              {openItem === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="mt-2 text-gray-700 dark:text-gray-300"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
