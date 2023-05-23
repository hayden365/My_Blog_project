import React from "react";
import { IconProps } from "./GithubIcon";
import { SiTistory } from "react-icons/si";

export default function TistoryIcon({ style }: IconProps) {
	return (
		<a href="https://hayden365.tistory.com/">
			<SiTistory className={style} />
		</a>
	);
}
