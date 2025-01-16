"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] md:w-[300px] lg:w-[400px] xl:w-[420px] md:h-[400px] mix-blend-normal "
        >
          <Image
            src="/images/sodeeq.png"
            alt="Sodeeq Image"
            priority
            quality={100}
            className="rounded-full object-contain"
            fill
          />
        </motion.div>

        {/* circle */}
      </motion.div>
    </div>
  );
};

export default Photo;
