import React from "react";

type Props = {
	tags: string[];
};

type Tag = {
	name: string;
	color: string;
};

const tagsBasic: Tag[] = [
	{ name: "Health", color: "text-uYellow" },
	{ name: "Lifestyle", color: "text-uSkyBlue" },
	{ name: "Music", color: "text-uRed" },
	{ name: "Technology", color: "text-twitter" },
	{ name: "Travel", color: "text-facebook" },
	{ name: "Video", color: "text-instagram" },
];

function FindHandler(tags: string[]) {
	const tagInfo: Tag[] = [];

	tags.forEach(tag => {
		const matchTag: Tag | undefined = tagsBasic.find(function filterTag(
			element: Tag,
		) {
			if (tag === element.name) {
				return true;
			}
		});

		if (matchTag !== undefined) {
			tagInfo.push(matchTag);
		}
	});
	return tagInfo;
}

export default function TagUi({ tags }: Props) {
	const tagInfo: Tag[] = FindHandler(tags);

	return (
		<>
			{tagInfo.map(tag => (
				<button
					key={tag.name}
					className={`shadow-md px-2 py-1.5 mr-2.5 mb-3 transition ease-in-out delay-150 bg-inherit hover:-translate-y-1 ${tag.color} duration-300`}
				>
					<span className={`${tag.color}`}>#</span>
					<span className="pl-1">{tag.name}</span>
				</button>
			))}
		</>
	);
}
