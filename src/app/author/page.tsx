import TistoryIcon from "@/components/icons/TistoryIcon";
import GithubIcon from "@/components/icons/GithubIcon";
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
						<h4 className="font-extrabold text-3xl">공혜지 | Hyeji Kong</h4>
						<span className="text-sm text-gray-500 font-normal w-full m-auto">
							Frontend Engineer
						</span>
					</div>
				</div>
				<p className="text-center indent-3 text-gray-500">
					안녕하세요 👋 프론트엔드 개발자 공혜지입니다.
				</p>
				<nav className="flex justify-center py-4 gap-5">
					<GithubIcon style="text-github w-[20px] h-full " />
					<TistoryIcon style="text-tistory w-[20px] h-full" />
				</nav>
			</div>
		</section>
	);
}
