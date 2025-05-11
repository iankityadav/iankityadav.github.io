import Link from "next/link";

const IntroRight = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div className="absolute right-8 top-0">
            <div className="w-[400px] h-[400px] relative mx-auto mt-10">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full rotate-90 origin-center"
              >
                <path
                  d="M 0,200 A 200,200 0 0,1 400,200"
                  fill="none"
                  stroke="var(--color-yellow-400)"
                  strokeWidth="4"
                />
              </svg>

              <div className="w-4 h-4 bg-yellow-500 rounded-full absolute top-0 right-1/2 transform -translate-y-1/2"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full absolute bottom-0 right-1/2 transform translate-y-1/2"></div>
            </div>
          </div>
          <div className="rounded-full p-8 ">
            <div
              style={{
                backgroundImage: "url(/images/user-vector-1.png)",
                backgroundSize: "100%",
              }}
              className="w-[400px] h-[400px] block rounded-full"
            >
              .
            </div>
          </div>
          <div className="absolute inset-0 top-8 right-3 flex flex-col items-center rounded-full text-2xl">
            <div className="bg-gray-800 rounded-full p-2 absolute top-8 right-1/12 transform -translate-x-1/2">
              <Link href="/" className="text-white">
                🏠
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-24 right-3">
              <Link href="/" className="text-white">
                🙋‍♂️
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-5/12 right-0 transform ">
              <Link href="/" className="text-white">
                📁
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute bottom-28 right-4 transform">
              <Link href="/" className="text-white">
                💬
              </Link>
            </div>
            <div className="bg-gray-800 rounded-full p-2 mt-2 absolute bottom-10 right-1/6 transform">
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
