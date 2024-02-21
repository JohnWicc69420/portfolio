"use client";
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import CursorCircle from "./components/CursorCircle/CursorCircle";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div
        className="dark:bg-[#0f172a] text-[#94A3B8] flex xl:flex-row px-[10px] flex-col xl:items-start items-center
      justify-center xl:gap-20 gap-8 min-h-[100vh]"
      >
        <CursorCircle />
        <div className="xl:sticky top-0 xl:w-[450px] w-full">
          <Info />
        </div>
        <div className=" flex flex-col xl:w-[600px]">
          <div id="about" className=" xl:pt-[100px]">
            <About />
          </div>
          <div id="skills" className=" pt-[100px]">
            <Skills />
          </div>
          <div id="projects" className=" pt-20">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
