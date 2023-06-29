import { IPost } from '../../type';

export default function getAllTags(posts?: IPost[]) {
	const tagCounts: Record<string, number> = {};

	posts?.forEach(post => {
		post.tags.forEach(tag => {
			if (tagCounts[tag]) {
				tagCounts[tag]++;
			} else {
				tagCounts[tag] = 1;
			}
		});
	});

	return tagCounts;
}
