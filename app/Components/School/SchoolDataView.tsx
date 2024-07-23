import { motion, useScroll, useTransform } from "framer-motion";

import React, { useRef } from "react";

const SchoolDataView = () => {
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
    <>
      <div
        style={{ backgroundColor: "#452E2E" }}
        className="w-full flex justify-between items-bottom h-screen"
      >
        <img src="/ct.png" className="h-screen" />
        <div className="text-[4rem] flex justify-center items-center text-center text-white font-semibold font-mono">
          Reinventing
          <br />
          Education Program
        </div>
        <img src="cu.png" className="h-[60%]" />
      </div>
      <div
        style={{ backgroundColor: "#FF9FC2" }}
        className="text-white text-center  text-[3rem]  h-screen w-full flex justify-center items-center"
      >
        <div className="w-[60%]">
          We bring educators together for a month and give them lifetime access
          to a community of like minded-individuals who believe in re-inventing
          education. If you want to explore the education sector and especially
          how you can innovate within it, then this program is for you!
        </div>
      </div>
      <div
        style={{ backgroundColor: "#B686B8" }}
        ref={containerRef}
        className="h-screen overflow-hidden flex items-center"
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
      <div className="text-white text-center  bg-orange-600 text-[3rem]  h-screen w-full flex justify-center items-center">
        <div className="w-[60%]">Coming Soon!</div>
      </div>
    </>
  );
};

export default SchoolDataView;
