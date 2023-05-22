import React from "react";
import LinkBox from "./LinkBox";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Logo from "./LogoBox";

export default function LogoContainer() {
	return (
		<section className="flex pt-20">
			<LinkBox />
			<Logo />
			<div className="flex w-1/3 justify-end">
				<div className="w-11 h-11 rounded-full bg-uRed flex items-center">
					<HiMagnifyingGlass className="mx-auto text-white" />
				</div>
			</div>
		</section>
	);
}
