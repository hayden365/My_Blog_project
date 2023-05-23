import React from "react";
import LinkBox from "./LinkBox";
import Logo from "./LogoBox";

export default function LogoContainer() {
	return (
		<section className="flex pt-20">
			<LinkBox />
			<Logo />
		</section>
	);
}
