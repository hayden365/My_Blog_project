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
};

export const getAllPosts = cache(async () => {
	const filePath = path.join(process.cwd(), "data", "posts.json");
	return readFile(filePath, "utf-8")
		.then<Post[]>(JSON.parse)
		.then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});
