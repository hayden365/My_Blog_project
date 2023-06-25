import { IPostDetail } from "../../type";
import { client, urlFor } from "./sanity";

export async function getPostDetail(
	userId: string,
	postId: string,
): Promise<IPostDetail> {
	if (!userId) throw new Error("userId 에러");
	if (!postId) throw new Error("postId 에러");

	const GROQ = `
  *[_type == "post"&&_id == "${postId}" && author->_id == "${userId}"]{
    "author":{
      "name": author->name,
      "email": author->email,
      "image": author->image,
    },
    "title": title,
    "slug": slug,
    "postImage": postImage,
    "tags": tags,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt,
    "postId": _id,
    "comments": comments,
    "content": content,
  }[0]
  `;

	return client
		.fetch(GROQ)
		.then(post => ({
			...post,
			comments: post?.comments ?? [],
			tags: post?.tags ?? [],
			postImage: post?.postImage ? urlFor(post.postImage) : null,
		}))
		.catch(err => console.error(err));
}
