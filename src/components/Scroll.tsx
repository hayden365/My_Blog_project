"use client";
import React, { useState, useEffect } from "react";

export default function Scroll() {
	const [scrollY, setScrollY] = useState(0);

	function logit() {
		setScrollY(window.pageYOffset);
	}

	useEffect(() => {
		function watchScroll() {
			window.addEventListener("scroll", logit);
		}
		watchScroll();
		return () => {
			window.removeEventListener("scroll", logit);
		};
	}, []);

	return <div>Scroll{scrollY}</div>;
}
