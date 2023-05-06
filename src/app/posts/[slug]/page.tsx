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
		<article className="grid grid-cols-1 lg:grid-cols-3">
			<div className="relative grid lg:col-start-1 lg:col-end-3 pr-10 mb-[60px]">
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
				<section>
					{prev && <AdjacentPostCard post={prev} type="prev" />}
					{next && <AdjacentPostCard post={next} type="next" />}
				</section>
			</div>
			<RightSection />
		</article>
	);
}
