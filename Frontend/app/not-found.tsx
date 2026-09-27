"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";

export default function NotFound() {
    const { isDark } = useThemeContext();

	return (
		<div className="text-center h-screen flex items-center justify-center gap-5 flex-col">
			<h1 className="text-md md:text-3xl lg:text-5xl font-black">404 | صفحه ی مورد نظر پیدا نشد</h1>
			<Link
				href="/"
				className={`px-3 py-2 rounded-xl ${isDark ? "bg-[#252525] hover:bg-blue-500" : "bg-blue-500 text-white hover:bg-blue-600"} transition-all duration-150`}
			>
				بازگشت
			</Link>
		</div>
	);
}
