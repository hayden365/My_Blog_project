import React from "react";
import AboutMe from "./AboutMe";
import FollowMe from "./FollowMe";
import LatestArticles from "./LatestArticles";
import TagCloud from "./TagCloud";

export default function RightSection() {
	return (
		<section className="grid col-start-3 col-end-4 pr-0">
			<LatestArticles />
			<TagCloud />
			<FollowMe />
			<AboutMe />
		</section>
	);
}
