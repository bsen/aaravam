"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroStudentsGalary = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const imageVariants = {
    hidden: (i: any) => ({
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 4 - i,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1,
      },
    }),
    visible: (i: any) => ({
      x: (i - 1.5) * 240,
      y: 0,
      scale: 1,
      zIndex: 4 - i,
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
      ref={ref}
      className="h-screen -mt-10 bg-orange-600 flex justify-center items-center overflow-hidden"
    >
      <div className="relative w-[60vh] h-[60vh]">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroStudentsGalary;
