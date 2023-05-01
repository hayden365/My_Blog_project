import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import Image from "next/image";
import latestArticledJson from "../json/latestArticles.json";
import { Post } from "@/service/posts";

type Props = {
	posts: Post[];
};

export default function LatestArticles({ posts }: Props) {
	return (
		<BoxSkeleton title="Latest Articles">
			{posts?.map(post => (
				<article key={post.title} className="flex flex-1 mb-8 ">
					<Image
						src={post.image}
						alt="mini picture"
						width={60}
						height={64}
						className="object-cover w-auto h-auto"
					/>
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
