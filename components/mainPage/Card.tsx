"use client";
import React from "react";
import ButtonMain from "./ButtonMain";
import Image from "next/image";

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
  return (
    <div
      className={`flex gap-52 justify-around py-10 w-full text-${textColor} ${
        reversed ? "flex-row-reverse" : "flex-row"
      } bg-${color}`}
    >
      <div className="">
        <h1 className="py-5 text-xl">{title}</h1>{" "}
        <p className="w-[450px] py-5">{mainText}</p>{" "}
        <ButtonMain text="For more" onClick={() => {}} />
      </div>
      <div className="border">
        <Image
          src={`/${img}`}
          alt="Example Image"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>
    </div>
  );
}
