export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center max-w-[90vw] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="md:w-1/2 text-left p-4">
          <h1 className="text-3xl font-bold text-yellow-500">HI THERE!</h1>
          <h2 className="text-4xl font-extrabold">I&apos;M ANKIT</h2>
          <h3 className="text-lg font-semibold text-gray-700">
            FULL STACK DEVELOPER
          </h3>
          <p className="mt-4 text-gray-600">
            READY TO BUILD YOUR NEXT BIG IDEA
          </p>
          <p className="mt-2 text-gray-500">
            Turning complex problems into elegant, scalable solutions — from
            backend APIs to sleek user interfaces.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            MORE ABOUT ME
          </a>
        </div>

        {/* Right Section (Image & Icons) */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="border-r-2 border-yellow-500 rounded-full p-8">
              <div className="w-48 h-48 bg-red-300 rounded-full object-cover p-8"></div>
            </div>
            <div className="absolute inset-0 top-0 right-0 flex flex-col items-center rounded-full">
              <div className="bg-gray-800 rounded-full p-2 absolute top-0 right-1/12 transform -translate-x-1/2">
                <a href="#" className="text-white">
                  🏠
                </a>
              </div>
              <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-1/6 right-0">
                <a href="#" className="text-white">
                  🙋‍♂️
                </a>
              </div>
              <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-2/6 -right-1/12 transform translate-y-1/2">
                <a href="#" className="text-white">
                  📁
                </a>
              </div>
              <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-4/6 right-0 transform">
                <a href="#" className="text-white">
                  💬
                </a>
              </div>
              <div className="bg-gray-800 rounded-full p-2 mt-2 absolute top-5/6 right-3/12 transform">
                <a href="#" className="text-white">
                  📧
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
