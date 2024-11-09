"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum soluta quos magni tempore beatae fugiat dolore.",
    href: "#",
  },
  {
    num: "02",
    title: "System Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum soluta quos magni tempore beatae fugiat dolore.",
    href: "#",
  },
  {
    num: "03",
    title: "IT Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum soluta quos magni tempore beatae fugiat dolore.",
    href: "#",
  },
  {
    num: "04",
    title: "Teaching",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum soluta quos magni tempore beatae fugiat dolore.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center flex-1 gap-6 group"
              >
                {/* top */}
                <div className="flex items-center justify-between w-full group">
                  <h1 className="text-5xl font-extrabold transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </h1>
                  <div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-3xl text-primary" />
                    </Link>
                  </div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="w-full border-b border-white"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
