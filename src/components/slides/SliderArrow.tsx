import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
	onNext: () => void;
	onPrev: () => void;
};

const arrowClassName =
	"hover:bg-uPrimary rounded-full text-white bg-uRed p-3 box-content absolute cursor-pointer text-xl z-50 transition-colors duration-300 ";

export default function SliderArrows({ onNext, onPrev }: Props) {
	return (
		<>
			<AiOutlineArrowLeft
				className={arrowClassName + " left-6"}
				onClick={onPrev}
			/>
			<AiOutlineArrowRight
				className={arrowClassName + " right-6"}
				onClick={onNext}
			/>
		</>
	);
}
