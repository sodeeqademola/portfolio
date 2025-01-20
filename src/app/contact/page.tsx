"use client";
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

//motion
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col md:flex-row gap-[30px]">
          {/* form */}
          <div className="md:h-[54%] order-2 md:order-none">
            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
              <h3 className="text-4xl text-primary font-semibold">
                Let's work together
              </h3>
              <p className="opacity-80 ">
                Let's collaborate to bring fresh ideas to life! Together, we can
                combine our strengths, creativity, and expertise to achieve
                remarkable results. Let's make it happen!
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/* select */}

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="webApp">
                        Web App Development
                      </SelectItem>
                      <SelectItem value="mobileApp">
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value="seo">
                        SEO (search engine optimization)
                      </SelectItem>
                    </SelectGroup>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />

              {/*  button */}
              <Button size="sm" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
