import Image from "next/image";
import React from "react";
import { IPost } from "../../../type";
import SlideContents from "./SlideContents";

type Props = {
	post: IPost;
};

export default function SlideCard({ post }: Props) {
	// const { image, date, title, categories, path } = post;
	// return (
	// 	<div className="w-full h-full relative flex justify-center items-center">
	// 		<div className="w-full h-full absolute z-20">
	// 			<Image
	// 				src={image}
	// 				alt={title}
	// 				sizes="400px"
	// 				fill
	// 				priority
	// 				quality={50}
	// 				className="object-cover w-full h-full z-20 saturate-50 brightness-20"
	// 			/>
	// 		</div>
	// 		<SlideContents
	// 			categories={categories}
	// 			date={date}
	// 			title={title}
	// 			path={path}
	// 		/>
	// 	</div>
	// );
}
