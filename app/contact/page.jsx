"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "+62 821 1457 8976",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "adam.pm77@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description:
			"Jl. Raya Ciomas Gg.Saleh Rt3 Rw5 No.39/A Ciomas, Padasuka, Bogor, Jawa Barat, Indonesia 16610",
	},
];

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] roundex-xl">
							<h3 className="text-4xl text-accent">
								Let&apos;s work together
							</h3>
							<p className="text-white/60 ">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Facilis magnam molestias optio
								praesentium quibusdam assumenda quis eaque
								consectetur tempore quas.
							</p>

							{/* input */}
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<Input
									type="firstname"
									placeholder="Firstname"
								/>
								<Input type="lastname" placeholder="Lastname" />
								<Input
									type="email"
									placeholder="Email Address"
								/>
								<Input
									type="phone"
									placeholder="Phone Number"
								/>
							</div>

							{/* select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											Select a service
										</SelectLabel>
										<SelectItem value="est">
											Web Development
										</SelectItem>
										<SelectItem value="cst">
											UI/UX Design
										</SelectItem>
										<SelectItem value="mst">
											Logo Design
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							{/* textarea */}
							<Textarea
								className="h-[200px]"
								placeholder="Type your message here."
							/>

							{/* button */}
							<Button size="md" className="max-w-40">
								Send Message
							</Button>
						</form>
					</div>

					{/* info */}
					<div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li
										key={index}
										className="flex items-center gap-6"
									>
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">
												{item.icon}
											</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">
												{item.title}
											</p>
											<h3 className="text-xl">
												{item.description}
											</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;