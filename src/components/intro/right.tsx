import Link from "next/link";
import React from "react";

const IntroRight = () => {
  return (
    <div>
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="border-r-2 border-yellow-500 rounded-full p-8">
            <div className="w-48 h-48 bg-red-300 rounded-full object-cover p-8"></div>
          </div>
          <div className="absolute inset-0 top-0 right-0 flex flex-col items-center rounded-full">
            <div className="bg-gray-800 rounded-full p-2 absolute top-0 right-1/12 transform -translate-x-1/2">
              <Link href="/" className="text-white">
                🏠
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-1/6 right-0">
              <Link href="/" className="text-white">
                🙋‍♂️
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-2/6 -right-1/12 transform translate-y-1/2">
              <Link href="/" className="text-white">
                📁
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-4/6 right-0 transform">
              <Link href="/" className="text-white">
                💬
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-5/6 right-3/12 transform">
              <Link href="/" className="text-white">
                📧
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroRight;
