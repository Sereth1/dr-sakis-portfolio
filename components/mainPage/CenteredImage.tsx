import React from "react";

export default function CenteredImage() {
  return (
    <div className="absolute -indent- top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
      <img
        src="/images/sakis.png"
        alt="Example Image"
        className="w-full h-auto"
      />
    </div>
  );
}
