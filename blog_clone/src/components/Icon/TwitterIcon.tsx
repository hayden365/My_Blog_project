import React from "react";
import { BsTwitter } from "react-icons/bs";

export interface IconProps {
	style: string;
}

export default function ({ style }: IconProps) {
	return <BsTwitter className={`${style} `} />;
}
