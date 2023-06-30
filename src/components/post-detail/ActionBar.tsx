'use client';
import usePosts from '@/hooks/usePosts';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IPostDetail } from '../../../type';

type Props = { post?: IPostDetail };

const style = 'border-2 p-1 border-uRed rounded-sm cursor-pointer';

export default function ActionBar({ post }: Props) {
	const { removePost } = usePosts();
	const router = useRouter();
	if (!post) return null;

	const deleteHandler = () => {
		removePost(post.postId);
		router.push('/');
	};

	return (
		<section className="flex gap-4 px-10 justify-center">
			<span className={style}>Edit</span>
			<span className={style} onClick={deleteHandler}>
				Delete
			</span>
		</section>
	);
}
