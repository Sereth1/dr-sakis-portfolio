import React from "react";
import LargeText from "./LargeTextWithEffect";

export default function ImageMobile() {
  return (
    <div className="md:hidden ">
      <div className="relative z-10 w-full">
        {/* Image container */}
        <div className="relative w-full z-10">
          <img
            src="/images/sakis.png"
            alt="Example Image"
            className="w-full h-auto z-10"
          />

          {/* Text container, positioned at the bottom of the image */}
          <div className="absolute inset-x-0 bottom-[-50px] w-full flex justify-center items-end">
            <LargeText />
          </div>
        </div>
      </div>
    </div>
  );
}
