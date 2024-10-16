"use client";
import React from "react";
import ButtonMain from "./ButtonMain";

export default function AboutMe() {
  return (
    <div className="bg-darkTeal flex mt-44 gap-52 justify-evenly pb-14">
      <div>
        <h1 className="pb-5 text-xl pt-10">About me</h1>
        <p className="w-96 pb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
          debitis officiis vero, nulla numquam sequi aliquam vitae commodi
          distinctio dolores fugit labore exercitationem ipsum id totam soluta,
          harum quo unde.
        </p>
        <ButtonMain text="For more" onClick={() => {}} />
      </div>
      <div className=" w-96 border">sasdadsa;ml</div>
    </div>
  );
}
