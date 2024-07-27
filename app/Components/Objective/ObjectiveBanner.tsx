import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    backgroundColor: "#B686B8",
    content: (
      <div className="flex items-end flex-col">
        <div className="text-[8rem] text-white font-semibold">Objectives</div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF9FC2",
    content: (
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-[3rem] font-semibold opacity-70"
          style={{ color: "#452E2E" }}
        >
          Communication
        </div>
        <div
          className="text-[5rem] font-semibold opacity-80"
          style={{ color: "#452E2E" }}
        >
          Student agency
        </div>
        <div className="text-[7rem] font-semibold" style={{ color: "#452E2E" }}>
          Collaboration
        </div>
        <div
          className="text-[5rem] font-semibold opacity-80"
          style={{ color: "#452E2E" }}
        >
          Student agency
        </div>
        <div
          className="text-[3rem] font-semibold opacity-70"
          style={{ color: "#452E2E" }}
        >
          Communication
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#B686B8",
    content: (
      <div className="flex items-end flex-col">
        <div className="text-[6rem] text-center text-white font-semibold">
          We Follow a framework called <br />
          <span style={{ color: "#452E2E" }}>create</span>
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#452E2E",
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-[15rem] text-white font-semibold relative overflow-hidden">
          <span className="absolute h-64 w-full top-1/2 -translate-y-1/2 bg-orange-500 animate-move-circle rounded-full"></span>
          <span className="relative z-10">CREATE</span>
        </div>
      </div>
    ),
  },

  {
    backgroundColor: "#B686B8",
    content: (
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[7rem] text-center text-white font-semibold">
          Want to get in touch?
        </div>
        <div
          style={{ backgroundColor: "#452E2E" }}
          onClick={() => {
            window.open("https://calendly.com/");
          }}
          className="text-white text-2xl px-4 py-1 rounded-full border-b-2 border-r-2 border-white mt-20"
        >
          contact us
        </div>
      </div>
    ),
  },
];

const ObjectiveBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;

      const newActiveIndex = Math.round(scrollPosition / windowHeight);
      setActiveIndex(newActiveIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      containerRef.current?.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen -mt-10 overflow-y-auto scroll-smooth"
    >
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          style={{ backgroundColor: section.backgroundColor }}
          className="h-screen w-screen flex-shrink-0 flex flex-col items-center justify-center sticky top-0"
        >
          {section.content}
        </div>
      ))}
    </div>
  );
};
export default ObjectiveBanner;
