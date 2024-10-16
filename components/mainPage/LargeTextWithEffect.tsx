"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {
  arr?: string[];
  animationDuration?: number;
  staggerAmount?: number;
};

export default function LargeText({
  arr = ["A", "N", "A", "S", "T", "A", "S", "I", "O", "S"],
  animationDuration = 3,
  staggerAmount = 0.1,
}: Props) {
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      letterRefs.current,
      {
        y: -600,
        rotate: 360,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: staggerAmount,
        duration: animationDuration,
        ease: "power3.out",
      }
    );
  }, [animationDuration, staggerAmount]);

  return (
    <div className="flex justify-center items-center w-full pt-96 pb-44 h-64">
      <h1 className="text-[28vw] font-extrabold tracking-tight uppercase flex">
        {arr.map((letter, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) letterRefs.current[index] = el;
            }}
            className={`${
              index === 0
                ? "text-softCoral"
                : index === 1
                ? "bg-gradient-to-b from-softCoral to-transparent text-transparent bg-clip-text"
                : index > 5
                ? "text-red-300"
                : "text-transparent"
            }`}
            style={
              index > 1 && index <= 5
                ? {
                    fillOpacity: 0,
                    WebkitTextStroke: "2px white",
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "",
                    WebkitTextFillColor: "transparent",
                    color: "white",
                  }
                : {}
            }
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
