import { IPostDetail } from "../../type";
import useSWR from "swr";

export default function usePost(postId: string) {
	const urlKey = `/api/posts/${postId}`;
	console.log(urlKey);
	const { data: post, isLoading, error, mutate } = useSWR<IPostDetail>(urlKey);

	return { post, isLoading, error };
}
