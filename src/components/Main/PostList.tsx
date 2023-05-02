import { Post } from "@/service/posts";
import React from "react";
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

type Props = {
	posts: Post[];
};

export default function PostList({ posts }: Props) {
	return (
		<div className="grid lg:col-start-1 lg:col-end-3 px-10 ">
			{posts.map(post => (
				<div
					key={post.title}
					className="flex flex-col w-full lg:max-w-3xl p-14 lg:px-3"
				>
					<PostTop post={post} />
					<PostBottom post={post} />
				</div>
			))}
		</div>
	);
}
