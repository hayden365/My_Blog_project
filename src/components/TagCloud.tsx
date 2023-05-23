import BoxSkeleton from "./BoxSkeleton";
import TagUi from "./ui/TagUi";

export const default_tags = [
	"health",
	"lifestyle",
	"music",
	"technology",
	"travel",
	"video",
];
export default function TagCloud({ style }: { style?: string }) {
	return (
		<BoxSkeleton title="Tag Cloud">
			<TagUi tags={default_tags} style={style} />
		</BoxSkeleton>
	);
}
