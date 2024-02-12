import Info from "./components/Info";
import About from "./components/About";
import CursorCircle from "./components/CursorCircle/CursorCircle";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";

export default function Home() {
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
        <div className="sticky top-16 w-[450px] p-10">
          <Info />
        </div>
        <div className=" flex flex-col w-[600px]">
          <div id="about" className=" pt-[100px]">
            <About />
          </div>
          <div className=" pt-20" id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
