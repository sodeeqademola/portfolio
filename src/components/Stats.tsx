"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 6,
    text: "Years of experience",
  },
  {
    num: 16,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 460,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <div className=" pb-12 md:pt-0 md:pb-0">
      <div className="px-4 mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className=" flex flex-1 gap-4 items-center justify-center md:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={7}
                  delay={2}
                  className="text-4xl md:text-6xl font-extrabold"
                />
                <p
                  className={
                    // `${
                    //     item.text.length < 15 ? "max-w-[150px]" : "max-w-[150px]"
                    //   }

                    " leading-snug text-opacity-80"
                  }
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
