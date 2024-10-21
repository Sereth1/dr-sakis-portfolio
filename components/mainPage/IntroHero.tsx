"use client";
import { FaArrowDown } from "react-icons/fa6";
import ButtonMain from "./ButtonMain";

export default function IntroHero() {
  return (
    <div className="  md:flex text-center md:text-left text-darkTeal bg-transparent md:space-x-96 pt-5  md:justify-around md:w-full md:pt-[230px]">
      {/* Left Section */}
      <div className=" md:flex-shrink-0 p-0 ">
        <p className="text-3xl font-bold pb-10">Hi There</p>
        <p className="md:w-[450px] pl-5 pr-5 md:pl-0 md:pr-0 text-lg md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cumque,
          voluptas, perferendis facilis sit autem libero at ducimus obcaecati
          minus, saepe cum! Dignissimos ipsa voluptates laudantium officiis
          aliquid explicabo perferendis?
        </p>
        <div className="pt-5 ">
          <ButtonMain onClick={() => null} text="Contact me" />
        </div>
      </div>
      <div className=" pt-32 pr-10 cursor-pointer hidden md:block">
        <div className="border border-darkTeal  h-auto self-start p-5 rounded-full">
          <FaArrowDown size="2em" />
        </div>
      </div>
    </div>
  );
}
