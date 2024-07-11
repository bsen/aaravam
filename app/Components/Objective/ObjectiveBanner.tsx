import React from "react";

const ObjectiveBanner = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#B686B8" }}
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="flex items-end flex-col">
          <img src="/cursor.png" className="h-20" />
          <div className="text-[8rem] text-white font-semibold">Objectives</div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#FF9FC2" }}
        className="h-screen flex flex-col items-center justify-center"
      >
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

          <div
            className="text-[7rem] font-semibold"
            style={{ color: "#452E2E" }}
          >
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
      </div>
      <div
        style={{ backgroundColor: "#B686B8" }}
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="flex items-end flex-col">
          <img src="/cursor.png" className="h-20" />
          <div className="text-[6rem] text-center text-white font-semibold">
            We Follow a framework called <br />
            <span style={{ color: "#452E2E" }}>create</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ObjectiveBanner;
