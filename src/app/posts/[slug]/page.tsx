import AdjacentPostCard from "@/components/PostCard/AdjacentPostCard";
import PostContent from "@/components/PostCard/PostContent";
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
		<article>
			<div className="relative w-full h-full">
				<Image
					src={`/images/${path}.jpg`}
					alt={title}
					fill
					priority
					sizes="33vw"
					quality={75}
					className="object-cover w-full h-full "
				/>
			</div>
			<PostContent post={post} />
			<section>
				{prev && <AdjacentPostCard post={prev} type="prev" />}
				{next && <AdjacentPostCard post={next} type="next" />}
			</section>
		</article>
	);
}
