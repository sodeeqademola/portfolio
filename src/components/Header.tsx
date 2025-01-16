"use client";
import Link from "next/link";
import React, { useState } from "react";
// import { ModeToggle } from "./ThoggleButtle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ThoggleButtle";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  const [hovered, sethovered] = useState(false);
  const [hovered1, sethovered1] = useState(false);
  const [hovered2, sethovered2] = useState(false);
  const [hovered3, sethovered3] = useState(false);
  const [hovered4, sethovered4] = useState(false);
  const [hovered5, sethovered5] = useState(false);

  //pathname
  const pathName = usePathname();

  return (
    <header className="px-4 mx-auto">
      <div className=" ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-2xl font-extrabold" href="#">
              <span className="sr-only">Home</span>
              <span className="text-primary">Supreme</span>
            </Link>
          </div>

          {/* nav list items */}

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <div className="flex items-center gap-6 text-sm">
                <motion.div
                  className="flex flex-col"
                  onHoverStart={() => sethovered(true)}
                  onHoverEnd={() => sethovered(false)}
                >
                  <Link
                    className={`text-foreground transition hover:text-foreground/75 text-medium font-medium capitalize ${
                      pathName === "/"
                        ? "border-b-4 border-primary rounded"
                        : ""
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                  <div
                    className={`${
                      pathName === "/"
                        ? ""
                        : `border-b-4 border-primary rounded-xl transition-all duration-700 ease-in-out ${
                            hovered ? "w-[90%]" : "w-0"
                          }`
                    }`}
                  ></div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  onHoverStart={() => sethovered1(true)}
                  onHoverEnd={() => sethovered1(false)}
                >
                  <Link
                    className={`text-foreground transition hover:text-foreground/75 text-medium font-medium capitalize ${
                      pathName === "/services"
                        ? "border-b-4 border-primary rounded"
                        : ""
                    }`}
                    href="/services"
                  >
                    Services
                  </Link>
                  <div
                    className={`${
                      pathName === "/services"
                        ? ""
                        : `border-b-4 border-primary rounded-xl transition-all duration-700 ease-in-out ${
                            hovered1 ? "w-[90%]" : "w-0"
                          }`
                    }`}
                  ></div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  onHoverStart={() => sethovered2(true)}
                  onHoverEnd={() => sethovered2(false)}
                >
                  <Link
                    className={`text-foreground transition hover:text-foreground/75 text-medium font-medium capitalize ${
                      pathName === "/resume"
                        ? "border-b-4 border-primary rounded"
                        : ""
                    }`}
                    href="/resume"
                  >
                    Resume
                  </Link>
                  <div
                    className={`${
                      pathName === "/resume"
                        ? ""
                        : `border-b-4 border-primary rounded-xl transition-all duration-700 ease-in-out ${
                            hovered2 ? "w-[90%]" : "w-0"
                          }`
                    }`}
                  ></div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  onHoverStart={() => sethovered5(true)}
                  onHoverEnd={() => sethovered5(false)}
                >
                  <Link
                    className={`text-foreground transition hover:text-foreground/75 text-medium font-medium capitalize ${
                      pathName === "/work"
                        ? "border-b-4 border-primary rounded"
                        : ""
                    }`}
                    href="/work"
                  >
                    Work
                  </Link>
                  <div
                    className={`${
                      pathName === "/work"
                        ? ""
                        : `border-b-4 border-primary rounded-xl transition-all duration-700 ease-in-out ${
                            hovered5 ? "w-[90%]" : "w-0"
                          }`
                    }`}
                  ></div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  onHoverStart={() => sethovered3(true)}
                  onHoverEnd={() => sethovered3(false)}
                >
                  <Link
                    className={`text-foreground transition hover:text-foreground/75 text-medium font-medium capitalize ${
                      pathName === "/contact"
                        ? "border-b-4 border-primary rounded"
                        : ""
                    }`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <div
                    className={`${
                      pathName === "/contact"
                        ? ""
                        : `border-b-4 border-primary rounded-xl transition-all duration-700 ease-in-out ${
                            hovered3 ? "w-[90%]" : "w-0"
                          }`
                    }`}
                  ></div>
                </motion.div>

                {/* <motion.div
                  className="flex flex-col"
                  onHoverStart={() => sethovered4(true)}
                  onHoverEnd={() => sethovered4(false)}
                >
                  <Link
                    className={`text-foreground transition hover:text-foreground/75 text-medium font-medium  ${
                      pathName === "/hireme"
                        ? "border-b-4 border-primary rounded"
                        : ""
                    }`}
                    href="/hireme"
                  >
                    Hire me
                  </Link>
                  <div
                    className={`${
                      pathName === "/hireme"
                        ? ""
                        : `border-b-4 border-primary rounded-xl transition-all duration-700 ease-in-out ${
                            hovered4 ? "w-[90%]" : "w-0"
                          }`
                    }`}
                  ></div>
                </motion.div> */}
                <Button className="bg-primary font-semibold  text-[15px] text-secondary hover:text-secondary hover:bg-primary/80 hover:font-semibold  transition-all">
                  {" "}
                  Hire me
                </Button>
              </div>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <ModeToggle />
              </div>

              <div className="block md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
