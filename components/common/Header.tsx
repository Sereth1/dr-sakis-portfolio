import React from "react";

export default function Header() {
  return (
    <div>
      <div className="sticky flex justify-around space-x-8 pt-10 gap-96 z-50">
        <h1 className="border border-darkTeal p-1 pl-8 pr-8 tracking-wide rounded-2xl text-3xl text-darkTeal">
          ANASTASIOS ARCHONTAKIS
        </h1>
        <div className="flex gap-5 text-l rounded-2xl p-0 px-4 py-2 border tracking-wider bg-darkTeal items-center">
          <p className="m-0 font-bold">About</p>
          <p className="m-0 font-bold">Contact</p>
        </div>
      </div>
    </div>
  );
}
