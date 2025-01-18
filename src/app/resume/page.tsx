"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

//About

const about = {
  title: "About me",
  description:
    "A programmer is someone who writes, tests, and maintains code that makes software, websites, or applications function. They use programming languages like Python, Java, or JavaScript to translate logical solutions into executable instructions. Programmers analyze problems, design algorithms, and debug issues to ensure smooth operation. Their work often requires collaboration with other developers, designers, and stakeholders to meet project goals. With problem-solving skills and attention to detail, they play a crucial role in the technology-driven world, constantly learning new techniques and adapting to evolving tools and trends. Programmers help drive innovation across industries, from gaming to healthcare.",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Ademola Sodeeq",
    },
    {
      fieldName: "Phone",
      FieldValue: "+234 706 209 3146",
    },
    {
      fieldName: "Experience",
      FieldValue: "6+ Years",
    },
    {
      fieldName: "Email",
      FieldValue: "sodeeqademola0909@gmail.com",
    },
    {
      fieldName: "Freeelance",
      FieldValue: "Available",
    },
    {
      fieldName: "Language",
      FieldValue: "English, Arabic, Yoruba, Pidgin",
    },
  ],
};

//Experience data

const experience = {
  icon: "/images/sodeeq.png",
  title: "My experience",
  description:
    "A programmer is someone who writes, tests, and maintains code that makes software, websites, or applications function. They use programming languages like Python, Java, or JavaScript to translate logical solutions into executable instructions. Programmers analyze problems, design algorithms, and debug issues to ensure smooth operation. Their work often requires collaboration with other developers, designers, and stakeholders to meet project goals. With problem-solving skills and attention to detail, they play a crucial role in the technology-driven world, constantly learning new techniques and adapting to evolving tools and trends. Programmers help drive innovation across industries, from gaming to healthcare.",
  items: [
    {
      company: "Sunmence Tech Company",
      position: "Web App Full Stack Developer",
      duration: "2020 - 2022",
    },
    {
      company: "FastLink Tech Inc.",
      position: "Mobile App Full Stack Developer ",
      duration: "2022 - 2023",
    },
    {
      company: "FixIt Tech",
      position: "Freelance Web Developer ",
      duration: "Summer 2023",
    },
    {
      company: "SuperJara Tech Academy",
      position: "Freelance Web Developer ",
      duration: "Winter 2023",
    },
    {
      company: "MSSN Tech Inc.",
      position: "Teaching Mobile App Development",
      duration: "2024 - 2025",
    },
  ],
};

// Education
const education = {
  icon: "/images/sodeeq.png",
  title: "My education",
  description:
    "A programmer is someone who writes, tests, and maintains code that makes software, websites, or applications function. They use programming languages like Python, Java, or JavaScript to translate logical solutions into executable instructions. Programmers analyze problems, design algorithms, and debug issues to ensure smooth operation. Their work often requires collaboration with other developers, designers, and stakeholders to meet project goals. With problem-solving skills and attention to detail, they play a crucial role in the technology-driven world, constantly learning new techniques and adapting to evolving tools and trends. Programmers help drive innovation across industries, from gaming to healthcare.",
  items: [
    {
      institution: "Sunmence Tech Company",
      degree: "Front-end Track",
      duration: "2020",
    },
    {
      institution: "Online Course Platform.",
      degree: "Full Stack Development Bootcamp",
      duration: "2021",
    },
    {
      institution: "Online Course ",
      degree: "Full Stack Development Bootcamp",
      duration: "2021-2022",
    },
  ],
};

//skills data

const skills = {
  title: "My skills",
  description:
    "A programmer is someone who writes, tests, and maintains code that makes software, websites, or applications function. They use programming languages like Python, Java, or JavaScript to translate logical solutions into executable instructions. Programmers analyze problems, design algorithms, and debug issues to ensure smooth operation. Their work often requires collaboration with other developers, designers, and stakeholders to meet project goals. With problem-solving skills and attention to detail, they play a crucial role in the technology-driven world, constantly learning new techniques and adapting to evolving tools and trends. Programmers help drive innovation across industries, from gaming to healthcare.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },

    {
      icon: <FaReact />,
      name: "react.js",
    },

    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 md:py-0"
    >
      <div className="px-4 mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full  mx-auto md:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" text-primary/65 font-medium text-medium mx-auto md:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 lg:h-[250px] lg:w-fit"
                        >
                          <span className="text-primary font-bold text-medium">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] font-semibold text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-primary lg:text-left"></span>
                            <p className="opacity-70">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" text-primary/65 font-medium text-medium mx-auto md:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 lg:h-[250px] lg:w-fit"
                        >
                          <span className="text-primary font-bold text-medium">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] font-semibold text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-primary lg:text-left"></span>
                            <p className="opacity-70">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" text-primary/65 font-medium text-medium mx-auto md:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] rounded-xl flex justify-center items-center bg-secondary group">
                              <div className="text-5xl group-hover:text-primary transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}

            <TabsContent
              value="about"
              className="w-full text-center md:text-left mb-4"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className=" text-primary/65 font-medium text-medium mx-auto md:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 mb-4 px-2 gap-y-4 mx-auto md:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center gap-4 md:justify-start lg:flex md:flex-col lg:justify-start  "
                        key={index}
                      >
                        <span className="opacity-80 text-primary">
                          {item.fieldName}
                        </span>
                        <span className="text-medium  font-medium">
                          {item.FieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
