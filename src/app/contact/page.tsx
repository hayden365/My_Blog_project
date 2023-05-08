import ContactForm from "@/components/Contact/ContactForm";
import RightSection from "@/components/RightSection";
import React from "react";

export default function Contactpage() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 mb-40">
			<ContactForm grid="grid lg:col-start-1 lg:col-end-3 pr-10 my-[60px]" />
			<RightSection grid="lg:col-start-3 lg:col-end-4" />
		</div>
	);
}
