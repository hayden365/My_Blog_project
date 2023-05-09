import { Tag } from "@/components/ui/TagUi";
const tagsBasic: Tag[] = [
	{
		name: "health",
		color: "text-uYellow",
		hover: "hover:text-uYellow",
		info: "Sometimes you might want to put your site behind closed doors If you’ve got a publication that you don’t want the world to see yet because it’s not ready to launch, you can hide your Ghost site behind a simple shared pass-phrase.",
	},
	{
		name: "lifestyle",
		color: "text-uSkyBlue",
		hover: "hover:text-uSkyBlue",
		info: "Sometimes you might want to put your site behind closed doors If you’ve got a publication that you don’t want the world to see yet because it’s not ready to launch, you can hide your Ghost site behind a simple shared pass-phrase.",
	},
	{
		name: "music",
		color: "text-uRed",
		hover: "hover:text-uRed",
		info: "Sometimes you might want to put your site behind closed doors If you’ve got a publication that you don’t want the world to see yet because it’s not ready to launch, you can hide your Ghost site behind a simple shared pass-phrase.",
	},
	{
		name: "technology",
		color: "text-twitter",
		hover: "hover:text-twitter",
		info: "Sometimes you might want to put your site behind closed doors If you’ve got a publication that you don’t want the world to see yet because it’s not ready to launch, you can hide your Ghost site behind a simple shared pass-phrase.",
	},
	{
		name: "travel",
		color: "text-facebook",
		hover: "hover:text-facebook",
		info: "Sometimes you might want to put your site behind closed doors If you’ve got a publication that you don’t want the world to see yet because it’s not ready to launch, you can hide your Ghost site behind a simple shared pass-phrase.",
	},
	{
		name: "video",
		color: "text-instagram",
		hover: "hover:text-instagram",
		info: "Sometimes you might want to put your site behind closed doors If you’ve got a publication that you don’t want the world to see yet because it’s not ready to launch, you can hide your Ghost site behind a simple shared pass-phrase.",
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
