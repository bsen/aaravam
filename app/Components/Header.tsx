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
    <div className="fixed top-0 w-full flex justify-center gap-6 items-center p-2">
      {options.map((option) => (
        <button
          key={option}
          style={{ color: "white", zIndex: "100px" }}
          className="bg-transparent border-none font-medium  text-lg cursor-pointer px-4 py-2 transition-colors duration-300 hover:scale-110"
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
  );
};

export default Header;
