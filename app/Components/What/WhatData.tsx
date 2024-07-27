"use client";
import React, { useRef, useEffect, useState } from "react";

const WhatData: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);

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
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        if (!allowVerticalScroll) {
          e.preventDefault();
          if (e.deltaY > 0) {
            // Scrolling down
            if (currentSection < sections.length - 1) {
              setCurrentSection((prev) => prev + 1);
            } else {
              setAllowVerticalScroll(true);
            }
          } else {
            // Scrolling up
            if (currentSection > 0) {
              setCurrentSection((prev) => prev - 1);
            }
          }
        }
      }, 50); // Debounce scroll events
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [currentSection, allowVerticalScroll, sections.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      left: currentSection * window.innerWidth,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
    <div
      ref={containerRef}
      className={`h-screen ${
        allowVerticalScroll ? "overflow-y-auto" : "overflow-y-hidden"
      } overflow-x-hidden`}
      style={{ backgroundColor: "#FDEFDB" }}
    >
      <div className="flex">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-20"
          >
            <div className="max-w-4xl w-full">
              <h2
                style={{ color: "#3F2E2C" }}
                className="text-center text-6xl font-semibold mb-8"
              >
                {section.title}
              </h2>
              <p
                style={{ color: "#3F2E2C" }}
                className="text-2xl font-medium text-center"
              >
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Add your additional components here */}
      {allowVerticalScroll && (
        <div className="h-screen flex items-center justify-center bg-blue-200">
          <h2 className="text-4xl">Additional Content</h2>
        </div>
      )}
    </div>
  );
};

export default WhatData;
