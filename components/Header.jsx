import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="py-4 text-white xl:py-4 bg-pink-50/20">
			<div className="container flex items-center justify-between mx-auto">
				{/* LOGO */}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Adam<span className="font-bold text-accent">PM</span>
					</h1>
				</Link>
				{/* DESKTOP NAV & HIRE ME BUTTON */}
				<div className="items-center hidden gap-8 xl:flex">
					<Nav />
					<Link
						href="https://wa.me/6282114578976"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button>Hire me</Button>
					</Link>
				</div>

				{/* MOBILE NAV */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
