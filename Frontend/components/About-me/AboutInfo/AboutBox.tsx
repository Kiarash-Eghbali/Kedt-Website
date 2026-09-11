"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import AboutProfile from "./AboutProfile";


function AboutBox() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`mt-40 lg:w-[80%] xl:w-[70%] md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center`}>
				<AboutProfile />
				<div className={`lg:col-span-2 `}>
					<h2 className={`pb-5 pt-5 text-center md:text-right text-xl font-bold ${isDark ? "" : "text-gray-800"}`}>درباره کیارش اقبالی بیشتر بدانید</h2>
					<p className={`text-xs w-[90%] mx-auto md:w-full lg:text-sm  ${isDark ? "" : "text-gray-700"}`}>
						من کیارش اقبالی هستم، یه توسعه‌دهنده فول‌استک ۱۶ ساله از ایران. از ۱۴ سالگی شروع به برنامه‌نویسی کردم و تا الان با زبان‌ها و فریم‌ورک‌های مختلفی کار کردم — از JavaScript و TypeScript گرفته تا React، Next.js، Express.js،
						Laravel و MongoDB. تمرکز اصلی من روی ساخت وبسایت‌های ریسپانسیو، APIهای حرفه‌ای و تجربه کاربری تمیز و مینیمال هست. همچنین تجربه کار با WordPress و ساخت قالب و افزونه رو هم دارم. هدف من تبدیل شدن به یه توسعه‌دهنده سطح بالا
						(Senior) و فریلنسری بین‌المللی هست.
					</p>
				</div>
			</section>
		</>
	);
}

export default AboutBox;
