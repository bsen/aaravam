"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const HeroStudentsGalary = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const imageVariants = {
    hidden: (i: number) => ({
      x: i * -20,
      y: i * -20,
      zIndex: 3 - i,
    }),
    visible: (i: number) => ({
      x: i * 60,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.2,
      },
    }),
  };

  const images = [
    "/Home/Students/1.png",
    "/Home/Students/1.png",
    "/Home/Students/1.png",
    "/Home/Students/1.png",
  ];

  return (
    <div
      ref={containerRef}
      className="h-screen bg-orange-600 flex justify-center items-center overflow-hidden"
    >
      <div className="relative w-[60vh] h-[60vh] -left-16">
        {images.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            className="absolute top-0 left-0 w-full h-full object-contain"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroStudentsGalary;
