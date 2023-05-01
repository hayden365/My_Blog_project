import { Post } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
	posts: Post[];
};

export default function PostList({ posts }: Props) {
	return (
		<div className="grid lg:col-start-1 lg:col-end-3 px-10">
			{posts.map(post => (
				<div className="flex flex-col py-14">
					<div className="flex items-center">
						<Image
							src={post.image}
							alt="post-image"
							width={100}
							height={112}
							className="w-auto h-auto"
						/>
						<div>
							<h3>{post.title}</h3>
							<div></div>
						</div>
					</div>
					<p>{post.description}</p>
				</div>
			))}
		</div>
	);
}
