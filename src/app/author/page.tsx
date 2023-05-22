import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import Image from "next/image";
import React from "react";

export default function Authorpage() {
	return (
		<section className="w-full shadow-lg">
			<div className="w-[550px] flex flex-col gap-5 py-14 m-auto mb-20">
				<div className="flex flex-1 gap-4 justify-center items-center ">
					<Image
						src={"/images/profile.jpg"}
						alt="profile"
						width={80}
						height={80}
						className="rounded-full"
					/>
					<div>
						<h4 className="font-extrabold text-3xl">Jonathan Doe</h4>
						<span className="text-sm text-gray-500 font-normal w-full m-auto">
							Collaborator & Editor
						</span>
					</div>
				</div>
				<p className="text-center indent-3 text-gray-500">
					Hello! My name is Jonathan Doe working from Chile. I create some Ghost
					and Wordpress themes for differents markets, also, i offer live
					support via our ticket system.
				</p>
				<nav className="flex justify-center py-4 gap-5">
					<TwitterIcon style="text-twitter w-[20px] h-full " />
					<FacebookIcon style="text-facebook w-[20px] h-full" />
					<InstagramIcon style="text-instagram w-[20px] h-full" />
				</nav>
			</div>
		</section>
	);
}
