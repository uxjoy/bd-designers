"use client";

import { RiArrowUpLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bottom-4 w-12 h-12 bg-zinc-900 hover:bg-zinc-800 transition rounded-full flex items-center justify-center text-white shadow-lg z-10 cursor-pointer"
      aria-label="Back to top"
    >
      <RiArrowUpLine size={20} className="text-white" />
    </button>
  );
};

export default BackToTop;
