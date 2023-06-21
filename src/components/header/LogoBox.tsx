import React from "react";
import Link from "next/link";

type Props = {
	size?: string;
};

export default function LogoBox({ size = "text-5xl" }: Props) {
	return (
		<>
			<h1 className={`justify-center font-bold text-uBlue ${size}`}>
				<Link href="/">
					<strong className="text-uRed">My</strong> Blog
				</Link>
			</h1>
		</>
	);
}
