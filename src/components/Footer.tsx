import React from "react";
import LatestArticles from "./LatestArticles";
import TagCloud from "./TagCloud";
import FollowMe from "./FollowMe";
import AboutMe from "./AboutMe";
import FootLogo from "./FootLogo";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="max-w-screen-2xl mx-auto">
			<section className="grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 gap-12 mx-9">
				<LatestArticles />
				<TagCloud />
				<FollowMe />
				<AboutMe />
			</section>
			<FootLogo />
		</footer>
	);
};

export default Footer;
