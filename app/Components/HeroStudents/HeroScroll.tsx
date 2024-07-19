"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const images = [
    "/Home/Students/1.png",
    "/Home/Students/1.png",
    "/Home/Students/1.png",
    "/Home/Students/1.png",
    "/Home/Students/1.png",
    "/Home/Students/1.png",
  ];

  const xPos = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden bg-orange-600 flex items-center"
    >
      <motion.div style={{ x: xPos }} className="flex gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Student ${index + 1}`}
            className="h-[60vh] w-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroScroll;
