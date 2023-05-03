import Link from "next/link";
import React from "react";
import { navList } from "./TopNavContainer";

export default function NavContainer() {
	return (
		<ul className="font-serif hidden md:flex gap-5 w-fit mx-auto my-8 justify-center text-uPrimary font-medium shadow-md">
			{navList.map(item => (
				<li key={item.name} className="button-hover-red">
					<Link href={item.href}>{item.name}</Link>
				</li>
			))}
		</ul>
	);
}
