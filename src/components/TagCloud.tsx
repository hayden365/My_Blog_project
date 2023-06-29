'use client';
import usePosts from '@/hooks/usePosts';
import getAllTags from '@/utils/getAllTags';
import React from 'react';
import BoxSkeleton from './BoxSkeleton';
import TagUi from './ui/TagUi';

export default function TagCloud({ style }: { style?: string }) {
	const { posts } = usePosts();
	const tags = Object.keys(React.useMemo(() => getAllTags(posts), [posts]));

	return (
		<BoxSkeleton title="Tag Cloud">
			<TagUi tags={tags} style={style} />
		</BoxSkeleton>
	);
}
