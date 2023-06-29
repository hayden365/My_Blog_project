import getAllTags from '@/utils/getAllTags';
import Link from 'next/link';
import LogoBox from './LogoBox';

type Props = {
	show: boolean;
};

export interface INavList {
	name: string;
	href: string;
	subnav: string[];
}

export const navList: INavList[] = [
	{ name: 'Home', href: '/', subnav: [] },
	{ name: '#Tag', href: '/tags', subnav: [] },
	{ name: 'Author', href: '/author', subnav: [] },
	{ name: 'Contact', href: '/contact', subnav: [] },
];

export default function TopNavContainer({ show }: Props) {
	return (
		<>
			<div
				className={`${
					show ? 'opacity-100' : 'opacity-0'
				} transition-all w-full fixed top-0 z-50 bg-white shadow-md`}
			>
				<div className="mx-auto flex justify-between items-center h-16 py-2 max-w-5xl">
					<LogoBox size="text-3xl w-full ml-4" />
					<ul className="font-serif hidden sm:flex justify-end bg-white gap-5 w-full px-6 text-uPrimary font-medium">
						{navList.map(item => (
							<li className="hover:text-uRed duration-200" key={item.name}>
								<Link href={item.href}>{item.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
