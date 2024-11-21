"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
	return (
		<div className="relative w-full h-full">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.4,
					delay: 2,
					ease: "easeIn",
				}}
			>
				{/* Image */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.4,
						delay: 2.4,
						ease: "easeInOut",
					}}
					className="w-[298px] h-[298px] xl:w-[470px] xl:h-[470px] mix-blend-screen absolute"
				>
					<Image
						src="/img/adampm-pp.png"
						alt="adam prasetya malik"
						priority
						quality={100}
						fill
						className="object-contain"
					/>
				</motion.div>

				{/* Circle */}
				<motion.svg
					className="w-[300px] xl:w-[473px] h-[300px] xl:h-[473px] opacity-40"
					fill="transparent"
					viewBox="0 0 473 473"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.circle
						cx="243"
						cy="243"
						r="228"
						stroke="#00ff99"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{
							strokeDasharray: [
								"15 120 25 25",
								"16 25 92 72",
								"4 250 22 22",
							],
							rotate: [0, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
