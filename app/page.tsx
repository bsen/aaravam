"use client";
import React, { useRef, useEffect } from "react";
import Banner from "./Components/Banner/Banner";
import HeroStudentsGalary from "./Components/HeroStudents/HeroStudents";
import HeroScroll from "./Components/HeroStudents/HeroScroll";
import Partner from "./Components/About/Partner";
import AboutBanner from "./Components/About/AboutBanner";
import WhatBanner from "./Components/What/WhatBanner";
import WhatData from "./Components/What/WhatData";
import ObjectiveBanner from "./Components/Objective/ObjectiveBanner";
import CustomCursor from "./Components/CustomCursor";
const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;
      let cumulativeHeight = 0;

      sectionRefs.current.forEach((sectionRef, index) => {
        if (!sectionRef) return;

        const sectionHeight = sectionRef.offsetHeight;

        if (scrollPosition > cumulativeHeight + sectionHeight / 2) {
          sectionRef.style.transform = `translateY(${-(
            scrollPosition -
            cumulativeHeight -
            sectionHeight / 2
          )}px)`;
        } else {
          sectionRef.style.transform = "translateY(0)";
        }

        cumulativeHeight += sectionHeight;
      });
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

  return (
    <>
      <CustomCursor />
      <div className="cursor-none">
        <Banner />,
        <HeroStudentsGalary />
        <HeroScroll />
        <Partner />
        <div
          ref={containerRef}
          className="h-screen overflow-y-auto scroll-smooth"
        >
          {[
            <AboutBanner key="aboutBanner" />,
            <WhatBanner key="whatBanner" />,
            <WhatData key="whatData" />,
            <ObjectiveBanner key="objectiveBanner" />,
          ].map((Component, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen sticky top-0"
            >
              {Component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
