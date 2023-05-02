import Link from "next/link";
import React from "react";
import { navList } from "./TopNavContainer";

export default function NavContainer() {
	return (
		<ul className="hidden md:flex gap-4 mx-auto my-8 justify-center">
			{navList.map(item => (
				<li key={item.name}>
					<Link href={item.href}>{item.name}</Link>
				</li>
			))}
		</ul>
	);
}
