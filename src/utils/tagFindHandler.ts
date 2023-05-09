import { Tag } from "@/components/ui/TagUi";

const tagsBasic: Tag[] = [
	{
		name: "health",
		color: "text-uYellow",
		hover: "hover:text-uYellow",
	},
	{
		name: "lifestyle",
		color: "text-uSkyBlue",
		hover: "hover:text-uSkyBlue",
	},
	{
		name: "music",
		color: "text-uRed",
		hover: "hover:text-uRed",
	},
	{
		name: "technology",
		color: "text-twitter",
		hover: "hover:text-twitter",
	},
	{
		name: "travel",
		color: "text-facebook",
		hover: "hover:text-facebook",
	},
	{
		name: "video",
		color: "text-instagram",
		hover: "hover:text-instagram",
	},
];

/**태그의 이름과 tagsBasic의 name을 맞춰본다. */
export default function tagFindHandler(tags: string[]) {
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
