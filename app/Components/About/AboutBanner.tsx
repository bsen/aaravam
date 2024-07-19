import React from "react";

const AboutBanner = () => {
  return (
    <div className="overflow-hidden bg-orange-600 -mt-10 h-screen flex items-center justify-center">
      <div className="max-w-[80%] flex flex-col items-center justify-center">
        <div className="text-[7rem] font-semibold text-white">About</div>
        <div className="text-white text-4xl font-semibold text-center">
          A space in schools where children create, innovate and solve real
          world problems. Every month children are presented with one problem
          statement after which they can use the materials and tools from the
          space to solve it! No teacher instructions, no rule book! Completely
          child led because we believe that in every child is an innovator and
          creator =, they just need a room to express it!
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
