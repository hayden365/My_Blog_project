import tagFindHandler from "@/utils/tagFindHandler";
import React from "react";
import TagColors from "./TagColors";

type Props = {
	tags: string[];
	size?: string;
};

export type Tag = {
	name: string;
	color: string;
	hover: string;
};

export default function TagUi({ tags, size }: Props) {
	const tagInfo: Tag[] = tagFindHandler(tags);

	return (
		<div className={size}>
			{tagInfo?.map((tag, index) => (
				<TagColors tag={tag} key={index} />
			))}
		</div>
	);
}
