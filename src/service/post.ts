import createSlug from '@/utils/createSlug';
import extractDescription from '@/utils/extractDescription';
import { IPostDetail } from '../../type';
import { assetsURL, client, urlFor } from './sanity';

export async function getPostDetail(
	userId: string,
	postId: string,
): Promise<IPostDetail> {
	if (!userId) throw new Error('userId 에러');
	if (!postId) throw new Error('postId 에러');

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

interface ICreatePostPayload {
	title: string;
	tags: string[];
	content: string;
	file: Blob;
}

export async function createPost(userId: string, payload: ICreatePostPayload) {
	const { title, tags, content, file } = payload;

	return fetch(assetsURL, {
		method: 'POST',
		headers: {
			'content-type': file.type,
			authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
		},
		body: file,
	})
		.then(res => res.json())
		.then(result => {
			return client.create(
				{
					_type: 'post',
					author: { _ref: userId },
					title,
					slug: createSlug(title),
					content,
					description: extractDescription(content, 150),
					tags,
					postImage: { asset: { _ref: result.document._id } },
					comments: [],
				},
				{
					autoGenerateArrayKeys: true,
				},
			);
		});
}

export async function deletePost(postId: string) {
	const targetPost = {
		query: `
      *[_type=="post" && _id == "${postId}"][0]
    `,
	};
	return client
		.delete(targetPost)
		.then(() => console.log('포스트 삭제 성공: postId'))
		.catch(error => console.error(error));
}

export async function deleteComment(postId: string, _key: string) {
	return client
		.patch(postId)
		.unset([`comments[_key=="${_key}"]`])
		.commit();
}
