import React from "react";
import { PostData } from "@/service/posts";
import MarkdownViewer from "./MarkdownViewer";
import formatDate from "@/utils/formatDate";

type Props = {
	post: PostData;
};

export default function PostContent({ post }: Props) {
	const { title, description, date, content } = post;
	return (
		<section className="flex flex-col p-4 pt-5 gap-3">
			<h1 className="text-4xl font-bold">{title}</h1>
			<span>{formatDate(date)}</span>
			<p className="text-xl font-bold">{description}</p>
			<div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
			<MarkdownViewer content={content} />
		</section>
	);
}
