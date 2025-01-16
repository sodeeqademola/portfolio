"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-5 h-full mx-auto">
      <div className="h-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          {/* text */}
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl font-semibold">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-primary">Ademola Sodeeq</span>
            </h1>
            <p className="max-w-[500px] font-semibold text-[16px] mb-9 text-opacity-85">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.{" "}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* button and socials */}
              <Button
                variant="outline"
                size="lg"
                className="text-primary uppercase flex items-center gap-2 text-lg rounded-full hover:text-secondary hover:bg-primary transition-all duration-500 "
              >
                <span>
                  {" "}
                  <a href="/images/sodeeq.png" download="sodeeq">
                    Download CV
                  </a>
                </span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 md:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-secondary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0 relative">
            <Photo />
            <motion.div
              initial={{
                opacity: 0,
                boxShadow:
                  "-3px 0 3px rgba(0, 0, 0, 0.2), 3px 0 3px rgba(0, 0, 0, 0.2)",
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
              }}
              className=" rounded-full border-primary border-2 absolute w-[250px] h-[250px] md:w-[300px] lg:w-[400px] xl:w-[420px] md:h-[400px] top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
