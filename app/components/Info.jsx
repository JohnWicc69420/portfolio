export default function Info() {
  return (
    <>
      <div className="flex gap-3 flex-col items-start">
        <div className="text-[#E2E8F0] text-5xl font-bold pb-1">
          Usman Tariq
        </div>
        <div className="text-[#E2E8F0] text-xl">Front-End Web Developer</div>
        <div className="w-[260px]">
          "I engineer refined, vibrant, and precise user experiences."
        </div>
        <div className="flex flex-col uppercase gap-2 pt-14 text-xs font-semibold tracking-widest">
          {" "}
          <span className="flex items-center gap-4 py-2 infoLine cursor-pointer">
            <div className="h-[1px] w-[35px] changeWidth bg-[#aaa]"></div>
            About
          </span>
          <span className="flex items-center gap-4 py-2 infoLine cursor-pointer">
            <div className="h-[1px] w-[35px] changeWidth bg-[#aaa]"></div>
            Skills
          </span>
          <span className="flex items-center gap-4 py-2 infoLine cursor-pointer">
            <div className="h-[1px] w-[35px] changeWidth bg-[#aaa]"></div>
            Projects
          </span>
          <span className="flex items-center gap-4 py-2 infoLine cursor-pointer">
            <div className="h-[1px] w-[35px] changeWidth bg-[#aaa]"></div>
            Contact
          </span>{" "}
        </div>
      </div>
    </>
  );
}
