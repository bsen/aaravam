"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Partner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const images = [
    "/Partners/4.png",
    "/Partners/1.png",
    "/Partners/2.png",
    "/Partners/3.png",
    "/Partners/4.png",
    "/Partners/1.png",
    "/Partners/3.png",
    "/Partners/2.png",
  ];

  const xPos = useTransform(scrollYProgress, [1, 0], ["0%", "-60%"]);

  return (
    <div
      style={{ backgroundColor: "#452E2E" }}
      ref={containerRef}
      className="h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      <div>
        <div className="text-[4.6rem] mb-6 text-center font-semibold text-white">
          Partner Schools
        </div>
        <motion.div style={{ x: xPos }} className="flex gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Student ${index + 1}`}
              className="h-[50vh] w-auto object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
