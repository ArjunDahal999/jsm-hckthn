import GetStarted from "@/components/landing/get-started";
import LottieAnimation from "@/components/landing/lottie-animation";
import TypewriterEffect from "@/components/landing/type-writer-effect";

const HomePage = () => {
  return (
    <main className=" flex flex-col pt-[14vh] max-md:pt-[24vh] justify-center h-screen  items-center">
      <TypewriterEffect />
      <GetStarted />
      <LottieAnimation />
    </main>
  );
};

export default HomePage;
