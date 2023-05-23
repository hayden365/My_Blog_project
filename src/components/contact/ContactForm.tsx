"use client";
import { sendContactEmail } from "@/service/contact";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
	name: string;
	from: string;
	subject: string;
	message: string;
};

const DEFAULT_DATA = {
	name: "",
	from: "",
	subject: "",
	message: "",
};

const InputStyle =
	"font-semibold mb-8 border border-gray-300 rounded-sm text-primary indent-2 p-1";

export default function ContactForm({ grid }: { grid: string }) {
	const [form, setForm] = useState<Form>(DEFAULT_DATA);
	const [banner, setBanner] = useState<BannerData | null>(null);

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		sendContactEmail(form)
			.then(() => {
				setBanner({
					message: "메일을 성공적으로 보냈습니다.",
					state: "success",
				});
				setForm(DEFAULT_DATA);
			})
			.catch(() => {
				setBanner({
					message: "메일전송에 실패했습니다. 다시 시도해 주세요.",
					state: "error",
				});
			})
			.finally(() =>
				setTimeout(() => {
					setBanner(null);
				}, 3000),
			);
	};

	return (
		<section className={`${grid} shadow-lg p-5`}>
			<h2 className="text-3xl font-bold text-primary">Contact</h2>
			<form onSubmit={onSubmit} className="flex flex-col gap-2 h-full py-10">
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					autoFocus
					value={form.name}
					onChange={onChange}
					className={InputStyle}
				/>
				<label htmlFor="from">Your email</label>
				<input
					type="email"
					id="from"
					name="from"
					required
					autoFocus
					value={form.from}
					onChange={onChange}
					className={InputStyle}
				/>
				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					id="subject"
					name="subject"
					required
					autoFocus
					value={form.subject}
					onChange={onChange}
					className={InputStyle}
				/>
				<label htmlFor="message">Your message (optional)</label>
				<textarea
					rows={6}
					id="message"
					name="message"
					required
					autoFocus
					value={form.message}
					onChange={onChange}
					className={InputStyle}
				/>
				<button
					type="submit"
					className="bg-uRed text-white text-lg font-bold p-2 w-32"
				>
					Submit
				</button>
			</form>
			{banner && <Banner banner={banner} />}
		</section>
	);
}
