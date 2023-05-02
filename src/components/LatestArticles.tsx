import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import Image from "next/image";
import { getThreePost, Post } from "@/service/posts";

type Props = {
	posts: Post[];
};

export default async function LatestArticles() {
	const posts = await getThreePost();
	return (
		<BoxSkeleton title="Latest Articles">
			{posts?.map(post => (
				<article key={post.title} className="flex flex-1 mb-8 ">
					<div className="w-24 h-16 overflow-hidden">
						<Image
							src={post.image}
							alt="mini picture"
							width={60}
							height={60}
							className="w-full h-full object-fill"
						/>
					</div>
					<div className="flex flex-col flex-wrap pl-6">
						<h6 className="font-bold text-primary tracking-tight">
							{post.title}
						</h6>
						<span className="text-xs text-fontGray font-normal">
							{post.date.toString()}
						</span>
					</div>
				</article>
			))}
		</BoxSkeleton>
	);
}
