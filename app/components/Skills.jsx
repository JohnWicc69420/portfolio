import { useState } from "react";

export default function Skills() {
  const skills = [
    {
      title: "Front-end Development",
      skill: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Redux",
        "React Router",
        "Material-UI",
        "Swiper.js",
        "PrimeReact",
        "Quill.js",
        "React Icons",
        "React Player",
        "React Custom Scrollbars",
        "DnD-Kit",
        "React Loader Spinner",
      ],
    },
    {
      title: "Back-end Development",
      skill: ["Node.js", "MongoDB", "Mongoose", "Next-Auth", "Axios"],
    },
    { title: "Styling and Design", skill: ["SASS", "Tailwind CSS"] },
    { title: "Data Visualization", skill: ["Chart.js", "React Chartjs-2"] },
    {
      title: "Utilities and Libraries",
      skill: [
        "TypeScript",
        "Redux Toolkit",
        "React Redux",
        "Moment.js",
        "Number Abbreviate",
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
    <div className=" flex flex-col gap-6">
      <div className="xl:hidden block text-[#E2E8F0] px-3 uppercase font-semibold text-base tracking-widest">
        SKILLS
      </div>
      {skills.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-6 `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="glass skillsDiv">
            <div
              className={`py-5 pl-3 pr-5 cursor-pointer flex gap-4 transition-opacity ${
                isHovered ? "hovered" : ""
              } changeBrightness`}
            >
              <div className="right flex items-start  gap-2 text-sm">
                <p
                  className="max-w-[150px] min-w-[150px] opacity-75 line-clamp-2
                 uppercase font-semibold text-xs leading-4"
                >
                  {item.title}
                </p>
                <div className="flex flex-wrap">
                  {item.skill.map((skill, index) => (
                    <p
                      className="px-2 mx-1 mb-3 py-1 skill skillBgColor text-xs"
                      key={index}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
