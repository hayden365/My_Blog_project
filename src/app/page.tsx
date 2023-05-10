import Image from "next/image";
import RightSection from "@/components/RightSection";
import Scroll from "@/components/Scroll";
import { Post, getAllPosts } from "@/service/posts";
import PostListContainer from "@/components/Main/PostListContainer";
import Slider from "@/components/Slider/Slider";

export default async function Home() {
	const posts: Array<Post> = await getAllPosts();
	const postsFive: Array<Post> = posts.slice(0, 5);
	return (
		<>
			<Slider posts={postsFive} />
			<div className="grid grid-cols-1 lg:grid-cols-3">
				<PostListContainer posts={posts} size="large" />
				<RightSection grid="lg:col-start-3 lg:col-end-4" />
			</div>
		</>
	);
}
