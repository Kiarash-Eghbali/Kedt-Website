"use client";
import Link from "next/link";


function ThemeButton() {
	return (
		<>
			<div>
				<Link
					href={"/contact-me"}
					className="p-2 rounded-lg bg-blue-500 text-white text-sm font-bold md:text-base hover:bg-blue-600 transition-all duration-300 hidden md:inline-block"
				>
					بیا صحبت کنیم
				</Link>
                
			</div>
		</>
	);
}

export default ThemeButton;
