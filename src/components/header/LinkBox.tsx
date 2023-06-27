import React from 'react';
import HambergerIcon from '../icons/HambergerIcon';
import TistoryIcon from '../icons/TistoryIcon';
import RssIcon from '../icons/RssIcon';
import GithubIcon from '../icons/GithubIcon';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function LinkBox() {
	const { data: session } = useSession();
	return (
		<>
			<div className="lg:hidden flex items-center">
				<HambergerIcon size="28" />
			</div>
			<nav className="hidden lg:flex gap-4 items-center">
				<GithubIcon style="text-github w-6 h-6" />
				<TistoryIcon style="text-tistory w-6 h-6" />
				<RssIcon style="text-rss w-6 h-6" />
				{session?.user && (
					<Link
						href="/posts/create"
						className="rounded border-2 border-uRed text-primary p-1"
					>
						create
					</Link>
				)}
			</nav>
		</>
	);
}
