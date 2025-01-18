"use client";

import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I'm involved in the process of building and maintaining websites and web applications which involves various tasks such as designing the user interface (UI), writing code for functionality (using languages like HTML, CSS, and JavaScript, e.t.c), managing databases, and ensuring the website works smoothly across different devices and browsers. I work in front-end development, which focuses on the visual elements and user experience, and also in back-end development, which handles the server, database, and application logic. so, I'm a Full-stack developer who covers both front-end and back-end work.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "I am a mobile app developer which involves the process of creating software applications designed to run on mobile devices like smartphones and tablets.I code for different platforms, such as iOS and Android, using languages React Native, as a full stack developer handling both frot-end and back-end. The development process includes designing user interfaces, integrating features, testing, and ensuring performance and security. Mobile apps can be native (built specifically for one platform) or cross-platform (working on multiple platforms). The goal is to deliver a smooth, user-friendly experience that meets the needs of the target audience.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "I offer SEO development which is the process of optimizing a website’s structure, content, and technical aspects to improve its visibility and ranking on search engines like Google. This includes on-page SEO (optimizing content, meta tags, and keywords), off-page SEO (building quality backlinks), and technical SEO (improving site speed, mobile-friendliness, and crawlability). Effective SEO development helps increase organic traffic, improve user experience, and enhance a website's overall performance, leading to higher search engine rankings and better online visibility",
    href: "",
  },
];

const page = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 md:py-0 mb-2">
      <div className="px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col just gap-4 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold group-hover:text-primary transition-all group-hover:primary duration-500  ">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full group-hover:bg-primary  text-primary bg-secondary-50 group-hover:text-secondary transition-all flex justify-center items-center duration-500 hover:-rotate-45"
                    href={service.href}
                  >
                    <BsArrowDownRight className=" text-3xl  hover:text-secondary" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                {/* border */}
                <div className="text-justify  font-medium opacity-80 border-b-2 border-primary/45 w-full pb-2">
                  {" "}
                  {service.description}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default page;
