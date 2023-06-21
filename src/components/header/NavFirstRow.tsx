import React from "react";
import ColorButton from "../ColorButton";
import LinkBox from "./LinkBox";
import LogoBox from "./LogoBox";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavFirstRow() {
	const { data: session } = useSession();
	return (
		<section className="flex justify-between items-center pt-20 mx-6 lg:mx-0">
			<LinkBox />
			<LogoBox />
			{session ? (
				<ColorButton text="Sign out" onClick={() => signOut()} />
			) : (
				<ColorButton text="Sign in" onClick={() => signIn()} />
			)}
		</section>
	);
}
