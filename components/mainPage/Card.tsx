"use client";
import React, { useRef, useState, useEffect } from "react";
import ButtonMain from "./ButtonMain";
import Image from "next/image";
import { gsap } from "gsap";

type Props = {
  reversed?: boolean;
  color: "darkTeal" | "mintGreen" | "white";
  title?: string;
  mainText?: string;
  img?: string;
  textColor: "darkTeal" | "white";
};

export default function Card({
  reversed = false,
  color,
  title,
  mainText,
  img,
  textColor,
}: Props) {
  const text = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  // Using useEffect to run the GSAP animation when isActive changes
  useEffect(() => {
    if (isActive) {
      gsap.to(text.current, { x: 0, duration: 1 });
    } else {
      gsap.to(text.current, { x: -1000, duration: 1 });
    }
  }, [isActive]);

  return (
    <div
      className={`relative flex ${
        reversed
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      } md:gap-52 md:justify-around md:py-10 w-full md:p-0 p-4 text-${textColor} bg-${color}`}
    >
      {/* Mobile and Desktop Content */}
      <div
        className={`flex items-center gap-5 md:gap-0 md:p-0 md:block ${
          reversed && "flex-row-reverse"
        }`}
      >
        {/* Mobile and Desktop Title */}
        <h1 className="py-5 text-xl md:text-left text-center hidden md:block">
          {title}
        </h1>
        {/* Desktop Main Text */}
        <p className="w-[450px] py-5 hidden md:block">{mainText}</p>
        <div className="pl-5 md:pl-0">
          {/* Mobile Title */}
          <h1 className="py-5 text-xl md:text-left text-center block md:hidden">
            {title}
          </h1>
          {/* Button */}
          <ButtonMain
            text="read more"
            onClick={() => setIsActive(!isActive)}
            className="text-sm "
          />
        </div>
        {/* Mobile Image */}
        <Image
          src={`/${img}`}
          alt="Example Image"
          width={500}
          height={200}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          className="md:hidden block rounded-3xl w-2/4 ml-10"
        />
      </div>
      {/* Desktop Image */}
      <div className="border md:block hidden rounded-lg">
        <Image
          src={`/${img}`}
          alt="Example Image"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Overlay div for mobile only */}
      <div
        style={{ transform: "translateX(-100%)" }}
        ref={text}
        className={`${
          color === "darkTeal" ? "bg-mintGreen" : "bg-darkTeal"
        } w-full h-full absolute top-0 left-0 z-10 md:hidden flex items-center justify-center`}
      >
        <h1 className="text-black">{mainText}</h1>
      </div>
    </div>
  );
}
