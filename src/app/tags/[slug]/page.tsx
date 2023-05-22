import PostListContainer from "@/components/main/PostListContainer";
import { getAllPosts, Post } from "@/service/posts";
import tagFindHandler from "@/utils/tagFindHandler";
import React from "react";

type Props = {
	params: {
		slug: string;
	};
};

export default async function TagsPage({ params: { slug } }: Props) {
	const posts: Array<Post> = await getAllPosts();
	const categoryInfo = tagFindHandler([slug]);
	const filtered = posts.filter(post =>
		post.categories.map(category => category === slug),
	);
	return (
		<>
			<section className="flex w-full p-12 shadow-lg justify-between items-center ">
				<div>
					<h3 className="capitalize text-3xl font-bold">
						<span className={`${categoryInfo[0].color}`}>#</span>
						{slug}
					</h3>
					<span className="flex text-gray-500">
						{filtered.length}
						<hr
							style={{
								color: "#FF4B60",
								backgroundColor: "#FF4B60",
								width: 8,
								height: 3,
								margin: "auto 10px",
							}}
						/>
						Articles
					</span>
				</div>
				<p className="max-w-[600px] text-gray-500">{categoryInfo[0].info}</p>
			</section>
			<PostListContainer posts={filtered} size="small" />
		</>
	);
}
