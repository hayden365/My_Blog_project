import React from "react";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IconProps } from "./TwitterIcon";

export default function BubbleIcon({ style }: IconProps) {
	return <HiOutlineChatBubbleOvalLeft className={style} />;
}
