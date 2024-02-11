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
        className="dark:bg-[#0f172a] text-[#94A3B8] flex pt-16 items-start 
      justify-center gap-20 min-h-[100vh]"
      >
        <CursorCircle />
        <div className="sticky top-16 w-[450px] p-10">
          <Info />
        </div>
        <div className=" flex flex-col gap-24 w-[600px]">
          <div className="">
            <About />
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
