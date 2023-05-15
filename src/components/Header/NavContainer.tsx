"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navList } from "./TopNavContainer";
import { motion } from "framer-motion";

export default function NavContainer() {
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
		<ul className="relative font-serif hidden md:flex  mx-auto my-8 justify-center text-uPrimary font-medium shadow-md">
			{navList.map(item => (
				<motion.div
					className="flex gap-5 w-fit"
					onHoverStart={item.subnav && toggleHoverMenu}
					onHoverEnd={toggleHoverMenu}
				>
					<li key={item.name} className="button-hover-red">
						<Link href={item.href}>{item.name}</Link>{" "}
						<motion.div
							className="absolute"
							initial="exit"
							animate={isHover ? "enter" : "exit"}
							variants={subMenuAnimate}
						>
							{item.subnav?.map(() => (
								<div>{item.subnav}</div>
							))}
						</motion.div>
					</li>
				</motion.div>
			))}{" "}
		</ul>
	);
}
