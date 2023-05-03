import tagFindHandler from "@/utils/tagFindHandler";
import React from "react";
import TagColors from "./TagColors";

type Props = {
	tags: string[];
	style?: string;
};

export type Tag = {
	name: string;
	color: string;
	hover: string;
};

export default function TagUi({ tags, style }: Props) {
	const tagInfo: Tag[] = tagFindHandler(tags);

	return (
		<div className={`${style} text-gray-500`}>
			{tagInfo?.map((tag, index) => (
				<TagColors tag={tag} key={index} />
			))}
		</div>
	);
}
