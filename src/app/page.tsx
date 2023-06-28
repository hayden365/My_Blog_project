import RightSection from '@/components/RightSection';
import PostListContainer from '@/components/post-mainpage/PostListContainer';
import Slider from '@/components/slides/Slider';

export default async function Home() {
	return (
		<>
			{/* <Slider posts={postsFive} /> */}
			<div className="lg:grid lg:grid-cols-3">
				<PostListContainer />
				<RightSection grid="lg:col-start-3 lg:col-end-4" />
			</div>
		</>
	);
}
