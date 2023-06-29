'use client';
import RightSection from '@/components/RightSection';
import PostListContainer from '@/components/post-mainpage/PostListContainer';
import Slider from '@/components/slides/Slider';
import usePosts from '@/hooks/usePosts';
import { IPost } from '../../type';

export default function Home() {
	const { posts } = usePosts();
	return (
		<>
			{/* <Slider posts={postsFive} /> */}
			<div className="lg:grid lg:grid-cols-3">
				{posts && <PostListContainer posts={posts} />}
				<RightSection grid="lg:col-start-3 lg:col-end-4" />
			</div>
		</>
	);
}
