import React from "react";
import { AiFillGithub } from "react-icons/ai";

export interface IconProps {
	style: string;
}

export default function GithubIcon({ style }: IconProps) {
	return (
		<a href="https://github.com/hayden365">
			<AiFillGithub className={style} />
		</a>
	);
}
