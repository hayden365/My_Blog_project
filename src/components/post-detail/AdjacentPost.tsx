'use client';
import usePosts from '@/hooks/usePosts';
import { adjacentPost } from '@/utils/adjacentPost';
import React from 'react';
import { IPostDetail } from '../../../type';
import BoxSkeleton from '../BoxSkeleton';
import AdjacentPostCard from './AdjacentPostCard';

type Props = {
	postId: string;
};

export default function AdjacentPost({ postId }: Props) {
	const { posts } = usePosts();
	if (!posts) return null;

	const { prev, next } = adjacentPost(posts, postId);

	return (
		<BoxSkeleton title="Adjacent Post">
			<section className="flex flex-col lg:flex-row gap-3">
				{prev && <AdjacentPostCard post={prev} />}
				{next && <AdjacentPostCard post={next} />}
			</section>
		</BoxSkeleton>
	);
}
