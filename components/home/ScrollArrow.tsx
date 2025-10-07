"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ScrollArrow() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    function handleScroll() {
      // En tepedeyse oku göster, değilse gizle
      setShowArrow(window.scrollY < 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showArrow ? (
    <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 z-50 pointer-events-none">
      <IoIosArrowDown className="w-10 h-10 animate-bounce opacity-80 text-primary" />
    </div>
  ) : null;
}
