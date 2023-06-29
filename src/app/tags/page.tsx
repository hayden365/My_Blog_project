'use client';
import PostListContainer from '@/components/post-mainpage/PostListContainer';
import React from 'react';
import usePosts from '@/hooks/usePosts';
import getAllTags from '@/utils/getAllTags';
import TagUi from '@/components/ui/TagUi';

export default function Tags() {
	const { posts } = usePosts();
	const allTags = Object.keys(getAllTags(posts));

	return (
		<>
			<section className="flex w-full p-12 shadow-lg justify-between items-center ">
				<div>
					<h3 className="capitalize text-3xl font-bold">Select Tag</h3>
					<span className="flex text-gray-500">
						{posts?.length}
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
				<TagUi tags={allTags} box_shadow="shadow-md" style="gap-3" />
			</section>
			{posts && <PostListContainer posts={posts} size="small" />}
		</>
	);
}
