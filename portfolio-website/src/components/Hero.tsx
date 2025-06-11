import handicon from "../assets/images/handIcon.png";
import HeroBanner from "../assets/images/hero-banner.jpg";
import RotateImage from "../assets/images/rotate-image-final.png";
import ResumePDF from "../assets/Tabish CV 11-Jun.pdf";

import { CupStarBold } from "./UI/Cup";
import { ExternalLink } from "./UI/ExternalLink";

export default function Hero() {
  return (
    <div className="flex my-3 py-25 w-[85vw] mx-auto text-5xl gap-3 dark:text-white">
      <div
        id="intro-text"
        className="w-[60%]  pl-4 pt-4">
        <div className="flex gap-2.5 pb-5">
          <p className="font-bold">Hi</p>
          <img
            src={handicon}
            alt="hi"
            width={50}
          />
        </div>
        <p className="pb-9 font-bold">My name is</p>
        <p className="bg-clip-text pb-9 font-bold bg-gradient-to-r from-purple-500 to-pink-700 text-transparent">Tabish Sajwani</p>
        <p className="pb-4 font-bold">I build things for web</p>
        <p className="pb-4 font-bold">and mobile</p>
        <a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-15 bg-blue-600 text-lg text-white rounded-lg flex justify-center items-center gap-3 w-64">
          Resume <ExternalLink />
        </a>
      </div>
      <div
        id="intro-image"
        className="w-[40%] relative">
        <img
          src={HeroBanner}
          alt="hero banner"
          width={400}
          className="rounded-2xl"
        />
        <div className="bg-black rounded-xl absolute -top-9 right-35 py-6 px-6 text-amber-300 text-6xl dark:bg-white">
          <CupStarBold />
        </div>
        <div className="bg-black absolute top-20 -left-10 rounded-xl flex justify-center w-44 py-2 gap-3 dark:bg-white">
          <p className="ml-2 font-bold text-blue-400 text-5xl">12</p>
          <p className="text-white text-[20px] dark:text-black my-auto">Years of Success</p>
        </div>
        <div className="bg-black absolute bottom-6 right-8 rounded-xl flex justify-center w-60 py-3 gap-3 dark:bg-white">
          <p className="ml-2 font-bold text-blue-400 text-5xl">800+</p>
          <p className="text-lg/tight text-white dark:text-black">Projects Completed</p>
        </div>
        <div className="absolute -bottom-6 -left-25 rounded-xl flex justify-center py-3 gap-3">
          <img
            src={RotateImage}
            alt="rotate image"
            width={200}
            className="opacity-25 rotate360"
          />
        </div>
      </div>
    </div>
  );
}
