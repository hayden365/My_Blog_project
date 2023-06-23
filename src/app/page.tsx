import RightSection from "@/components/RightSection";
import PostListContainer from "@/components/main/PostListContainer";
import Slider from "@/components/slides/Slider";

export default async function Home() {
	return (
		<>
			{/* <Slider posts={postsFive} /> */}
			<div className="grid grid-cols-1 lg:grid-cols-3">
				{/* <PostListContainer posts={posts} size="large" /> */}
				<RightSection grid="lg:col-start-3 lg:col-end-4" />
			</div>
		</>
	);
}
