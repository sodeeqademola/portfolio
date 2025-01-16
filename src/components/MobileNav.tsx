"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { Button } from "./ui/button";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  // Get the pathName
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col text-secondary">
        {/* logo */}

        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href={"/"}>
            <SheetTitle className="text-secondary leading-6 tracking-wide text-3xl font-bold">
              Supreme
            </SheetTitle>
          </Link>
        </div>
        {/* nav */}

        <nav className="flex flex-col justify-center items-center gap-5">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <Link
                  className={` ${
                    link.path === pathName && "text-secondary border-b-4 "
                  }text-xl capitalize font-semibold hover:border-b-4 rounded transition-all `}
                  href={link.path}
                  key={index}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
          <Button className="bg-secondary font-semibold text-primary hover:text-primary hover:bg-secondary/80 hover:text-medium hover:font-medium transition-all duration-500">
            {" "}
            Hire me
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
