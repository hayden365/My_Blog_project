import React from "react";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import BubbleIcon from "../icons/BubbleIcon";
import FireIcon from "../icons/FireIcon";
import Link from "next/link";
import { IPost } from "../../../type";

type Props = {
	post: IPost;
	size: "small" | "large";
};

export default function PostTop({ post, size = "large" }: Props) {
	return (
		<Link href={`/posts/${post.postId}`}>
			<div className="flex gap-8 items-center">
				<div
					className={`relative overflow-hidden shrink-0 border border-white z-10 ${
						size === "small" ? "w-24 h-24" : " w-40 h-40"
					}`}
				>
					{post?.postImage && (
						<Image
							src={post.postImage}
							alt="post-image"
							fill
							sizes="160px"
							className="object-cover"
						/>
					)}
				</div>
				<div className="flex flex-col">
					<h3
						className={`text-base md:leading-tight font-bold text-primary m-auto ${
							size === "small" ? "text-[20px]" : "text-[20px] md:text-[28px]"
						}`}
					>
						{post.title}
					</h3>
					{size === "small" ? (
						""
					) : (
						<div className="font-serif flex gap-2 text-sm pt-2 text-gray-500">
							<span className="">{formatDate(post.createdAt)}</span>
							<span className="flex gap-1 ">
								<BubbleIcon style="w-[18px] h-[18px] text-uRed" />
								{post.commentsLength}
							</span>
						</div>
					)}
				</div>
			</div>
			{size === "small" ? (
				<div className="justify-center font-serif flex gap-2 text-sm pt-2 text-gray-500">
					<span className="">{formatDate(post.createdAt)}</span>
					<span className="flex gap-1 ">
						<BubbleIcon style="w-[18px] h-[18px] text-uRed" />
						{post.commentsLength}
					</span>
				</div>
			) : (
				""
			)}
		</Link>
	);
}
