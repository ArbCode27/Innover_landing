"use client";

import Link from "next/link";
import type React from "react";

interface ContactFormButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContactFormButton({
  className = "",
  children,
}: ContactFormButtonProps) {
  return (
    <Link
      href="/start"
      className={className || "btn-primary text-black bg-[#00eaff]"}
    >
      {children || "Contáctanos"}
    </Link>
  );
}
