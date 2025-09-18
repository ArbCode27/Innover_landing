"use client";

import ProjectForm from "./project-form";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function StartProject() {
  const { resolvedTheme } = useTheme();

  // Function to load Tally embeds
  const loadTallyEmbeds = () => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds();
    }
  };

  // Load Tally embeds when component mounts or theme changes
  useEffect(() => {
    loadTallyEmbeds();

    // Add a class to the iframe's parent element based on the current theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const iframe = document.querySelector("iframe[data-tally-src]");
          if (iframe) {
            // Set a data attribute on the iframe that can be used in CSS
            iframe.setAttribute("data-theme", resolvedTheme || "light");

            // Try to access the iframe content if possible
            try {
              const iframeDoc =
                iframe.contentDocument || iframe.contentWindow?.document;
              if (iframeDoc && iframeDoc.documentElement) {
                iframeDoc.documentElement.setAttribute(
                  "data-theme",
                  resolvedTheme || "light"
                );
              }
            } catch (e) {
              console.log(
                "Cannot access iframe content due to same-origin policy"
              );
            }
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] pt-8">
      <div className="text-center pt-8">
        <h2 className="text-black dark:text-white text-3xl md:text-5xl font-medium">
          Hablemos de tu <span className="text-[#7A7FEE]">conexión</span>
          <br />
        </h2>
        <p className="max-w-[640px] container mx-auto mt-2 text-lg">
          Completa el formulario y uno de nuestros asesores se pondrá en
          contacto contigo.
        </p>
      </div>
      <ProjectForm />
    </div>
  );
}
