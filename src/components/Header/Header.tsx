"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import LogoContainer from "./LogoContainer";
import TopNavContainer from "./TopNavContainer";
import NavContainer from "./NavContainer";

export default function Header() {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<>
			<TopNavContainer show={!isInView} />
			<header className="max-w-5xl flex flex-col mx-auto">
				<div ref={ref}>
					<LogoContainer />
					<NavContainer />
				</div>
			</header>
		</>
	);
}
