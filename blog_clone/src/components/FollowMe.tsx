import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import FacebookIcon from "./Icon/FacebookIcon";
import InstagramIcon from "./Icon/InstagramIcon";
import RssIcon from "./Icon/RssIcon";
import Twitter from "./Icon/TwitterIcon";

const IconStyle = "text-white w-6 h-full m-auto p-auto";
const IconBigStyle = "text-white w-7 h-full m-auto p-auto";

export default function FollowMe() {
	return (
		<BoxSkeleton title="Follow Me!">
			<div className="flex justify-stretch gap-3 flex-1 m-auto">
				<div className="bg-twitterBg min-w-[22%] h-16">
					<Twitter style={IconStyle} />
				</div>
				<div className="bg-facebookBg min-w-[22%] min-h-full">
					<FacebookIcon style={IconBigStyle} />
				</div>
				<div className="bg-instagramBg min-w-[22%] min-h-full">
					<InstagramIcon style={IconStyle} />
				</div>
				<div className="bg-rssBg min-w-[22%] min-h-full">
					<RssIcon style={IconStyle} />
				</div>
			</div>
		</BoxSkeleton>
	);
}
