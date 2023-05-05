import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { Tag } from "./TagUi";

type Props = {
	tag: Tag;
	text_shadow?: boolean;
};

export default function TagColors({ tag, text_shadow }: Props) {
	return (
		<button
			className={`shadow-md px-2 py-1.5 mr-2.5 mb-3 transition ease-in-out delay-150 bg-inherit hover:-translate-y-1 duration-300 ${tag.hover}`}
		>
			<span className={tag.color}>#</span>
			<span
				className={`${text_shadow}?? 'pl-1 [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]':'pl-1'`}
			>
				{capitalizeFirstLetter(tag.name)}
			</span>
		</button>
	);
}
