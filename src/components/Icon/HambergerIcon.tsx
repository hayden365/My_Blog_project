import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
	style: string;
	size: string;
};

export default function HambergerIcon({ style, size }: Props) {
	return <GiHamburgerMenu className={style} size={size} />;
}
