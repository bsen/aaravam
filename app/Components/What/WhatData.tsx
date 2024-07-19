"use client";
import React, { useRef, useEffect, useState } from "react";

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-20">
    <div className="max-w-4xl w-full">
      <h2
        style={{ color: "#3F2E2C" }}
        className="text-center text-6xl font-semibold mb-8"
      >
        {title}
      </h2>
      <p
        style={{ color: "#3F2E2C" }}
        className="text-2xl font-medium text-center"
      >
        {content}
      </p>
    </div>
  </div>
);

const WhatData: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  const sections = [
    {
      title: "1.In School Program",
      content:
        "This space is created within schools as we want students to build agency and solve problems that they see around them. It is essential that children feel empowered and see themselves as change makers who can create a real impact in the world.",
    },
    {
      title: "2.No instructions",
      content:
        "This is a space with strictly no teacher instructions! The teacher in this space acts as a mentor by probing the child to think deeper. Children use a customised design thinking framework which helps them dive deep into a problem and build confidence in their own abilities.",
    },
    {
      title: "3.Monthly problem statement",
      content:
        "Children are presented with 1 problem statement every month. We choose problem statements that are contextual to the child. Here is an example of a problem statement that they chose: Most space is designed in a way that is not accessible for people with a disability, how can we design space more consciously?",
    },
    {
      title: "4.Focus on innovation",
      content:
        "Children have the gift of imagination and we believe we can make the most of it, if we give them the tools and space to express it! Our core focus is on innovation because we don't want children to just repeat what's in the textbook but we want them to be able to make sense of everything they are learning in school and then create something! That's when learning becomes impactful!",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;

      if (
        (activeIndex === 0 && e.deltaY < 0) ||
        (activeIndex === sections.length - 1 && e.deltaY > 0)
      ) {
        return;
      }

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;

      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex + direction;
        if (newIndex >= 0 && newIndex < sections.length) {
          isTransitioning.current = true;
          setTimeout(() => {
            isTransitioning.current = false;
          }, 800);
          return newIndex;
        }
        return prevIndex;
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const direction = e.key === "ArrowRight" ? 1 : -1;
        setActiveIndex((prevIndex) => {
          const newIndex = prevIndex + direction;
          return Math.max(0, Math.min(newIndex, sections.length - 1));
        });
      }
    };

    scrollContainer?.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      scrollContainer?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sections.length, activeIndex]);

  return (
    <div
      className="h-screen -mt-10 overflow-hidden"
      style={{ backgroundColor: "#FDEFDB" }}
    >
      <div
        ref={scrollContainerRef}
        className="flex transition-transform duration-800 ease-in-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`mx-2 w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatData;
