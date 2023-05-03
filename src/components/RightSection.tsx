import React from "react";
import AboutMe from "./AboutMe";
import FollowMe from "./FollowMe";
import LatestArticles from "./LatestArticles";
import TagCloud from "./TagCloud";
import { Post } from "@/service/posts";

type Props = {
	posts: Post[];
};

export default function RightSection() {
	return (
		<section className="hidden lg:grid lg:col-start-3 lg:col-end-4 pr-0 lg:content-start">
			{/*@ts-expect-error Server Component*/}
			<LatestArticles />
			<TagCloud style="text-s" />
			<FollowMe />
		</section>
	);
}
