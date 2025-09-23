"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which logo to show based on theme
  const logoSrc =
    mounted && resolvedTheme === "dark" ? "/innoverdark.webp" : "/innover.png";

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col text-gray-400 items-center justify-center mb-4 text-[12px]">
          <h3 className="font-semibold text-2xl text-[#111928]">
            CONEXIONES INNOVER
          </h3>
          <p className="mt-1">Rif: J 50316437-9</p>
          <p className="mt-1">Innover.ca@gmail.com</p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Tu socio tecnológico en internet, innovación y conectividad sin
          límites.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
