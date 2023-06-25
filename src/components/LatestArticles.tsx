import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import Image from "next/image";
import Link from "next/link";
import formatDate from "@/utils/formatDate";

export default async function LatestArticles() {
	// const posts = await getThreePost();

	return (
		<BoxSkeleton title="Latest Articles">
			{/* {posts?.map(post => (
				<Link href={`/posts/${post.path}`} key={post.title}>
					<article className="flex flex-1 mb-8 ">
						<div className="w-16 h-16 rounded-sm overflow-hidden relative shrink-0">
							<Image
								src={post.image}
								alt="mini picture"
								sizes="64px"
								style={{ objectFit: "cover" }}
								fill={true}
							/>
						</div>

						<div className="flex flex-col flex-wrap pl-6">
							<h6 className="font-bold text-primary tracking-tight">
								{post.title}
							</h6>
							<span className="text-xs text-fontGray font-normal">
								{formatDate(post.date)}
							</span>
						</div>
					</article>
				</Link>
			))} */}
		</BoxSkeleton>
	);
}
