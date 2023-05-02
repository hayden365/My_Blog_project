import { Post } from "@/service/posts";
import Image from "next/image";
import React from "react";
import TagUi from "../ui/TagUi";

type Props = {
	posts: Post[];
};

export default function PostList({ posts }: Props) {
	return (
		<div className="grid lg:col-start-1 lg:col-end-3 px-10">
			{posts.map(post => (
				<div key={post.title} className="flex flex-col py-14">
					<div className="flex items-center">
						<div className="w-28 h-28">
							<Image
								src={post.image}
								alt="post-image"
								width={114}
								height={114}
								className="w-auto h-auto"
							/>
						</div>
						<div className="flex flex-col">
							<h3>{post.title}</h3>
							<div className="flex gap-2">
								<span>{post.date.toString()}</span>
								<span>{post.comments}</span>
								<span>{post.likes}</span>
							</div>
						</div>
					</div>
					<p>{post.description}</p>
					<div className="flex justify-between">
						<div className="flex">
							<TagUi tags={post.categories} />
						</div>
						<span>
							<div className="flex">
								<Image
									src={"/images/profile.jpg"}
									alt="profile"
									width={30}
									height={30}
									className="rounded-full"
								/>
								<div className="pl-4">
									<span className="text-sm text-primary">Jonathan Doe</span>
								</div>
							</div>
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
