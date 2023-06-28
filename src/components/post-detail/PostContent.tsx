'use client';
import React from 'react';
import MarkdownViewer from './MarkdownViewer';
import formatDate from '@/utils/formatDate';
import { IPost, IPostDetail } from '../../../type';
import Image from 'next/image';
import usePost from '@/hooks/usePost';

type Props = {
	postId: string;
};

export default function PostContent({ postId }: Props) {
	const { post } = usePost(postId);

	return (
		<>
			<div className="flex justify-center h-[400px] overflow-hidden">
				{post && (
					<Image
						src={post.postImage}
						alt={post.slug}
						priority={true}
						width={700}
						height={400}
						className="object-cover"
					/>
				)}
			</div>
			{post && (
				<section className="flex flex-col p-4 pt-5 gap-3 mb-20">
					<h1 className="text-4xl font-bold">{post?.title}</h1>
					<span>{formatDate(post.createdAt)}</span>
					<div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
					<MarkdownViewer content={post.content} />
				</section>
			)}
		</>
	);
}
