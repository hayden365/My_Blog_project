"use client";
import { Post } from "@/service/posts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import PaginateUi from "../ui/PaginateUi";
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

type Props = {
	posts: Post[];
	size: "small" | "large";
};

type Propsfunc = {
	posts: Post[];
	postLengthPerPage: number;
	activePage: number;
};

export default function PostListContainer({ posts, size = "large" }: Props) {
	const [activePage, setActivePage] = useState(0);
	const [postLengthPerPage, setpostLengthPerPage] = useState(4);
	const pathname = usePathname();
	useEffect(() => {
		pathname === "/" ? setpostLengthPerPage(4) : setpostLengthPerPage(6);
	}, [pathname]);

	const totalPage = Math.floor(posts.length / postLengthPerPage);

	const paginatePost = pagination({ posts, postLengthPerPage, activePage });

	return (
		<>
			<ul
				className={`${
					size === "small"
						? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mb-[60px]"
						: "grid lg:col-start-1 lg:col-end-3 mb-[60px]"
				}`}
			>
				{paginatePost.map(post => (
					<li
						key={post.title}
						className={`flex flex-col mb-[40px] ${size === "small" ? "" : ""}`}
					>
						<article className="flex flex-col p-5 lg:max-w-3xl mx-6 lg:px-3 box-content shadow-lg">
							<PostTop post={post} size={size} />
							<PostBottom post={post} size={size} />
						</article>
						{size === "small" ? (
							""
						) : (
							<div className="mx-auto">
								<Link href={`/posts/${post.path}`}>
									<button className="relative bottom-1/2 text-white bg-uBlack py-2 px-6 mx-auto">
										Continue Reading
									</button>
								</Link>
							</div>
						)}
					</li>
				))}
				{size === "small" ? (
					""
				) : (
					<PaginateUi
						totalPage={totalPage}
						activePage={activePage}
						setActivePage={setActivePage}
					/>
				)}
			</ul>
			{size === "small" ? (
				<PaginateUi
					totalPage={totalPage}
					activePage={activePage}
					setActivePage={setActivePage}
				/>
			) : (
				""
			)}
		</>
	);
}

function pagination({ posts, postLengthPerPage, activePage }: Propsfunc) {
	const baseNum = activePage * postLengthPerPage;
	const start = baseNum;
	const end = baseNum + postLengthPerPage;
	return posts.slice(start, end);
}
