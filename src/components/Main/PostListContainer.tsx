"use client";
import { Post } from "@/service/posts";
import Link from "next/link";
import React, { useState } from "react";
import PaginateUi from "../ui/PaginateUi";
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

type Props = {
	posts: Post[];
};

type Propsfunc = {
	posts: Post[];
	postLengthPerPage: number;
	activePage: number;
};

export default function PostListContainer({ posts }: Props) {
	const [activePage, setActivePage] = useState(0);

	const postLengthPerPage = 4;
	const totalPage = Math.floor(posts.length / postLengthPerPage);

	const paginatePost = pagination({ posts, postLengthPerPage, activePage });

	return (
		<ul className="grid lg:col-start-1 lg:col-end-3 pr-10 mb-[60px]">
			{paginatePost.map(post => (
				<li key={post.title} className="flex flex-col mb-[40px] ">
					<article className="flex flex-col w-full lg:max-w-3xl p-[50px] lg:px-3 box-content shadow-lg">
						<PostTop post={post} />
						<PostBottom post={post} />
					</article>
					<div className="mx-auto">
						<Link href={`/posts/${post.path}`}>
							<button className="relative bottom-1/2 text-white bg-uBlack py-2 px-6 mx-auto">
								Continue Reading
							</button>
						</Link>
					</div>
				</li>
			))}
			<PaginateUi
				totalPage={totalPage}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</ul>
	);
}

function pagination({ posts, postLengthPerPage, activePage }: Propsfunc) {
	const baseNum = activePage * postLengthPerPage;
	const start = baseNum;
	const end = baseNum + postLengthPerPage;
	return posts.slice(start, end);
}
