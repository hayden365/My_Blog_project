import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeaderNav from "./HeaderNav";

export default function Header() {
	return (
		<header>
			<div className="max-w-5xl flex flex-col mx-auto">
				<section className="flex pt-20">
					<HeaderNav />
					<h1 className="flex justify-center text-5xl font-bold text-uBlue w-1/3">
						<Link href="/">
							<strong className="text-uRed">M</strong>aktub
						</Link>
					</h1>
					<div className="flex w-1/3 justify-end">
						<div className="w-11 h-11 rounded-full bg-uRed flex items-center">
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								style={{ color: "white" }}
								className="mx-auto"
							/>
						</div>
					</div>
				</section>
				<ul className="flex gap-4 mx-auto my-8">
					<li>Home</li>
					<li>Header Styles</li>
					<li>Post Features</li>
					<li>#Tag</li>
					<li>Author</li>
					<li>Features</li>
					<li>Contact</li>
				</ul>
			</div>
		</header>
	);
}
