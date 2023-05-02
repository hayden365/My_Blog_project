import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { Tag } from "./TagUi";

type Props = {
	tag: Tag;
};

export default function TagColors({ tag }: Props) {
	return (
		<button
			className={`hadow-md px-2 py-1.5 mr-2.5 mb-3 transition ease-in-out delay-150 bg-inherit hover:-translate-y-1 duration-300 ${tag.hover}`}
		>
			<span className={tag.color}>#</span>
			<span className="pl-1">{capitalizeFirstLetter(tag.name)}</span>
		</button>
	);
}
