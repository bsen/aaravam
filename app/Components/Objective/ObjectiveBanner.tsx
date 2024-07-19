import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    backgroundColor: "#B686B8",
    content: (
      <div className="flex items-end flex-col">
        <img src="/cursor.png" className="h-20" alt="Cursor" />
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
        <img src="/cursor.png" className="h-20" alt="Cursor" />
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
        <div className="text-[15rem] text-white font-semibold relative">
          CREATE
          <span
            className="absolute inset-0 bg-orange-500 rounded-full"
            style={{ clipPath: "circle(18% at 10% 50%)" }}
          ></span>
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF6B00",
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-[15rem] text-white font-semibold relative">
          CREATE
          <span
            className="absolute inset-0 bg-purple-500 rounded-full"
            style={{ clipPath: "circle(18% at 25% 50%)" }}
          ></span>
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#452E2E",
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-[15rem] text-white font-semibold relative">
          CREATE
          <span
            className="absolute inset-0 bg-orange-500 rounded-full"
            style={{ clipPath: "circle(18% at 40% 50%)" }}
          ></span>
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF6B00",
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-[15rem] text-white font-semibold relative">
          CREATE
          <span
            className="absolute inset-0 bg-purple-500 rounded-full"
            style={{ clipPath: "circle(18% at 55% 50%)" }}
          ></span>
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#452E2E",
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-[15rem] text-white font-semibold relative">
          CREATE
          <span
            className="absolute inset-0 bg-orange-500 rounded-full"
            style={{ clipPath: "circle(18% at 70% 50%)" }}
          ></span>
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF6B00",
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-[15rem] text-white font-semibold relative">
          CREATE
          <span
            className="absolute inset-0 bg-purple-500 rounded-full"
            style={{ clipPath: "circle(18% at 85% 50%)" }}
          ></span>
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
    <div ref={containerRef} className="h-screen overflow-y-auto scroll-smooth">
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
      <div className="fixed bottom-5 left-0 right-0 flex justify-center">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ObjectiveBanner;
