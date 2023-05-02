import React from "react";
import Image from "next/image";
import { Post } from "@/service/posts";
import formatDate from "@/utils/formatDate";
import BubbleIcon from "../Icon/BubbleIcon";
import FireIcon from "../Icon/FireIcon";

type Props = {
	post: Post;
};

export default function PostTop({ post }: Props) {
	return (
		<div className="flex gap-8 items-center">
			<div className="relative min-w-max w-52 h-40 overflow-hidden border border-white z-10">
				<Image
					src={post.image}
					alt="post-image"
					width={140}
					height={140}
					className="absolute w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col">
				<h3 className="text-base md:text-[28px] md:leading-tight font-bold text-primary m-auto">
					{post.title}
				</h3>
				<div className="font-serif flex gap-2 text-sm pt-2 text-gray-500">
					<span className="">{formatDate(post.date.toString())}</span>
					<span className="flex gap-1 ">
						<BubbleIcon style="w-[18px] h-[18px] text-uRed" />
						{post.comments}
					</span>
					<span className="flex gap-1 ">
						<FireIcon style="w-[18px] h-[18px] text-uRed" />
						{post.likes}
					</span>
				</div>
			</div>
		</div>
	);
}
