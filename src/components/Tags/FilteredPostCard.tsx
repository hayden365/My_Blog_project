import { Post } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
	post: Post;
};

export default function FilteredPostCard({ post }: Props) {
	const { image, title, date, description, categories } = post;
	return (
		<div>
			<div className="flex">
				<div className="w-24 h-24 overflow-hidden relative shrink-0">
					<Image
						src={image}
						alt="post image"
						fill
						sizes="100px"
						className="object-cover"
					/>
				</div>
				<h4 className="font-bold text-primary">{title}</h4>
			</div>
		</div>
	);
}
