import React from 'react';
import ColorButton from '../ColorButton';
import LinkBox from './LinkBox';
import LogoBox from './LogoBox';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function NavFirstRow() {
	const { data: session } = useSession();
	const image = session?.user?.image;
	return (
		<section className="flex justify-between items-center pt-20 mx-6 lg:mx-0">
			<LinkBox />
			<LogoBox />
			{session ? (
				<div className="flex gap-2">
					<img
						className="w-8 h-8 rounded-full border"
						alt="user profile"
						src={image || ''}
					/>
					<ColorButton text="Sign out" onClick={() => signOut()} />
				</div>
			) : (
				<ColorButton text="Sign in" onClick={() => signIn()} />
			)}
		</section>
	);
}
