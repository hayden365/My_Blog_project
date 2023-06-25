import { IPost } from "../../type";

export function adjacentPost(posts: IPost[], postId: string) {
	const index = posts.findIndex(post => post.postId === postId);
	const prev = index > 0 ? posts[index - 1] : null;
	const next = index < posts.length ? posts[index + 1] : null;
	return { prev, next };
}
