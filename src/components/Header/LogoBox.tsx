import React from "react";
import Link from "next/link";

type Props = {
	size?: string;
};

export default function LogoBox({ size = "text-5xl" }: Props) {
	return (
		<>
			<h1 className={`flex justify-center font-bold text-uBlue w-1/3 ${size}`}>
				<Link href="/">
					<strong className="text-uRed">M</strong>aktub
				</Link>
			</h1>
		</>
	);
}
