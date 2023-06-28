import React from 'react';
import TagCloud from './TagCloud';
import FollowMe from './FollowMe';
import AboutMe from './AboutMe';
import FootLogo from './FootLogo';
import LatestArticles from './LatestArticles';

export default function Footer() {
	return (
		<footer className="max-w-screen-2xl mx-auto">
			<section className="grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 gap-1 xl:gap-12 mx-1">
				{/*@ts-expect-error Server Component*/}
				<LatestArticles />
				<TagCloud />
				<FollowMe />
				<AboutMe />
			</section>
			<FootLogo />
		</footer>
	);
}
