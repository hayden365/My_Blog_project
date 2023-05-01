import React from "react";
import BoxSkeleton from "./BoxSkeleton";
import Image from "next/image";
import latestArticledJson from "../json/latestArticles.json";

export default function LatestArticles() {
	return (
		<BoxSkeleton title="Latest Articles">
			{latestArticledJson.map(article => (
				<article key={article.title} className="flex flex-1 mb-5 relative">
					<Image
						src={article.image}
						alt="mini picture"
						width={60}
						height={64}
						className="absolute"
					/>
					<div className="flex flex-col flex-wrap pl-20">
						<h6 className="font-bold text-primary tracking-tight">
							{article.title}
						</h6>
						<span className="text-xs text-fontGray font-normal">
							{article.date}
						</span>
					</div>
				</article>
			))}
		</BoxSkeleton>
	);
}
