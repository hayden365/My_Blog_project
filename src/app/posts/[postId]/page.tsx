import BoxSkeleton from '@/components/BoxSkeleton';
import AdjacentPost from '@/components/post-detail/AdjacentPost';
import AdjacentPostCard from '@/components/post-detail/AdjacentPostCard';
import PostContent from '@/components/post-detail/PostContent';
import RightSection from '@/components/RightSection';
import usePost from '@/hooks/usePost';
import React from 'react';

type Props = {
	params: { postId: string };
};

export default async function PostPage({ params: { postId } }: Props) {
	return (
		<article className="grid grid-cols-1 lg:grid-cols-4">
			<div className="relative grid lg:col-start-1 lg:col-end-4 pr-10 mb-[60px]">
				<PostContent postId={postId} />
				<AdjacentPost postId={postId} />
			</div>
			<RightSection grid="lg:col-start-4 lg:col-end-5" />
		</article>
	);
}
