import AboutImg from "../assets/images/about-banner.jpg";
import { Javascript } from "../assets/social/Javascript";
import { React } from "../assets/social/React";
import AbsoluteImage from "../assets/images/absolute-image.jpg";
import { Typescript } from "../assets/social/Typescript";

export default function About() {
  return (
    <div
      id="about"
      className="bg-[#242338] h-full text-white">
      <div className="flex mx-auto py-34 px-34 gap-16 my-6 relative">
        <div
          id="image"
          className="relative">
          <img
            src={AboutImg}
            alt="about image"
            className="rounded-lg"
            width={1500}
          />
          <div className="absolute bg-black right-3 -top-7 rounded-lg">
            <Javascript className="rounded-lg" />
          </div>
          <div className="absolute bg-[#61DAFB] -bottom-10 right-25 rounded-lg p-2">
            <React />
          </div>
          <div className="absolute -bottom-25 -left-20 rounded-lg p-2">
            <img
              src={AbsoluteImage}
              alt="game developer"
              width={250}
              className="rounded-lg"
            />
          </div>
          <div className="absolute top-15 -left-15 rounded-lg p-2">
            <Typescript />
          </div>
        </div>
        <div
          id="aboutme"
          className="my-10">
          <p className="text-red-500 text-xl font-semibold mb-4">I'm Developer</p>
          <p className="text-2xl font-bold mb-4">I develop applications for web and mobile</p>
          <p>
            My name is Tabish Sajwani and I'm full-stack developer. I have strong passion for coding and I develop high-quality web applications. I am constantly seeking opportunities to grow professionally and contribute my skills to develop good
            projects.
          </p>
          <div className="flex gap-9">
            <a
              href="#portfolio"
              className="mt-9 py-2 px-15 bg-blue-600 text-lg text-white rounded-lg flex justify-center items-center gap-3">
              Portfolio
            </a>
            <a
              href="#contact"
              className="mt-9 py-2 px-15 bg-blue-600 text-lg text-white rounded-lg flex justify-center items-center gap-3">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
