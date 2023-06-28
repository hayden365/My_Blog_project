import PostListContainer from '@/components/post-mainpage/PostListContainer';
import { randomColorBy } from '@/utils/randomColor';
import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};

export default async function TagsPage({ params: { slug } }: Props) {
	// const posts: Array<Post> = await getAllPosts();
	// const filtered = posts.filter(post => post.categories.includes(slug));
	const tagColor = randomColorBy(slug);
	return (
		<>
			<section className="flex w-full p-12 shadow-lg justify-between items-center ">
				<div>
					<h3 className="capitalize text-3xl font-bold">
						<span style={{ color: tagColor[0] }}>#</span>
						{slug}
					</h3>
					<span className="flex text-gray-500">
						{/* {filtered.length} */}
						<hr
							style={{
								color: '#FF4B60',
								backgroundColor: '#FF4B60',
								width: 8,
								height: 3,
								margin: 'auto 10px',
							}}
						/>
						Articles
					</span>
				</div>
			</section>
			{/* <PostListContainer posts={filtered} size="small" /> */}
		</>
	);
}
