import React from "react";
import FacebookIcon from "../icons/FacebookIcon";
import HambergerIcon from "../icons/HambergerIcon";
import InstagramIcon from "../icons/InstagramIcon";
import RssIcon from "../icons/RssIcon";
import TwitterIcon from "../icons/TwitterIcon";

export default function LinkBox() {
	return (
		<>
			<div className="flex lg:hidden w-1/3 items-center">
				<HambergerIcon style="ml-14" size="28" />
			</div>
			<nav className="hidden lg:flex gap-4 items-center w-1/3">
				<a href="https://ko-kr.facebook.com/">
					<FacebookIcon style="text-facebook w-6 h-6" />
				</a>
				<a href="https://twitter.com">
					<TwitterIcon style="text-twitter w-6 h-6" />
				</a>
				<a>
					<InstagramIcon style="text-instagram w-6 h-6" />
				</a>
				<a>
					<RssIcon style="text-rss w-6 h-6" />
				</a>
			</nav>
		</>
	);
}
