import Image from "next/image";
import RightSection from "@/components/RightSection";
import Scroll from "@/components/Scroll";
import PostList from "@/components/Main/PostList";
import { Post, getAllPosts } from "@/service/posts";

export default async function Home() {
	const posts: Array<Post> = await getAllPosts();

	return (
		<div className="max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-3">
			<PostList posts={posts} />
			<RightSection posts={posts} />
		</div>
	);
}
