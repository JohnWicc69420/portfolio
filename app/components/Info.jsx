"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Info() {
  const data = [
    { id: 1, title: "ABOUT", scrollTo: "about" },
    { id: 2, title: "SKILLS", scrollTo: "skills" },
    { id: 3, title: "PROJECTS", scrollTo: "projects" },
  ];

  const links = [
    {
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/JohnWicc69420",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/usman-tariq-82b560152/",
    },
    {
      title: "Résumé",
      link: "https://drive.google.com/file/d/1N3kRHxyfEk_oAum9zE1bWXyVfjSp5bLY/view?usp=sharing",
    },
  ];

  const [selectedSection, setSelectedSection] = useState(1);

  const handleSelectedSection = (id) => {
    setSelectedSection(id);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToProjects = (id) => {
    setIsScrolling(true);
    const projectsSection = document.getElementById(id);
    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      setIsScrolling(false);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = data.map(
          (section) => document.getElementById(section.scrollTo).offsetTop
        );
        const scrollPosition = window.scrollY;
        const closestSectionIndex = sections.reduce(
          (prevIndex, currPosition, index) => {
            const prevDistance = Math.abs(sections[prevIndex] - scrollPosition);
            const currDistance = Math.abs(currPosition - scrollPosition);
            return currDistance < prevDistance ? index : prevIndex;
          },
          0
        );

        setSelectedSection(data[closestSectionIndex].id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (!isScrolling) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isScrolling]);

  return (
    <>
      <div className="flex flex-col xl:justify-between xl:h-screen xl:px-10 px-3 pt-[100px]">
        <div className="flex gap-3 flex-col items-start">
          <div className="text-[#E2E8F0] text-5xl font-bold pb-1">
            Usman Tariq
          </div>
          <div className="text-[#E2E8F0] text-xl">Front-End Engineer</div>
          <div className="xl:w-[260px]">
            &quot;I engineer refined, vibrant, and precise user
            experiences.&quot;
          </div>
          <div className=" hidden xl:flex flex-col uppercase gap-2 pt-14 text-xs font-semibold tracking-widest">
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
        <div className=" flex xl:flex-row flex-col xl:pb-16 xl:pt-0 pt-8">
          {links.map((item, index) => (
            <Link key={index} href={item?.link} target="_blank">
              <div
                key={index}
                className="links text-sm font-semibold tracking-widest uppercase
               flex items-center cursor-pointer gap-[6px] xl:py-2 py-1 pr-4"
              >
                <div className="flex items-center gap-[2px]">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-[6px]">
                      {item?.icon}
                      {item.title}
                      {!item.icon && (
                        <span className=" ml-[-6px] changePos text-lg">
                          <MdOutlineArrowOutward />
                        </span>
                      )}
                    </div>
                    <div className=" h-[2px] bg-[#e2e8f0] w-0 addWidth rounded-full"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
