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

export default function PostPage({ params: { postId } }: Props) {
	return (
		<div className="lg:grid lg:grid-cols-4 lg:gap-4">
			<article className="lg:col-span-3 my-[60px]">
				<PostContent postId={postId} />
				<AdjacentPost postId={postId} />
			</article>
			<RightSection />
		</div>
	);
}
