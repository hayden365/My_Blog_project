import React from "react";
import BoxSkeleton from "./BoxSkeleton";

export default function TagCloud() {
	const tags = [
		{ name: "Health", color: "text-uYellow" },
		{ name: "Lifestyle", color: "text-uSkyBlue" },
		{ name: "Music", color: "text-uRed" },
		{ name: "Technology", color: "text-twitter" },
		{ name: "Travel", color: "text-facebook" },
		{ name: "Video", color: "text-instagram" },
	];

	return (
		<BoxSkeleton title="Tag Cloud">
			<div className="flex flex-wrap">
				{tags.map(tag => (
					<div key={tag.name} className="px-2 py-1.5 mr-2.5 mb-3">
						<span className={`${tag.color}`}>#</span>
						<span>{tag.name}</span>
					</div>
				))}
			</div>
		</BoxSkeleton>
	);
}
