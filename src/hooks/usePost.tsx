import { IComment, IPostDetail, TComment } from '../../type';
import useSWR from 'swr';

export default function usePost(postId: string) {
	const urlKey = `/api/posts/${postId}`;
	const { data: post, error, mutate } = useSWR<IPostDetail>(urlKey);

	const addComment = (commentData: IComment) => {
		if (!post) return console.log(`post가 없습니다.`);

		const createdAt = new Date().toISOString();
		const { content, name, password } = commentData;

		const newComment = {
			content: content,
			name,
			password,
			_key: `temp-${createdAt}`,
			createdAt,
		};

		mutate(postComment(postId, commentData), {
			optimisticData: {
				...post,
				comments: [...post.comments, newComment],
			},
			populateCache: false,
			revalidate: true,
			rollbackOnError: true,
		});
		return;
	};

	const removeComment = (_key: string) => {
		if (!post) return console.log(`postDetail이 없습니다.`);

		mutate(deleteComment(postId, _key), {
			optimisticData: {
				...post,
				comments: post.comments.filter(comment => comment._key !== _key),
			},
			populateCache: false,
			revalidate: false,
			rollbackOnError: true,
		});
	};

	return { post, error, comments: post?.comments, addComment, removeComment };
}

function postComment(postId: string, commentData: IComment) {
	return fetch(`/api/posts/${postId}/comments`, {
		method: 'POST',
		body: JSON.stringify({ postId, commentData }),
	}).then(res => res.json());
}

function deleteComment(postId: string, _key: string) {
	return fetch(`/api/posts/${postId}/comments/${_key}`, {
		method: 'DELETE',
	}).then(res => res.json());
}
