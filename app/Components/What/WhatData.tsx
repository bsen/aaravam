"use client";
import React, { useRef, useEffect, useState } from "react";

const WhatData: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isUserScrollingRef = useRef(false);

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
  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current && !isUserScrollingRef.current) {
        const maxScroll =
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth;
        const newScrollPosition =
          (scrollContainerRef.current.scrollLeft + 1) % maxScroll;
        scrollContainerRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "auto",
        });
      }
    }, 50);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollLeft;
      const sectionWidth = scrollContainer.clientWidth;
      const newIndex = Math.round(scrollPosition / sectionWidth);
    };

    const handleUserInteractionStart = () => {
      isUserScrollingRef.current = true;
      stopAutoScroll();
    };

    const handleUserInteractionEnd = () => {
      isUserScrollingRef.current = false;
      setTimeout(startAutoScroll, 500); // Resume auto-scroll after 2 seconds
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("touchstart", handleUserInteractionStart);
    scrollContainer.addEventListener("mousedown", handleUserInteractionStart);
    scrollContainer.addEventListener("touchend", handleUserInteractionEnd);
    scrollContainer.addEventListener("mouseup", handleUserInteractionEnd);

    startAutoScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      scrollContainer.removeEventListener(
        "touchstart",
        handleUserInteractionStart
      );
      scrollContainer.removeEventListener(
        "mousedown",
        handleUserInteractionStart
      );
      scrollContainer.removeEventListener("touchend", handleUserInteractionEnd);
      scrollContainer.removeEventListener("mouseup", handleUserInteractionEnd);
      stopAutoScroll();
    };
  }, []);

  return (
    <div
      className="-mt-10 overflow-x-auto"
      style={{ backgroundColor: "#FDEFDB" }}
      ref={scrollContainerRef}
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
    </div>
  );
};

export default WhatData;
