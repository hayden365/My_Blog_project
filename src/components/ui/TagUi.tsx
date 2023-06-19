import { randomColorBy } from "@/utils/randomColor";
import React from "react";
import TagColors from "./TagColors";

type Props = {
	tags: string[];
	style?: string;
	text_shadow?: boolean;
	box_shadow?: boolean;
};

export default function TagUi({
	tags,
	style = "text-base",
	text_shadow,
	box_shadow,
}: Props) {
	return (
		<div className={`${style} text-gray-500 flex flex-wrap`}>
			{tags?.map((tag, index) => (
				<TagColors
					tag={tag}
					key={index}
					text_shadow={text_shadow}
					box_shadow={box_shadow}
				/>
			))}
		</div>
	);
}
