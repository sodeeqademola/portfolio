"use client";
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

//motion
import { motion } from "framer-motion";

// info

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+234 706 209 3146",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sodeeqademola0909@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Osogbo, Osun State, Nigeria",
  },
];

const page = () => {
  return (
    <div className="px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
        className="py-6"
      >
        <div>contact page</div>
      </motion.div>
    </div>
  );
};

export default page;
