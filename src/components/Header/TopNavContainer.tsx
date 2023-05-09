"use client";
import React, { useState } from "react";
import Link from "next/link";
import LogoBox from "./LogoBox";
import { default_tags } from "../TagCloud";
import { motion } from "framer-motion";

type Props = {
	show: boolean;
};

export const navList = [
	{ name: "Home", href: "/", subnav: [] },
	{ name: "Header Styles", href: "/header-styles", subnav: [] },
	{ name: "Post Features", href: "/posts", subnav: [] },
	{ name: "#Tag", href: "/tags/lifestyle", subnav: [] },
	{ name: "Author", href: "/author", subnav: [] },
	{ name: "Portfolio", href: "/portfolio", subnav: [] },
	{ name: "Contact", href: "/contact", subnav: default_tags },
];

export default function TopNavContainer({ show }: Props) {
	const [isHover, setIsHover] = useState(false);
	const toggleHoverMenu = () => {
		setIsHover(!isHover);
	};
	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.5,
			},
			display: "block",
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
			transitionEnd: {
				display: "none",
			},
		},
	};
	return (
		<>
			{show && (
				<div className="hidden md:flex w-full fixed top-0 z-50 bg-white shadow-md h-16 ">
					<div className="w-full max-w-6xl mx-auto flex justify-between items-center py-2">
						<LogoBox size="text-3xl" />
						<ul className="font-serif flex bg-white gap-5 w-fit px-6 text-uPrimary font-medium">
							<motion.div
								className="menu-item"
								onHoverStart={toggleHoverMenu}
								onHoverEnd={toggleHoverMenu}
							>
								{navList.map(item => (
									<li className="hover:text-uRed duration-200" key={item.name}>
										<Link href={item.href}>{item.name}</Link>
										<motion.div
											className="sub-menu"
											initial="exit"
											animate={isHover ? "enter" : "exit"}
											variants={subMenuAnimate}
										>
											{item.subnav &&
												item.subnav.map(() => <div>{item.subnav}</div>)}
										</motion.div>
									</li>
								))}
							</motion.div>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
