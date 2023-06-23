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
		name: string; // 포스트 작성자 name ( user의 id 를 의미함 )
		email: string; // 포스트 작성자의 email
		image: string; // 포스트 작성자의 아바타 이미지
	};
	title: string; // 포스트 제목
	slug: string; // 포스트 제목으로 만든 slug (url로 사용 for SEO)
	postImage: string; // 포스트 대표이미지
	tags: string[]; // 태그 목록
	postId: string; // post 데이터의 id 를 의미. db 에서 유일
	createdAt: string; // 생성날짜
	updatedAt: string; // 업뎃날짜
	comments: IComment[]; // 댓글 목록
	content: string; // 포스트 내용
}
