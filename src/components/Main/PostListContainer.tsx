"use client";
import { Post } from "@/service/posts";
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
		<div className="grid lg:col-start-1 lg:col-end-3 px-10 pl-0 mb-[60px]">
			{paginatePost.map(post => (
				<div key={post.title} className="flex flex-col mb-[40px] ">
					<div className="flex flex-col w-full lg:max-w-3xl p-[50px] lg:px-3 box-content shadow-lg">
						<PostTop post={post} />
						<PostBottom post={post} />
					</div>
					<div className="mx-auto">
						<button className="relative bottom-1/2 text-white bg-uBlack py-2 px-6 mx-auto">
							Continue Reading
						</button>
					</div>
				</div>
			))}
			<PaginateUi
				totalPage={totalPage}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</div>
	);
}

function pagination({ posts, postLengthPerPage, activePage }: Propsfunc) {
	const baseNum = activePage * postLengthPerPage;
	const start = baseNum;
	const end = baseNum + postLengthPerPage;
	return posts.slice(start, end);
}
