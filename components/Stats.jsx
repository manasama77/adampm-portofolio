"use client";

import CountUp from "react-countup";

const stats = [
	{
		num: 7,
		text: "Years of experience",
	},
	{
		num: 32,
		text: "Completed projects",
		/* 
        5 waktu logistic
        Attendance System for Koperasi Syariah Baytul Ikhtiar
        Kasir for Ananda Mart
        Aplication Survey Management for Koperasi Syariah Baytul Ikhtiar
        Bioner
        Pekgo Apparel
        TR Enggine Test Bench Tracebility for Toyota Motor Manufacturing Indonesia
        Andon Stamping System Monitor for Toyota Motor Manufacturing Indonesia
        Landing Page for Wanammi Catering
        Landing Page for Indococointernational
        Multi Level Marketing + Compounding system for CryptoPerty
        Takeda PLC monitoring system for Toyota Motor Manufacturing Indonesia
        Landing Page for Bnetfit Internet
        Landing Page for Netvolve Internet
        Landing Page for Jakinet
        Landing Page for PT Jala Lintas Media
        Landing Page for Bnetfit Business
        Landing Page for Bnetfit Air
        Registration System for Persatuan Golf APJII
        Registration System System for APJATEL
        Registration System for Poundfit with Bnetfit
        Job Fair System for PT Jala Lintas Media
        Inventory App for PT Jala Lintas Media
        Landing page Hosting JLM for PT Jala Lintas Media
        Greenexpressone Booking App for Greenexpressone
        Landing Page Hotspot + Monitoring App for PT Jala Linta Media
        Landing Page for Komunitas Prakerja
        Landing Page for Coconutrate
        Attendance System for Hybon Composite
        Landing page for Sinergi Rodika
        Landing page for NU Energy Nutrition
        FTTH Billing System for PT Sistegra Emran Sentosa
        */
	},
	{
		num: 10,
		text: "Technologies mastered",
		/*
        HTML5
        CSS
        JavaScript
        PHP
        MySQL
        Codeigniter
        Laravel
        Tailwind CSS
        jQuery
        */
	},
	{
		num: 353,
		text: "Code commit",
	},
];

const Stats = () => {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-6 max-w-[80px] mx-auto xl:max-w-none">
					{stats.map((item, index) => {
						return (
							<div
								key={index}
								className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
							>
								<CountUp
									end={item.num}
									duration={5}
									delay={2}
									className="text-4xl font-extrabold xl:text-6xl"
								/>
								<p
									className={`${
										item.text.length < 15
											? "max-w-[100px]"
											: "max-w-[150px]"
									} leading-snug text-white/80`}
								>
									{item.text}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Stats;
