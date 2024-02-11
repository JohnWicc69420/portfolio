"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const data = [
    {
      img: "/ss.png",
      title: "Performance Dashboard",
      desc: "A comprehensive dashboard application featuring various tools such as a kanban board, color picker, text editor, charts, and theme customization options including dark and light modes.",
      link: "https://main--ecommerce-clothing-app64209.netlify.app/",
      tools: [
        "react.js",
        "next.js",
        "tailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Swiper",
      ],
    },
    {
      img: "/ss.png",
      title: "E-commerce Web App",
      desc: "An intuitive e-commerce platform with essential functionalities including a fully functional shopping cart, CRUD operations for products, and advanced sorting and filtering options.",
      link: "https://main--ecommerce-clothing-app64209.netlify.app/",
      tools: [
        "react.js",
        "next.js",
        "tailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Swiper",
      ],
    },
    {
      img: "/ss.png",
      title: "CRUD Blog Web App",
      desc: "A robust blog application built using MongoDB and Node.js, offering CRUD operations for managing blog posts, and supporting dark and light mode themes for enhanced readability.",
      link: "https://main--ecommerce-clothing-app64209.netlify.app/",
      tools: [
        "react.js",
        "next.js",
        "tailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Swiper",
      ],
    },
    {
      img: "/ss.png",
      title: "YouTube Clone Project",
      desc: "A project replicating the functionality of YouTube, allowing users to upload, view, and interact with videos, with features similar to the original platform, including user authentication and video management.",
      link: "https://main--ecommerce-clothing-app64209.netlify.app/",
      tools: [
        "react.js",
        "next.js",
        "tailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Swiper",
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
      <div className=" pb-10">
        <h1 className=" uppercase hidden text-[#E2E8F0] text-base font-bold">
          PROJECTS
        </h1>
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
