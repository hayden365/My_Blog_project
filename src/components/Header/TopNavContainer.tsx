"use client";
import React, { useEffect } from "react";
import Logo from "./LogoBox";
import Link from "next/link";
import LogoBox from "./LogoBox";

type Props = {
	show: boolean;
};

export const navList = [
	{ name: "Home", href: "/", subnav: [] },
	{ name: "Header Styles", href: "/header-styles", subnav: [] },
	{ name: "Post Features", href: "/posts", subnav: [] },
	{ name: "#Tag", href: "/tag", subnav: [] },
	{ name: "About", href: "/about", subnav: [] },
	{ name: "Portfolio", href: "/portfolio", subnav: [] },
	{ name: "Contact", href: "/contact", subnav: [] },
];

export default function TopNavContainer({ show }: Props) {
	return (
		<>
			{show && (
				<div className="hidden md:flex w-full fixed top-0 z-50 bg-white shadow-md h-16 ">
					<div className="w-full max-w-6xl mx-auto flex justify-between items-center py-2">
						<LogoBox size="text-3xl" />
						<ul className="font-serif flex bg-white gap-5 w-fit px-6 text-uPrimary font-medium">
							{navList.map(item => (
								<li className="hover:text-uRed duration-200" key={item.name}>
									<Link href={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
