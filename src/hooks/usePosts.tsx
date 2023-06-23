import useSWR from "swr";
import { IPost } from "../../type";

export default function usePosts() {
	const {
		data: posts,
		isLoading,
		error,
		mutate,
	} = useSWR<IPost[]>("/api/posts");

	return { posts, isLoading, error };
}
