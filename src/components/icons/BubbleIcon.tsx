import React from "react";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IconProps } from "./GithubIcon";

export default function BubbleIcon({ style }: IconProps) {
	return <HiOutlineChatBubbleOvalLeft className={style} />;
}
