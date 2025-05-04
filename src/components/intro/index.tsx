import React from "react";
import IntroLeft from "./left";
import IntroRight from "./right";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[90vw] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="grid-cols-2 grid">
        <IntroLeft />
        <IntroRight />
      </div>
    </div>
  );
};

export default Intro;
