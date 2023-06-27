import createSlug from "@/utils/createSlug";
import extractDescription from "@/utils/extractDescription";
import useSWR from "swr";
import { IPost } from "../../type";

export type TCreatePostParam = {
	form: {
		title: string;
		content: string;
	};
	posts?: IPost[];
	tags?: string[];
	file?: File;
};

export default function usePosts() {
	const { data: posts, error, mutate } = useSWR<IPost[]>("/api/posts");

	const addPost = ({ form, tags = [], file }: TCreatePostParam) => {
		const { title, content } = form;
		const tempPostId = `temp-${new Date().getTime()}`;

		if (!posts) return console.log("posts가 없습니다.");

		const tempPost: IPost = {
			title: `${title}`,
			slug: createSlug(title),
			postImage: file ? URL.createObjectURL(file) : "",
			description: extractDescription(content, 150),
			tags,
			postId: tempPostId,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			commentsLength: 0,
		};

		const tempPosts: IPost[] = [tempPost, ...posts];

		mutate(postNewData({ form, tags, file }), {
			optimisticData: tempPosts,
			populateCache: false,
			revalidate: true,
			rollbackOnError: true,
		});
		return;
	};

	const removePost = (postId: string) => {
		mutate(deletePost(postId), {
			optimisticData: posts?.filter(post => post.postId !== postId),
			populateCache: false,
			revalidate: false,
			rollbackOnError: true,
		});
	};

	return { posts, error, addPost, removePost };
}

function postNewData({ form, tags, file }: TCreatePostParam) {
	const { title, content } = form;
	const formData = new FormData();
	if (!file) throw Error("file이 없습니다.");

	formData.append("file", file);
	formData.append("postData", JSON.stringify({ title, content, tags }));

	return fetch("/api/posts", {
		method: "POST",
		body: formData,
	}).then(res => res.json());
}

function deletePost(postId: string) {
	return fetch(`/api/posts/${postId}`, {
		method: "DELETE",
	}).then(res => res.json());
}
