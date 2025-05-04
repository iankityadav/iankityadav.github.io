import Link from "next/link";
import React from "react";

const IntroLeft = () => {
  return (
    <div>
      <div className="md:w-1/2 text-left p-4">
        <h1 className="text-3xl font-bold text-yellow-500">HI THERE!</h1>
        <h2 className="text-4xl font-extrabold">I&apos;M ANKIT</h2>
        <h3 className="text-lg font-semibold text-gray-700">
          FULL STACK DEVELOPER
        </h3>
        <p className="mt-4 text-gray-600">READY TO BUILD YOUR NEXT BIG IDEA</p>
        <p className="mt-2 text-gray-500">
          Turning complex problems into elegant, scalable solutions — from
          backend APIs to sleek user interfaces.
        </p>
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
