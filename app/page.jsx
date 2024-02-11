import Info from "./components/Info";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <div
        className="bg-[#0f172a] text-[#94A3B8] flex pt-16 items-start 
      justify-center gap-20"
      >
        <div className="sticky top-16 w-[450px] p-10">
          <Info />
        </div>
        <div className=" w-[600px]">
          <div>
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
