import { CircleDot, Layers, Rocket } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Diagnóstico",
    description:
      "Cuéntanos tus necesidades de conexión. Analizamos tu zona y te ofrecemos la mejor tecnología para tu hogar o negocio.",
    icon: CircleDot,
    color: "bg-[#8d4aef]",
  },
  {
    id: 2,
    title: "Instalación",
    description:
      "Implementamos soluciones de Internet confiables: fibra óptica para máxima velocidad y radiofrecuencia para llegar a más lugares.",
    icon: Layers,
    color: "bg-[#8d4aef]",
  },
  {
    id: 3,
    title: "Optimización",
    description:
      "Ponemos tu red en marcha, mejoramos su rendimiento y ampliamos tu cobertura a medida que tus necesidades crecen.",
    icon: Rocket,
    color: "bg-[#8d4aef]",
  },
];

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Conéctate al futuro de Internet
        <span className="block text-[#00eaff] dark:text-[#00eaff]">
          Fibra optica y Radio
        </span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Con nuestra red de fibra óptica y radiofrecuencia, disfruta de velocidad
        ultra rápida, estabilidad sin cortes y cobertura diseñada para llegar a
        donde otros no llegan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}
            >
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
