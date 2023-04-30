import React from "react";
import Link from "next/link";

export default function FootLogo() {
	return (
		<div className="">
			<div className="flex flex-col justify-center text-uBlue w-1/3 mx-auto mb-12">
				<h2 className="text-5xl font-bold mx-auto">
					<Link href="/">
						<strong className="text-uRed">M</strong>aktub
					</Link>
				</h2>
				<span className="font-serif mx-auto my-4">Using NextJS</span>
			</div>
		</div>
	);
}
