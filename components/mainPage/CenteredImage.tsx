import React from "react";
import LargeText from "./LargeTextWithEffect";

export default function CenteredImage() {
  return (
    <div>
      <div className="pt-44 hidden md:block absolute -indent- top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
        <img
          src="/images/sakis.png"
          alt="Example Image"
          className="w-full h-auto"
        />
      </div>
      <div className="hidden md:block">
        {" "}
        <LargeText />
      </div>
    </div>
  );
}
