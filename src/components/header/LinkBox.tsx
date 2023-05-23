import React from "react";
import HambergerIcon from "../icons/HambergerIcon";
import TistoryIcon from "../icons/TistoryIcon";
import RssIcon from "../icons/RssIcon";
import GithubIcon from "../icons/GithubIcon";

export default function LinkBox() {
	return (
		<>
			<div className="flex lg:hidden w-1/3 items-center">
				<HambergerIcon style="ml-14" size="28" />
			</div>
			<nav className="hidden lg:flex gap-4 items-center w-1/3">
				<GithubIcon style="text-github w-6 h-6" />
				<TistoryIcon style="text-tistory w-6 h-6" />
				<RssIcon style="text-rss w-6 h-6" />
			</nav>
		</>
	);
}
