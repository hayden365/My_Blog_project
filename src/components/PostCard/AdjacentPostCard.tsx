import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	post: Post;
	type: "prev" | "next";
};

export default function AdjacentPostCard({
	post: { path, title, description },
	type,
}: Props) {
	return (
		<Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
			<Image
				className="w-full opacity-40"
				src={`/images/${path}.jpg`}
				alt={title}
				width={150}
				height={100}
			/>
		</Link>
	);
}
