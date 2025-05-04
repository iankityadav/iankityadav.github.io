import Link from "next/link";
import React from "react";

const IntroLeft = () => {
  return (
    <div>
      <div className="text-left p-4">
        <div className="relative py-2">
          <h1 className="text-4xl font-bold text-yellow-500 py-1">HI THERE!</h1>
          <span className="absolute border-b-5 border-yellow-500 w-24 h-auto -left-4"></span>
        </div>
        <div className="py-4">
          <h2 className="text-9xl font-bold font-[Londrina_Shadow] tracking-widest uppercase">
            <span>I&apos;M </span>
            <span className="text-yellow-400">ANKIT</span>
          </h2>
        </div>
        <div className="flex space-y-4 flex-col text-2xl py-4 font-[Space_Grotesk]">
          <div className="bg-yellow-500 flex justify-center">
            FULL STACK DEVELOPER
          </div>
          <div className="bg-black text-yellow-500 justify-center flex">
            READY TO BUILD YOUR NEXT BIG IDEA
          </div>
        </div>
        <div className="text-2xl text-gray-700 font-light font-[Space_Grotesk]">
          Turning complex problems into elegant, scalable solutions — from
          backend APIs to sleek user interfaces.
        </div>
        <Link
          href="/"
          className="mt-6 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          MORE ABOUT ME
        </Link>
      </div>
    </div>
  );
};

export default IntroLeft;
