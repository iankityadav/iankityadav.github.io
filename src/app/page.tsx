import IntroLeft from "../components/intro/left";
import IntroRight from "../components/intro/right";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center max-w-[90vw] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <IntroLeft />
        <IntroRight />
      </div>
    </div>
  );
}
