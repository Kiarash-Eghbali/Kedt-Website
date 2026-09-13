"use client";
import { useThemeContext } from "@/contexts/ThemeContext";

function AboutParagraph() {
	const { isDark } = useThemeContext();
	return (
		<>
			<div className={`lg:col-span-2 `}>
				<h2 className={`pb-5 pt-5 text-center md:text-right text-xl font-bold ${isDark ? "text-gray-200" : "text-gray-800"}`}>درباره کیارش اقبالی بیشتر بدانید</h2>
				<p className={`text-xs w-[90%] mx-auto md:w-full lg:text-sm  ${isDark ? "text-[#888888]" : "text-gray-700"}`}>
					من کیارش اقبالی هستم، یه توسعه‌دهنده فول‌استک ۱۶ ساله از ایران. از ۱۴ سالگی شروع به برنامه‌نویسی کردم و تا الان با زبان‌ها و فریم‌ورک‌های مختلفی کار کردم — از JavaScript و TypeScript گرفته تا React، Next.js، Express.js، Laravel و
					MongoDB. تمرکز اصلی من روی ساخت وبسایت‌های ریسپانسیو، APIهای حرفه‌ای و تجربه کاربری تمیز و مینیمال هست. همچنین تجربه کار با WordPress و ساخت قالب و افزونه رو هم دارم. هدف من تبدیل شدن به یه توسعه‌دهنده سطح بالا (Senior) و فریلنسری
					بین‌المللی هست.
				</p>
			</div>
		</>
	);
}

export default AboutParagraph;
