import React from "react";
import Image from "next/image";
import TagUi from "../ui/TagUi";
import { Post } from "@/service/posts";
import Link from "next/link";

type Props = {
	post: Post;
};

export default function PostBottom({ post }: Props) {
	return (
		<>
			<p className="pt-8 text-gray-500">{post.description}</p>
			<div className="flex justify-between pt-4">
				<TagUi tags={post.categories} size="text-xs text-gray-500" />
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
								Jonathan Doe
							</span>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}
