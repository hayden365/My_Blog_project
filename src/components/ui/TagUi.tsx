import tagFindHandler from "@/utils/tagFindHandler";
import React from "react";
import TagColors from "./TagColors";

type Props = {
	tags: string[];
	style?: string;
	text_shadow?: boolean;
};

export type Tag = {
	name: string;
	color: string;
	hover: string;
	info: string;
};

export default function TagUi({
	tags,
	style = "text-base",
	text_shadow,
}: Props) {
	const tagInfo: Tag[] = tagFindHandler(tags);

	return (
		<div className={`${style} text-gray-500 flex flex-wrap`}>
			{tagInfo?.map((tag, index) => (
				<TagColors tag={tag} key={index} text_shadow={text_shadow} />
			))}
		</div>
	);
}
