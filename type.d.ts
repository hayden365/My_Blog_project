export interface IPost {
	title: string;
	slug: string;
	postImage: string | null;
	description: string;
	tags: string[];
	postId: string;
	createdAt: string;
	updatedAt: string;
	commentsLength: number;
}

export type PostData = IPost & {
	content: string;
	next: IPost | null;
	prev: IPost | null;
};

export interface IPostDetail {
	author: {
		name: string;
		email: string;
		image: string;
	};
	title: string;
	slug: string;
	postImage: string;
	tags: string[];
	postId: string;
	createdAt: string;
	updatedAt: string;
	comments: IComment[];
	content: string;
}
