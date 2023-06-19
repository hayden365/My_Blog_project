import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
	title: string;
	date: Date;
	comments: number;
	likes: number;
	description: string;
	categories: string[];
	image: string;
	path: string;
	featured: boolean;
};

export type PostData = Post & {
	content: string;
	next: Post | null;
	prev: Post | null;
};

export async function getThreePost(): Promise<Post[]> {
	return getAllPosts().then(posts => posts.slice(0, 3));
}

// `cache` 는 요청의 수명 기간 동안 함수를 캐시할 수 있는 리액트 18의 기능입니다.
// 즉, 페이지를 렌더링할 때 여러 번 호출할 수 있지만 페이지 빌드 당 한 번만 getPosts()가 호출됩니다.
export const getAllPosts = cache(async () => {
	const filePath = path.join(process.cwd(), "data", "posts.json");
	return readFile(filePath, "utf-8")
		.then<Post[]>(JSON.parse)
		.then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getPostData(fileName: string): Promise<PostData> {
	const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
	const posts = await getAllPosts();
	const post = posts.find(post => post.path === fileName);

	if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

	const index = posts.indexOf(post);
	const prev = index > 0 ? posts[index - 1] : null;
	const next = index < posts.length ? posts[index + 1] : null;
	const content = await readFile(filePath, "utf-8");
	return { ...post, content, prev, next };
}
