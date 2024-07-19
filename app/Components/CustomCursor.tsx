import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <img
      src="/cursor.png"
      alt="Custom Cursor"
      style={{
        position: "fixed",
        pointerEvents: "none",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "42px",

        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
