import Image from "next/image";
import Link from "next/link";
import SkillCard from "./SkillCard";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function ProjectCard({
  img,
  title,
  desc,
  link,
  tools,
  isHovered,
}) {
  return (
    <>
      <Link href={link} target="_blank">
        <div className="glass">
          <div
            className={`p-5 cursor-pointer flex gap-4 transition-opacity ${
              isHovered ? "hovered" : ""
            } changeBrightness`}
          >
            <div className="left pt-1 min-w-[150px] max-w-[150px] h-full">
              <Image
                className=" w-full "
                src={img}
                width={2000}
                height={2000}
                alt="
          "
              />
            </div>
            <div className="right flex flex-col items-start gap-2 text-sm">
              <span
                className="text-[#eee] flex items-center gap-[10px] 
            text-base capitalize changeColor"
              >
                <p>{title}</p>
                <span className="mb-[-5px] ml-[-5px] changePos">
                  <MdOutlineArrowOutward />
                </span>
              </span>
              <p>{desc}</p>
              <div className="flex gap-2 pt-1 flex-wrap">
                {tools.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
