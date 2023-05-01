import React from "react";
import FacebookIcon from "../Icon/FacebookIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import RssIcon from "../Icon/RssIcon";
import TwitterIcon from "../Icon/TwitterIcon";

export default function HeaderNav() {
	return (
		<nav className="flex gap-4 items-center w-1/3">
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
	);
}
