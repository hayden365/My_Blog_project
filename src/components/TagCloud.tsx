import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import TagUi from "./ui/TagUi";

export default function TagCloud() {
	const tags = [
		"Health",
		"Lifestyle",
		"Music",
		"Technology",
		"Travel",
		"Video",
	];
	console.log(tags);

	return (
		<BoxSkeleton title="Tag Cloud">
			<div className="flex flex-wrap">
				<TagUi tags={tags} />
			</div>
		</BoxSkeleton>
	);
}
