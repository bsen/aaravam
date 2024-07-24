"use client";
import React from "react";

interface HeaderProps {
  options: string[];
  onSchoolsClick: () => void;
  onEducatorsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  options = [],
  onSchoolsClick,
  onEducatorsClick,
}) => {
  return (
    <div
      style={{ zIndex: "100" }}
      className="fixed top-0 w-full flex justify-center gap-6 items-center p-2.5"
    >
      <div className="bg-white w-[60%] flex justify-around items-center rounded-full">
        {options.map((option) => (
          <button
            key={option}
            style={{ color: "#452E2E", zIndex: "100px" }}
            className="bg-transparent border-none font-medium  text-lg cursor-pointer px-4 py-1 transition-colors duration-300 hover:scale-110"
            onClick={
              option === "Schools"
                ? onSchoolsClick
                : option === "Educators"
                ? onEducatorsClick
                : undefined
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
