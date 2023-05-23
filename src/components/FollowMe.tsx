import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import TistoryIcon from "./icons/TistoryIcon";
import RssIcon from "./icons/RssIcon";
import Github from "./icons/GithubIcon";

const IconStyle = "text-white w-6 h-full m-auto p-auto";
const IconBigStyle = "text-white w-7 h-full m-auto p-auto";

export default function FollowMe() {
	return (
		<BoxSkeleton title="Follow Me!">
			<div className="flex justify-stretch gap-3 flex-1 m-auto">
				<div className="bg-github min-w-[22%] h-16">
					<Github style={IconStyle} />
				</div>
				<div className="bg-tistory min-w-[22%] min-h-full">
					<TistoryIcon style={IconStyle} />
				</div>
				<div className="bg-rssBg min-w-[22%] min-h-full">
					<RssIcon style={IconStyle} />
				</div>
			</div>
		</BoxSkeleton>
	);
}
