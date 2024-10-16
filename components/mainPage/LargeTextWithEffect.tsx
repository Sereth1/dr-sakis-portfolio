import React from "react";

export default function LargeText() {
  const arr = ["A", "N", "A", "S", "T", "A", "S", "I", "O", "S"];

  return (
    <div className="flex justify-center items-center w-full pt-96 h-64">
      <h1 className="text-[28vw] font-extrabold tracking-tight uppercase flex">
        {arr.map((letter, index) => (
          <span
            key={index}
            className={`${
              index === 0 // "A" - Fully colored
                ? "text-softCoral"
                : index === 1 // "N" - Partially colored (gradient effect)
                ? "bg-gradient-to-b from-softCoral to-transparent text-transparent bg-clip-text"
                : index > 5 // "S", "I", "O", "S" - Fully colored
                ? "text-red-300"
                : "text-transparent"
            }`}
            style={
              index > 1 && index <= 5
                ? {
                    fillOpacity: 0,
                    WebkitTextStroke: "1px black", // Outer stroke (black in this case)
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "",

                    WebkitTextFillColor: "transparent", // Transparent inside
                    color: "white", // Ensures the inside remains transparent
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
