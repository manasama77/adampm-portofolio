"use client";

import { FaLaravel, FaPhp } from "react-icons/fa6";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiBootstrapFill,
} from "react-icons/ri";
import { SiCodeigniter, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const aboutMe = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem ullam officiis nisi et amet a architecto. Recusandae, perspiciatis corrupti.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Adam Prasetya Malik",
    },
    {
      fieldName: "Phone",
      fieldValue: "+62 821 1457 8976",
    },
    {
      fieldName: "Experience",
      fieldValue: "+7 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "adam.pm77@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia, English, Sunda",
    },
  ],
};

const experiences = {
  icon: "/img/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi odit, architecto in voluptas impedit ullam numquam magnam sint dignissimos harum cum quos distinctio, accusantium facilis.",
  items: [
    {
      company: "PT Sistegra Emran Sentosa",
      position: "Fullstack Developer",
      duration: "2024 - Present",
    },
    {
      company: "PT Jala Lintas Media",
      position: "Fullstack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "PT Jala Lintas Media",
      position: "Fullstack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "PT Jala Lintas Media",
      position: "Fullstack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "PT Jala Lintas Media",
      position: "Fullstack Developer",
      duration: "2022 - 2024",
    },
  ],
};

const educations = {
  icon: "/img/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sunt in sint fuga ullam alias quasi, magnam eum repudiandae eveniet",
  items: [
    {
      institution: "SMK Informatika Bina Generasi Bogor",
      degree: "Multimedia",
      duration: "2005 - 2007",
    },
  ],
};

const skills = {
  title: "My Skill",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, at.",
  skillList: [
    {
      icon: <RiHtml5Fill />,
      name: "HTML5",
    },
    {
      icon: <RiCss3Fill />,
      name: "CSS3",
    },
    {
      icon: <RiJavascriptFill />,
      name: "Javascript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiCodeigniter />,
      name: "Codeigniter",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <RiNextjsFill />,
      name: "NextJS",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "TailwindCSS",
    },
    {
      icon: <RiBootstrapFill />,
      name: "Bootstrap",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        delay: 2.4,
        duration: 0.4,
        ease: "easeIn",
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educations.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educations.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educations.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
