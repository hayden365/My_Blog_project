import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
	size: string;
};

export default function HambergerIcon({ size }: Props) {
	return <GiHamburgerMenu size={size} />;
}
