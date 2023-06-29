'use client';
import { navList } from './TopNavContainer';
import Link from 'next/link';

export default function NavContainer() {
	return (
		<ul className="relative font-serif hidden lg:flex md:gap-10 mx-auto my-8 justify-center text-uPrimary font-medium shadow-md w-3/5">
			{navList.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className="hover:text-uRed hover:duration-200"
				>
					{item.name}
				</Link>
			))}
		</ul>
	);
}
