import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../type";

type Props = {
	post: IPost;
};

export default function AdjacentPostCard({ post }: Props) {
	return (
		<Link href={`/posts/${post.postId}`} className="relative w-full max-h-56">
			<div className="flex relative shadow-xl rounded-md top-0 hover:-top-3 hover:transition-all hover:duration-500 hover:ease-in-out">
				<div className="flex shrink-0 w-1/2 max-w-[150px] h-[15vh] overflow-hidden rounded-lg">
					{post.postImage && (
						<Image
							src={post.postImage}
							alt={post.slug}
							width={150}
							height={100}
							className="object-cover"
						/>
					)}
				</div>
				<div className="w-1/2 text-center m-auto">
					<h3 className="text-lg text-uPrimary font-semibold">{post.title}</h3>
				</div>
			</div>
		</Link>
	);
}
