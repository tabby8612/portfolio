import { Cpp } from "../assets/social/Cpp";
import { Css3 } from "../assets/social/CSS";
import { Expressjs } from "../assets/social/Express";
import { Figma } from "../assets/social/Figma";
import { Firebase } from "../assets/social/Firebase";
import { Git } from "../assets/social/Git";
import { Github2 } from "../assets/social/Github2";
import { Html5 } from "../assets/social/HTML";
import { Javascript } from "../assets/social/Javascript";
import { Laravel } from "../assets/social/Laravel";
import { Livewire } from "../assets/social/Livewire";
import { Mongodb } from "../assets/social/MongoDB";
import { MysqlWordmark } from "../assets/social/MySQL";
import { Nodejs } from "../assets/social/NodeJS";
import { Php } from "../assets/social/PHP";
import { Python } from "../assets/social/Python";
import { React2 } from "../assets/social/React2";
import { Typescript } from "../assets/social/Typescript";

export default function SkillSet() {
  return (
    <div
      id="skills"
      className="p-15 dark:bg-black dark:text-white">
      <h1 className="text-5xl py-2 font-semibold">My Tech Stack</h1>
      <p className="text-lg py-2">Technologies I've been working on</p>
      <div
        id="grid"
        className="grid grid-cols-6 grid-rows-3 gap-4 my-10 font-semibold">
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Html5 />
          <p>HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Css3 />
          <p>CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Javascript />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Typescript />
          <p>Typescript</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <React2 />
          <p>React</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Livewire />
          <p>Livewire</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Php />
          <p>PHP</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Laravel />
          <p>Laravel</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Nodejs />
          <p>NodeJS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Cpp />
          <p>C++</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Python />
          <p>Python</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Expressjs />
          <p>Express JS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Mongodb />
          <p>MongoDB</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Firebase />
          <p>Firebase</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <MysqlWordmark />
          <p>My SQL</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Git />
          <p>Git</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Github2 />
          <p>GitHub</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mb-10">
          <Figma />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}
