import { IPost } from "../../type";
import { urlFor, client } from "./sanity";

export async function getAllPostsOf(userId?: string | null): Promise<IPost[]> {
	if (!userId) return [];
	const GROQ = `
  *[_type == "post"&& author->_id=="${userId}"]
      | order(_createdAt desc){
      "title":title,
      "slug":slug,
      "postImage":postImage,
      "description":description,
      "tags":tags,
      "postId": _id,
      "createdAt": _createdAt,
      "updatedAt":_updatedAt,
      "commentsLength": count(comments)
    }
  `;

	return client.fetch(GROQ).then(posts =>
		posts.map((post: IPost) => ({
			...post,
			tags: post.tags ?? [],
			postImage: post.postImage ? urlFor(post.postImage) : null,
			commentsLength: post.commentsLength ?? 0,
		})),
	);
}
