import React from "react";
import Image from "next/image";
import TagUi from "../ui/TagUi";
import Link from "next/link";
import { IPost } from "../../../type";

type Props = {
	post: IPost;
	size: "small" | "large";
};

export default function PostBottom({ post, size = "large" }: Props) {
	return (
		<>
			<p
				className={`${
					size === "small" ? "m-5 max-h-36 text-center line-clamp-3" : ""
				} pt-8 text-gray-500`}
			>
				{post.description}
			</p>
			<div className="flex justify-between pt-4">
				<TagUi tags={post.tags} style="text-xs" />
				<Link href={"/author"}>
					<div className="flex group">
						<Image
							src={"/images/profile.jpg"}
							alt="profile"
							width={30}
							height={30}
							className="rounded-full"
						/>
						<div className="pl-4">
							<span className="text-sm text-gray-500 group-hover:text-uRed delay-200 ease-in transition">
								Hyeji Kong
							</span>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}
