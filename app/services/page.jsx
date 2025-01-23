"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
	{
		num: "01",
		title: "Web App Development",
		description:
			"I specialize in crafting websites designed to skyrocket your business growth, leveraging the robust Laravel Framework and the sleek, modern styles of Tailwind CSS.",
		href: "#",
	},
	{
		num: "02",
		title: "Web Design",
		description:
			"I can transform your dream designs into reality using top frontend frameworks like NextJS, Vue, and Svelte 5, with the added elegance of Tailwind CSS for styling.",
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
							delay: 1.9,
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
								</div>
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								<p className="text-white/60">
									{service.description}
								</p>
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
