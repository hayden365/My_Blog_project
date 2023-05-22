import React from "react";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import { INavList } from "./TopNavContainer";

export default function NavButton({ href, name, subnav }: INavList) {
	return (
		<li>
			{subnav.length > 0 ? (
				<div className="group relative">
					<Link
						href={href}
						className="flex hover:text-uRed hover:duration-200 my-auto gap-1 items-center"
					>
						{name}
						<SlArrowDown color="primary" size={10} />
					</Link>
					<ul className="absolute hidden group-hover:flex flex-col z-50 bg-white pt-1 w-36 -left-3 shadow-sm">
						{subnav.map(nav => (
							<Link
								href={`/tags/${nav}`}
								className="text-sm ml-4 my-2 hover:text-uRed hover:duration-200"
							>
								{nav}
							</Link>
						))}
					</ul>
				</div>
			) : (
				<Link href={href} className="hover:text-uRed hover:duration-200">
					{name}
				</Link>
			)}
		</li>
	);
}
