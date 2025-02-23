/* eslint-disable no-unused-vars */
import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/assets/myProfile.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex  flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-3xl font-thin tracting-tight lg:text-7xl"
            >
              Om Gupta
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl lg:text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-72 m-auto lg:w-80 lg:ml-32">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
