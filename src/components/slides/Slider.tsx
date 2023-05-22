"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Post } from "@/service/posts";
import SlideCard from "./SlideCard";
import SliderArrows from "./SliderArrow";

type Props = {
	posts: Post[];
};

const box = {
	entry: (direction: 1 | -1) => ({
		opacity: 0,
	}),
	center: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: (direction: 1 | -1) => ({
		opacity: 0,
		transition: { duration: 1 },
	}),
};

export default function Slider({ posts }: Props) {
	const [visible, setVisible] = useState(0);

	const onNext = () => {
		setVisible(prev => (prev === posts.length - 1 ? 0 : prev + 1));
	};
	const onPrev = () => {
		setVisible(prev => (prev === 0 ? posts.length - 1 : prev - 1));
	};
	return (
		<section className="w-full flex items-center border bg-white shadow-sm mx-auto max-w-6xl h-96 relative mb-20">
			<AnimatePresence>
				<motion.div
					variants={box}
					initial="entry"
					animate="center"
					exit="exit"
					key={visible}
					className="absolute w-full h-full"
				>
					<SlideCard post={posts[visible]} />
				</motion.div>
			</AnimatePresence>
			<SliderArrows onNext={onNext} onPrev={onPrev} />
		</section>
	);
}
