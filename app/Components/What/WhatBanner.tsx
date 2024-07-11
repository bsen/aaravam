import React from "react";

const WhatBanner = () => {
  return (
    <div
      style={{ backgroundColor: "#B686B8" }}
      className="h-screen overflow-hidden flex flex-col justify-center items-center gap-6"
    >
      <img src="/cursor.png" className="h-20" />
      <img src="/what.png" className="w-[40%]" />
    </div>
  );
};

export default WhatBanner;
