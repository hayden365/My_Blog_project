'use client';
import React from 'react';
import MarkdownViewer from './MarkdownViewer';
import formatDate from '@/utils/formatDate';
import { IPost, IPostDetail } from '../../../type';
import Image from 'next/image';
import usePost from '@/hooks/usePost';
import BubbleIcon from '../icons/BubbleIcon';

type Props = {
	postId: string;
};

export default function PostContent({ postId }: Props) {
	const { post } = usePost(postId);

	return (
		<div className="w-full flex flex-col shrink">
			<div className="relative w-full h-96">
				{post && (
					<Image
						src={post.postImage}
						alt={post.slug}
						priority={true}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain"
					/>
				)}
			</div>
			{post && (
				<section className="w-full flex shrink flex-col p-4 pt-5 gap-3 mb-20">
					<h1 className="text-center text-4xl font-bold text-primary px-10">
						{post?.title}
					</h1>
					<div className="flex justify-center gap-5 font-serif text-uFontColor">
						<div className="flex items-center gap-1">
							<span> {post.comments.length}</span>
							<BubbleIcon style="text-uRed relative -top-[2px]" />
						</div>
						<div className="w-7 h-[2px] bg-gray-200 self-center" />

						<span>{formatDate(post.createdAt)}</span>
					</div>
					<div className="w-full border-2 border-gray-100 mt-4 mb-8" />
					<MarkdownViewer content={post.content} />
				</section>
			)}
		</div>
	);
}
