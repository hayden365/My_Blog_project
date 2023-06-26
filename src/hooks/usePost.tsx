import { IPostDetail } from "../../type";
import useSWR from "swr";

export default function usePost(postId: string) {
	const urlKey = `/api/posts/${postId}`;
	const { data: post, error, mutate } = useSWR<IPostDetail>(urlKey);

	return { post, error };
}
