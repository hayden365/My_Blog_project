import BoxSkeleton from "@/components/BoxSkeleton";
import AdjacentPostCard from "@/components/PostCard/AdjacentPostCard";
import PostContent from "@/components/PostCard/PostContent";
import RightSection from "@/components/RightSection";
import { getPostData } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
	params: {
		slug: string;
	};
};

export default async function PostPage({ params: { slug } }: Props) {
	const post = await getPostData(slug);
	const { title, path, next, prev } = post;
	return (
		<article className="grid grid-cols-1 lg:grid-cols-4">
			<div className="relative grid lg:col-start-1 lg:col-end-4 pr-10 mb-[60px]">
				<div className="flex justify-center h-[400px] overflow-hidden">
					<Image
						src={`/images/${path}.jpg`}
						alt={title}
						width={700}
						height={400}
						priority
						quality={75}
						className="object-cover"
					/>
				</div>
				<PostContent post={post} />
				<BoxSkeleton title="Adjacent Post">
					<section className="flex flex-col lg:flex-row gap-3">
						{prev && <AdjacentPostCard post={prev} />}
						{next && <AdjacentPostCard post={next} />}
					</section>
				</BoxSkeleton>
			</div>
			<RightSection grid="lg:col-start-4 lg:col-end-5" />
		</article>
	);
}
