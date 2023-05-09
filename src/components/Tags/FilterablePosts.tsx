import { Post } from "@/service/posts";
import React from "react";
import PostListContainer from "../Main/PostListContainer";
import FilteredPostCard from "./FilteredPostCard";

export default function FilterablePosts({
	filtered,
}: {
	filtered: Array<Post>;
}) {
	return (
		<section className="grid grid-cols-3">
			<PostListContainer posts={filtered} />
		</section>
	);
}
