import useSWR from "swr";
import { IPost } from "../../type";

export default function usePosts() {
	const {
		data: posts,
		error,
		mutate,
	} = useSWR<IPost[]>("/api/posts");

	return { posts, error };
}
