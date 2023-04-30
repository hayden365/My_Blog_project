import Image from "next/image";
import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import FacebookIcon from "./Icon/FacebookIcon";
import InstagramIcon from "./Icon/InstagramIcon";
import TwitterIcon from "./Icon/TwitterIcon";

export default function AboutMe() {
	return (
		<BoxSkeleton title="About Me">
			<div className="flex flex-col">
				<div className="flex">
					<Image
						src={"/images/profile.jpg"}
						alt="profile"
						width={80}
						height={80}
						className="rounded-full"
					/>
					<div className="pl-4">
						<strong className="text-primary font-bold">Jonathan Doe </strong>
						<p className="text-fontGray font-normal pt-1">Founder & Editor</p>
						<div className="flex gap-2 pt-2">
							<TwitterIcon style="text-twitter" />
							<FacebookIcon style="text-facebook" />
							<InstagramIcon style="text-instagram" />
						</div>
					</div>
				</div>
				<span className="text-fontGray font-normal mt-4 font-serif">
					Hello! My name is Jonathan Doe working from Chile. I create some Ghost
					and Wordpress themes for differents markets, also, i offer live
					support via our ticket system.
				</span>
			</div>
		</BoxSkeleton>
	);
}
