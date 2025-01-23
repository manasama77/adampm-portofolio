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
		"I am a fullstack developer with 7 years of experience. I have worked with various companies and have experience in various fields. I am a hard worker and always try to improve my skills. I am a fast learner and can work under pressure. I am a responsible person and always try to finish my work on time.",
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
		"I have been working as a fullstack developer for 7 years. I have worked with various companies and have experience in various fields. Here are some of the companies I have worked with.",
	items: [
		{
			company: "PT Sistegra Emran Sentosa",
			position: "Fullstack Web Developer",
			duration: "2024 - Present",
		},
		{
			company: "Freelancer",
			position: "Fullstack Web Developer",
			duration: "2017 - Present",
		},
		{
			company: "PT Jala Lintas Media",
			position: "Web Developer",
			duration: "2022 - 2024",
		},
		{
			company: "KSPPS Baytul Ikhtiar (BAIK)",
			position: "IT Support",
			duration: "2019 - 2020",
		},
		{
			company: "CV Rimsmedia",
			position: "Web Programmer",
			duration: "2017",
		},
		{
			company: "PT KREON",
			position: "Game Operations",
			duration: "2013 - 2017",
		},
		{
			company: "PT Multimedia Arto Sentosa (INTERMIS)",
			position: "Data Entry Operator",
			duration: "2012 - 2013",
		},
		{
			company: "Robokidz",
			position: "Robotic Instructor",
			duration: "2011 - 2012",
		},
		{
			company: "SMP & SMK Informatika Bina Generasi Bogor",
			position: "Honorarium Teacher",
			duration: "2010 - 2011",
		},
		{
			company: "CV Cahaya Berlian Sejati",
			position: "IT Support",
			duration: "2010",
		},
		{
			company: "PT Mitrasoft Global",
			position: "IT Support",
			duration: "2009 - 2010",
		},
		{
			company: "Takaful Mikro Indonesia",
			position: "IT Support",
			duration: "2009",
		},
		{
			company: "Yayasan Peramu",
			position: "IT Support",
			duration: "2008 - 2009",
		},
	],
};

const educations = {
	icon: "/img/resume/cap.svg",
	title: "My Education",
	description:
		"I have a background in multimedia. I studied at SMK Informatika Bina Generasi Bogor. Here are some of the educational institutions I have attended.",
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
		"I have a variety of skills in the field of web development. Here are some of the skills I have.",
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
			icon: <SiMysql />,
			name: "MySQL",
		},
		{
			icon: <SiCodeigniter />,
			name: "Codeigniter",
		},
		{
			icon: <FaLaravel />,
			name: "Laravel",
		},
		{
			icon: <RiNextjsFill />,
			name: "NextJS",
		},
		{
			icon: <RiBootstrapFill />,
			name: "Bootstrap",
		},
		{
			icon: <RiTailwindCssFill />,
			name: "TailwindCSS",
		},
	],
};

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 1.9,
					duration: 0.4,
					ease: "easeIn",
				},
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
								<h3 className="text-4xl font-bold">
									{experiences.title}
								</h3>
								<p className="w-full mx-auto text-white/60 xl:mx-0">
									{experiences.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experiences.items.map(
											(item, index) => {
												return (
													<li
														key={index}
														className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
													>
														<span className="text-accent">
															{item.duration}
														</span>
														<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
															{item.position}
														</h3>
														<div className="flex items-center gap-3">
															<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-white/60">
																{item.company}
															</p>
														</div>
													</li>
												);
											}
										)}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">
									{educations.title}
								</h3>
								<p className="max-w-full mx-auto text-white/60 xl:mx-0">
									{educations.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
										{educations.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">
														{item.duration}
													</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">
															{item.institution}
														</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">
									{skills.title}
								</h3>
								<p className="w-full mx-auto text-white/60 xl:mx-0">
									{skills.description}
								</p>
								<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
									{skills.skillList.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center gap-1 lg:items-start"
											>
												<div className="text-3xl">
													{item.icon}
												</div>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.name}
												</h3>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						<TabsContent value="about" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">
									{aboutMe.title}
								</h3>
								<p className="w-full mx-auto text-white/60 xl:mx-0">
									{aboutMe.description}
								</p>
								<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
									{aboutMe.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex flex-col items-center justify-center gap-1 lg:items-start"
											>
												<div className="text-xl">
													{item.fieldName}
												</div>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.fieldValue}
												</h3>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
