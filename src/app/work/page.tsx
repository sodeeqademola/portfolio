"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: 1,
    category: "frontend",
    title: "project 1",
    description:
      "The web app project is designed to provide an intuitive, user-friendly platform for streamlining everyday tasks. It focuses on solving a specific problem, such as task management, data visualization, or online collaboration, depending on the intended user base. The application is built using modern web technologies, including HTML5, CSS3, and JavaScript, with a back-end framework such as Node.js or Django for efficient data processing and storage. The app features responsive design, ensuring optimal performance across various devices. It also integrates with third-party APIs to enhance functionality, offering seamless user experiences while maintaining high security and scalability.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/images/sodeeq.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "The web app project is designed to provide an intuitive, user-friendly platform for streamlining everyday tasks. It focuses on solving a specific problem, such as task management, data visualization, or online collaboration, depending on the intended user base. The application is built using modern web technologies, including HTML5, CSS3, and JavaScript, with a back-end framework such as Node.js or Django for efficient data processing and storage. The app features responsive design, ensuring optimal performance across various devices. It also integrates with third-party APIs to enhance functionality, offering seamless user experiences while maintaining high security and scalability.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/images/sodeeq.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "The web app project is designed to provide an intuitive, user-friendly platform for streamlining everyday tasks. It focuses on solving a specific problem, such as task management, data visualization, or online collaboration, depending on the intended user base. The application is built using modern web technologies, including HTML5, CSS3, and JavaScript, with a back-end framework such as Node.js or Django for efficient data processing and storage. The app features responsive design, ensuring optimal performance across various devices. It also integrates with third-party APIs to enhance functionality, offering seamless user experiences while maintaining high security and scalability.",
    stack: [{ name: "Next js" }, { name: "Tailwnd.css" }],
    image: "/images/sodeeq.png",
    live: "",
    github: "",
  },
];

const page = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    //get current slide index
    const currendtIndex = swiper.activeIndex;

    //update Project state based on current slide index
    setProject(projects[currendtIndex]);
  };

  return (
    <div className="px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
        className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
      >
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}

              <p className="opacity-80 font-normal ">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl font-bold text-primary" key={index}>
                      {item.name}

                      {/* remove the last comment */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-primary/30"></div>

              {/* buttons */}

              <div className="flex items-center gap-4">
                {/* live project */}

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-50 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-50 flex justify-center items-center group">
                        <BsGithub className="text-3xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center rounded items-center bg-primary/70
                    "
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-secondary/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain rounded"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider botton */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between md:w-max  md:justify-none rounded"
                btnStyles={
                  "bg-primary/90 text-secondary font-bold hover:bg-primary-hover hover:text-secondary/70 text-[30px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded"
                }
              />
            </Swiper>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
