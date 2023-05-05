import { Post } from "@/service/posts";
import React from "react";

type Props = {
	post: Post;
	type: "prev" | "next";
};

export default function AdjacentPostCard({ post }: Props) {
	return <div>AdjacentPostCard</div>;
}
