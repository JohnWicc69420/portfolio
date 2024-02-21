"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const data = [
    {
      img: "/ss.png",
      title: "Performance Dashboard",
      desc: "A comprehensive dashboard application featuring various tools such as a kanban board, color picker, text editor, charts, and theme customization options including dark and light modes.",
      link: "https://dashboard-app-dun-eta.vercel.app/",
      tools: [
        "HTML",
        "CSS",
        "Next.js",
        "Redux Toolkit",
        "React",
        "Next-Auth",
        "MongoDB",
        "Mongoose",
        "Chart.js",
        "React Chartjs-2",
        "PrimeReact",
        "Quill.js",
        "React Icons",
        "Tailwind CSS",
        "DnD-Kit",
        "React Loader Spinner",
      ],
    },
    {
      img: "/ss.png",
      title: "E-commerce Web App",
      desc: "An intuitive e-commerce platform with essential functionalities including a fully functional shopping cart, CRUD operations for products, and advanced sorting and filtering options.",
      link: "https://main--ecommerce-clothing-app64209.netlify.app/",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "SASS",
        "Swiper.js",
        "Redux",
        "React Router",
        "Material-UI",
      ],
    },
    {
      img: "/ss.png",
      title: "CRUD Blog Web App",
      desc: "A robust blog application built using MongoDB and Node.js, offering CRUD operations for managing blog posts, and supporting dark and light mode themes for enhanced readability.",
      link: "https://blog-app-tau-ten.vercel.app/",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Next.js",
        "TypeScript",
        "React",
        "Redux Toolkit",
        "React Redux",
        "React Icons",
        "Tailwind CSS",
        "MongoDB",
        "Mongoose",
        "Next-Auth",
      ],
    },
    {
      img: "/ss.png",
      title: "YouTube Clone Project",
      desc: "A project replicating the functionality of YouTube, allowing users to upload, view, and interact with videos, with features similar to the original platform, including user authentication and video management.",
      link: "https://main--ecommerce-clothing-app64209.netlify.app/",
      // https://yt-clone-johnwicc64209.netlify.app/
      tools: [
        "HTML",
        "CSS",
        "React.js",
        "Redux",
        "React Router",
        "Material-UI",
        "Axios",
        "Moment.js",
        "Number Abbreviate",
        "React Custom Scrollbars 2",
        "React Icons",
        "React Player",
        "React Redux",
        "React Router DOM",
        "React Scroll",
        "Swiper",
        "SASS",
        "Tailwind CSS",
      ],
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className=" pb-10 ">
        <div className="xl:hidden block text-[#E2E8F0] px-3 uppercase font-semibold text-base tracking-widest py-6">
          PROJECTS
        </div>
        <div
          className={`flex flex-col gap-6 `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col gap-6">
            {data.map((item, index) => (
              <ProjectCard
                isHovered={isHovered}
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                link={item.link}
                tools={item.tools}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
