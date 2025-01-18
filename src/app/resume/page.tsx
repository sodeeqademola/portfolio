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
      position: "Web App Full Stack Developr",
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
      company: "SuperJara Tech Studio Academy",
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
      resume page
    </motion.div>
  );
};

export default page;
