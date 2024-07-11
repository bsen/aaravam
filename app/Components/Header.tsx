"use client";
import React, { useState } from "react";
import Image from "next/image";

interface MenuButtonProps {
  label: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuButtons = [
    "HOME",
    "ABOUT",
    "WHAT?",
    "OBJECTIVES",
    "FRAMEWORK",
    "CONTACT",
  ];

  return (
    <header className="h-[8vh] w-full fixed top-0 flex justify-center items-center z-50">
      <div className="bg-white w-fit rounded-full py-1">
        <div className="container mx-auto px-4 h-full flex justify-between md:justify-center items-center">
          <div className="flex items-center md:hidden">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </div>

          <nav className="hidden md:flex justify-center gap-8 items-center">
            {MenuButtons.map((button) => (
              <MenuButton key={button} label={button} />
            ))}
          </nav>

          <button
            style={{ color: "#452E2E" }}
            className="md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="w-full flex items-center justify-end">
          <nav className="md:hidden bg-orange-900 w-fit rounded-l-lg">
            {MenuButtons.map((button) => (
              <MenuButton key={button} label={button} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const MenuButton: React.FC<MenuButtonProps> = ({ label }) => (
  <div
    style={{ color: "#452E2E" }}
    className="font-medium text-lg hover:bg-indigo-500 px-4 py-2 md:py-0 rounded-full transition-transform cursor-pointer duration-500 ease-in-out hover:scale-110"
  >
    {label}
  </div>
);

export default Header;
