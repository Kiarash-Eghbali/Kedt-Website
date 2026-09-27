"use client";
import { useThemeContext } from "@/contexts/ThemeContext";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	const { isDark } = useThemeContext();
	return (
		<>
			<div className="h-screen flex items-center justify-center flex-col gap-3">
				<div className="md:w-[70%]">
					<p className="text-3xl text-center font-semibold ">{error.message}</p>
				</div>

				<button
					onClick={reset}
					className={`px-3 py-2 rounded-xl ${isDark ? "bg-[#252525] hover:bg-blue-500" : "bg-blue-500 text-white hover:bg-blue-600"} transition-all duration-150`}
				>
					تلاش مجدد
				</button>
			</div>
		</>
	);
}
