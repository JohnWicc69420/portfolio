"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export default function Info() {
  const data = [
    { id: 1, title: "ABOUT", scrollTo: "about" },
    { id: 2, title: "SKILLS", scrollTo: "skills" },
    { id: 3, title: "PROJECTS", scrollTo: "projects" },
  ];

  const links = [
    { title: "Github", icon: <FaGithub /> },
    { title: "LinkedIn", icon: <FaLinkedin /> },
    { title: "Résumé" },
  ];

  const [selectedSection, setSelectedSection] = useState(1);
  const handleSelectedSection = (id) => {
    setSelectedSection(id);
  };

  const scrollToProjects = (id) => {
    const projectsSection = document.getElementById(id);
    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="flex flex-col justify-between h-screen px-10 pt-[100px]">
        <div className="flex gap-3 flex-col items-start">
          <div className="text-[#E2E8F0] text-5xl font-bold pb-1">
            Usman Tariq
          </div>
          <div className="text-[#E2E8F0] text-xl">Front-End Engineer</div>
          <div className="w-[260px]">
            "I engineer refined, vibrant, and precise user experiences."
          </div>
          <div className="flex flex-col uppercase gap-2 pt-14 text-xs font-semibold tracking-widest">
            {" "}
            {data.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  handleSelectedSection(item.id);
                  scrollToProjects(item.scrollTo);
                }}
                className={`${
                  item.id === selectedSection ? "text-[#e2e8f0] " : ""
                } flex items-center gap-4 py-2 infoLine cursor-pointer`}
              >
                <div
                  className={`${
                    item.id === selectedSection
                      ? "w-[70px] bg-[#e2e8f0]"
                      : "bg-[#4E5C71]"
                  } h-[1px] w-[35px] changeWidth `}
                ></div>
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <div className=" flex pb-16">
          {links.map((item, index) => (
            <div
              key={index}
              className="links text-sm font-semibold tracking-widest uppercase
               flex items-center cursor-pointer gap-[6px] py-2 pr-4"
            >
              <div className="flex items-center flex-col gap-[2px]">
                {item.title}
                <div className=" h-[2px] bg-[#e2e8f0] w-[2px] addWidth rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
