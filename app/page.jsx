import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
	return (
		<section className="h-full ">
			<div className="container h-full mx-auto">
				<div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
					<div className="order-2 text-center xl:text-left xl:order-none">
						<span className="text-xl">Web Developer</span>
						<h1 className="mb-6 h1">
							Hello I&apos;m <br />
							<span className="text-accent">
								Adam Prasetya Malik
							</span>
						</h1>
						<p className="max-w-[500px mb-9 text-white/80">
							I excel at crafting web applications using Laravel,
							prioritizing user needs and delivering projects on
							time.
						</p>
						<div className="flex flex-col items-center gap-8 xl:flex-row">
							<Link href="/Adam-PM-Profile.pdf" target="_blank">
								<Button
									variant="outline"
									size="lg"
									className="flex items-center gap-2 uppercase"
								>
									<span>See my CV</span>
									<FiDownload className="text-xl" />
								</Button>
							</Link>
							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					<div className="order-1 mt-8 mb-4 xl:order-none xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

export default Home;
