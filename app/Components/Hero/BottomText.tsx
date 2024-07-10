"use client";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

const BottomText: React.FC = () => {
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
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        id="scrollingText"
        className="text-5xl font-semibold text-white inline-block"
        animate={controls}
      >
        <span className="inline-block">
          A space where <span className="text-indigo-300">children</span> can --
          and become change makers of tomorrow.&nbsp;
        </span>
        <span className="inline-block">
          A space where <span className="text-indigo-300">children</span> can --
          and become change makers of tomorrow.&nbsp;
        </span>
      </motion.div>
    </div>
  );
};

export default BottomText;
