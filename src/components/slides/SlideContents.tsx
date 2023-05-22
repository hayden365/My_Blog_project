import React from "react";
import TagUi from "../ui/TagUi";
import UnderlineHeading from "../ui/UnderlineHeading";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

type Props = {
	date: Date;
	title: string;
	categories: string[];
	path: string;
};

export default function SlideContents({
	date,
	title,
	categories,
	path,
}: Props) {
	return (
		<div className="flex flex-col items-center w-fit h-fit z-40 absolute text-white gap-10 max-w-[70%]">
			<TagUi
				tags={categories}
				style={
					"space-x-10 text-3xl inline-block transition-transform cursor-pointer text-white [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]"
				}
				text_shadow={true}
			/>
			<Link href={`/posts/${path}`}>
				<UnderlineHeading
					text={title}
					addClassName="text-white text-center [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]"
				/>
			</Link>

			<p className="text-2xl font-serif font-light">{formatDate(date)}</p>
		</div>
	);
}
