'use client';
import usePost from '@/hooks/usePost';
import formatDate from '@/utils/formatDate';
import { useSession } from 'next-auth/react';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IComment } from '../../../type';
import BoxSkeleton from '../BoxSkeleton';
import RedButton from '../RedButton';

const DEFAULT_DATA = {
	content: '',
	name: '',
	password: '',
};

const boxStyle = 'bg-gray-100 p-3 shadow-sm rounded-sm';

export default function CommentsBar({ postId }: { postId: string }) {
	const [commentData, setCommentData] = useState<IComment>(DEFAULT_DATA);

	const { data: session } = useSession();
	const { comments, removeComment, addComment } = usePost(postId);

	const onDeleteComment = (_key: string) => {
		removeComment(_key);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setCommentData(prev => ({ ...prev, [name]: value }));
	};

	const onComment = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addComment(commentData);
		setCommentData(prev => ({ ...prev, content: '' }));
	};

	const hideClose = !session?.user;

	return (
		<article>
			<BoxSkeleton title="Comments">
				{comments?.map((comment, index) => (
					<div key={index} className={`${boxStyle} mb-3`}>
						<div className="flex justify-between text-primary">
							<div>
								<span className="font-bold pr-2">{comment.name}</span>
								<span className="text-sm ">
									on {formatDate(comment.createdAt)}
								</span>
							</div>
							<button
								onClick={() => onDeleteComment(comment._key)}
								className={`px-3 text-lg text-uRed bg-primary/10 rounded-md ${
									hideClose && 'hidden'
								}`}
							>
								x
							</button>
						</div>
						<p className="pt-4 font-bold indent-2">{comment.content}</p>
					</div>
				))}
			</BoxSkeleton>
			<BoxSkeleton title="Leave a Comment">
				<form className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-3">
					<textarea
						rows={3}
						placeholder="Comment"
						value={commentData.content}
						name="content"
						onChange={onChange}
						className={`${boxStyle} col-span-2`}
					/>
					<input
						type="text"
						placeholder="Name"
						value={commentData.name}
						name="name"
						onChange={onChange}
						className={`${boxStyle} basis-1/2 h-min`}
					/>
					<input
						type="password"
						placeholder="password"
						value={commentData.password}
						name="password"
						onChange={onChange}
						className={`${boxStyle} basis-1/2 h-min`}
					/>
					<button
						className=" bg-uRed text-white py-2 px-4 col-span-2 w-fit h-min justify-self-end"
						onClick={onComment}
					>
						Post Comment
					</button>
				</form>
			</BoxSkeleton>
		</article>
	);
}
