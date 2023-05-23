import Image from "next/image";
import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import TistoryIcon from "./icons/TistoryIcon";
import GithubIcon from "./icons/GithubIcon";

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
						<strong className="text-primary font-bold">공혜지 </strong>
						<p className="text-fontGray font-normal pt-1">Frontend Engineer</p>
						<div className="flex gap-2 pt-2">
							<GithubIcon style="text-github" />
							<TistoryIcon style="text-tistory" />
						</div>
					</div>
				</div>
				<span className="text-fontGray font-normal mt-4 font-serif">
					안녕하세요 👋 JavaScript, React 기반 프론트엔드 개발자 공혜지입니다.
				</span>
			</div>
		</BoxSkeleton>
	);
}
