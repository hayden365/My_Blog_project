'use client';
import React from 'react';
import BoxSkeleton from './BoxSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import formatDate from '@/utils/formatDate';
import usePosts from '@/hooks/usePosts';

export default function LatestArticles() {
	const { posts } = usePosts();

	return (
		<BoxSkeleton title="Latest Articles">
			{posts?.slice(0, 3).map(post => (
				<Link href={`/posts/${post.postId}`} key={post.title}>
					<article className="flex flex-1 mb-8 ">
						<div className="w-16 h-16 rounded-sm overflow-hidden relative shrink-0">
							{post?.postImage && (
								<Image
									src={post.postImage}
									alt="mini picture"
									sizes="64px"
									style={{ objectFit: 'cover' }}
									fill={true}
								/>
							)}
						</div>

						<div className="truncate flex flex-col flex-wrap px-6">
							<span className="text-primary">{post.title}</span>
							<span className="text-xs text-fontGray font-normal">
								{formatDate(post.createdAt)}
							</span>
						</div>
					</article>
				</Link>
			))}
		</BoxSkeleton>
	);
}
