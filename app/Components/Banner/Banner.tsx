"use client";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const controls = useAnimationControls();
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const textElement = document.getElementById("scrollingText");
    if (textElement) {
      setTextWidth(textElement.offsetWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (textWidth) {
      controls.start({
        x: -textWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [textWidth, controls]);

  return (
    <div className="min-h-screen w-full bg-orange-600 overflow-y-auto">
      <div className="min-h-screen w-full flex flex-col justify-between items-center px-4 py-8 md:py-12">
        <div></div>
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <div
            style={{ backgroundColor: "#452E2E" }}
            className="p-2 text-white gap-2 font-medium rounded-full flex justify-center items-center"
          >
            <div className="px-2 py-0.5 bg-orange-600 rounded-full">
              Educators
            </div>
            <div className="px-2 py-0.5  rounded-full">Schools</div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <img
              src="/Home/heroText.png"
              className="h-10 md:h-24"
              alt="Hero text"
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 md:gap-6">
                <motion.img
                  src="/Home/heroEye.png"
                  className="w-6 md:w-8"
                  alt="Hero eye"
                  animate={{
                    x: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src="/Home/heroEye.png"
                  className="w-6 md:w-8"
                  alt="Hero eye"
                  animate={{
                    x: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.img
                src="/Home/heroD.png"
                className="w-16 md:w-24"
                alt="Hero D"
                animate={{
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#452E2E" }}
            className="px-4 py-1 rounded-full text-lg md:text-xl font-semibold text-white/90 text-center"
          >
            PARTNER WITH US
          </div>
          <div>
            <img
              src="/Home/scrollButton.svg"
              className="mt-8 md:mt-16 h-12 md:h-16"
              alt="Scroll button"
            />
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <motion.div
            id="scrollingText"
            className="text-5xl font-semibold text-white inline-block"
            animate={controls}
          >
            <span className="inline-block">
              A space where <span className="text-indigo-300">children</span>{" "}
              can -- and become change makers of tomorrow.&nbsp;
            </span>
            <span className="inline-block">
              A space where <span className="text-indigo-300">children</span>{" "}
              can -- and become change makers of tomorrow.&nbsp;
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
