import Image from "next/image";
import Navbar from "./components/NavBar";
import background from "@/app/assets/SubContainer.png";
import Button from "./components/Button";
import Category from "./components/homepage/Category";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="h-screen">
          <Image src={background} alt="" className="h-screen object-cover" />
        </div>
        <div className="absolute top-0 left-0 md:pt-5 w-full z-10">
          <Navbar />
          <div className="px-10 md:px-24 flex -mt-10 text-[#999999] flex-col gap-5 text-center justify-end h-screen">
            <h2 className="md:text-4xl text-3xl text-white font-bold">
              The Best Streaming Experience
            </h2>
            <p className="text-sm max-md:hidden">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <p className="text-sm md:hidden">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button>Start Watching Now</Button>
        </div>
        <Category />
      </div>
    </div>
  );
}
