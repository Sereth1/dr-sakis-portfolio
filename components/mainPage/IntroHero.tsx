"use client";
import { FaArrowDown } from "react-icons/fa6";
import ButtonMain from "./ButtonMain";

export default function IntroHero() {
  return (
    <div className="flex text-darkTeal justify-around w-full pt-40">
      {/* Left Section */}
      <div className="bg-mintGreen flex-shrink-0 p-5">
        <p className="text-xl font-bold pb-10">Hi There</p>
        <p className="w-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cumque,
          voluptas, perferendis facilis sit autem libero at ducimus obcaecati
          minus, saepe cum! Dignissimos ipsa voluptates laudantium officiis
          aliquid explicabo perferendis?
        </p>
        <div className="pt-5 ">
          <ButtonMain onClick={() => null} text="Contact me" />
        </div>
      </div>
      <div className="pt-20 pr-10">
        <div className="border border-darkTeal  h-auto self-start p-5 rounded-full">
          <FaArrowDown size="2em" />
        </div>
      </div>
    </div>
  );
}
