import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntroRight = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div className="border-r-2 border-yellow-500 rounded-full p-8">
            <Image
              alt="user"
              src={"/images/user-vector.png"}
              width={400}
              height={400}
            />
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
