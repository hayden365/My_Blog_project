"use client";
import { navList } from "./TopNavContainer";
import NavButton from "./NavButton";

export default function NavContainer() {
	return (
		<ul className="relative font-serif hidden lg:flex md:gap-10 mx-auto my-8 justify-center text-uPrimary font-medium shadow-md w-3/5">
			{navList.map(item => (
				<NavButton {...item} />
			))}
		</ul>
	);
}
