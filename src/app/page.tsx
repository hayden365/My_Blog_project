import Image from "next/image";
import RightSection from "@/components/RightSection";
import Scroll from "@/components/Scroll";
import { Post, getAllPosts } from "@/service/posts";
import PostListContainer from "@/components/Main/PostListContainer";

export default async function Home() {
	const posts: Array<Post> = await getAllPosts();
	const postsThree: Array<Post> = posts.slice(0, 3);
	return (
		<div className="max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-3">
			<PostListContainer posts={posts} />
			<RightSection posts={postsThree} />
		</div>
	);
}
