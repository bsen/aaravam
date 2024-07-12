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
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[6rem] text-center text-white font-semibold">
          Choice
        </div>
        <div className="text-[2rem] text-center text-white font-semibold">
          We believe children need to have a choice in how they are learning.
          When children are agents and a part of their learning then they build
          an intrinsic motivation towards education which pushes them to becomes
          life-long learners!
        </div>
        <div className="text-orange-600 text-[2rem] mt-20">
          <span className="px-2.5 mx-1 bg-orange-100 rounded-full">c</span> r e
          a t e
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF6B00",
    content: (
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[6rem] text-center text-white font-semibold">
          Relevance
        </div>
        <div className="text-[2rem] text-center text-white font-semibold">
          Learning needs to stem from what children see around them so that they
          can make sense of it from different angles rather than just a
          theoretical one. This is a reason why we make sure the problem
          statements are always contextual to their environment!
        </div>
        <div className="text-white text-[2rem] mt-20">
          c <span className="px-3 mx-1 bg-purple-400 rounded-full">r</span> e a
          t e
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#452E2E",
    content: (
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[6rem] text-center text-white font-semibold">
          Explore
        </div>
        <div className="text-[2rem] text-center text-white font-semibold">
          We don't want to spoon-feed information to children, instead we have
          designed the space in a way where they can explore and discover new
          topics independently. This will build a strong sense of confidence in
          them and make them realise that they have the power to make a change
          in their environment without the constant instruction of an adult.
        </div>
        <div className="text-orange-600 text-[2rem] mt-20">
          c r <span className="px-2.5 mx-1 bg-orange-100 rounded-full">e</span>{" "}
          a t e
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF6B00",
    content: (
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[6rem] text-center text-white font-semibold">
          Act
        </div>
        <div className="text-[2rem] text-center text-white font-semibold">
          Once children are done ideating and exploring, we believe that it is a
          necessity for children to create and act upon what they have learnt.
          This will help make learning not only more concrete but give them the
          power to co-create their learning graph!
        </div>
        <div className="text-white text-[2rem] mt-20">
          c r e<span className="px-3 mx-1 bg-purple-400 rounded-full">a</span> t
          e
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#452E2E",
    content: (
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[6rem] text-center text-white font-semibold">
          Track
        </div>
        <div className="text-[2rem] text-center text-white font-semibold">
          It's great to ideate, explore and create but the next step is just as
          important: we need to track their progress. Here, we create individual
          mind maps and student portfolios to make sure that all their learning
          is tracked and collected which will allow the child to assess
          themselves more holistically and not just from a mark sheet!
        </div>
        <div className="text-orange-600 text-[2rem] mt-20">
          c r e a
          <span className="px-3.5 mx-1 bg-orange-100 rounded-full">t</span> e
        </div>
      </div>
    ),
  },
  {
    backgroundColor: "#FF6B00",
    content: (
      <div className="flex items-center flex-col w-[80%]">
        <div className="text-[6rem] text-center text-white font-semibold">
          Evaluate
        </div>
        <div className="text-[2rem] text-center text-white font-semibold">
          At the end, we need create an opportunity for children to reflect on
          their entire learning process. This includes reflecting on their
          approach towards the problem statement, reflecting on what could be
          more effective and just pondering what could be the next steps!
        </div>
        <div className="text-white text-[2rem] mt-20">
          c r e a t
          <span className="px-3 mx-1 bg-purple-400 rounded-full">e</span>
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
