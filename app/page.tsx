import React from "react";
import Hero from "./Components/Hero/Hero";
import HeroStudentsGalary from "./Components/HeroStudents/HeroStudents";
import HeroScroll from "./Components/HeroStudents/HeroScroll";
import BannerPartner from "./Components/About/BannerPartner";
import AboutBanner from "./Components/About/AboutBanner";
import WhatBanner from "./Components/What/WhatBanner";
import WhatData from "./Components/What/WhatData";
import ObjectiveBanner from "./Components/Objective/ObjectiveBanner";
const page = () => {
  return (
    <div>
      <Hero />
      <HeroStudentsGalary />
      <HeroScroll />
      <BannerPartner />
      <AboutBanner />
      <WhatBanner />
      <WhatData />
      <ObjectiveBanner />
    </div>
  );
};

export default page;
