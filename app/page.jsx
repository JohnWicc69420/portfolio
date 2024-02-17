"use client";
import Info from "./components/Info";
import About from "./components/About";
import CursorCircle from "./components/CursorCircle/CursorCircle";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";

export default function Home() {
  window.addEventListener("scroll", function () {
    let divs = document.querySelectorAll(".div");

    divs.forEach((div) => {
      let rect = div.getBoundingClientRect();
      if (rect.top <= 0) {
        console.log("Div with ID " + div.id + " is at the top of the page.");
      }
    });
  });

  return (
    <>
      <div className="relative">
        <span className="fixed top-6 right-14">
          <ThemeToggle />
        </span>
      </div>
      <div
        className="dark:bg-[#0f172a] text-[#94A3B8] flex items-start 
      justify-center gap-20 min-h-[100vh]"
      >
        <CursorCircle />
        <div className="sticky top-0 w-[450px]">
          <Info />
        </div>
        <div className=" flex flex-col w-[600px]">
          <div id="about" className=" pt-[100px]">
            <About />
          </div>
          <div id="projects" className=" pt-20">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
