"use client";
import { useThemeContext } from "@/contexts/ThemeContext";

function InfoFooter() {
    const { isDark } = useThemeContext();
	return (
		<>
			<div className={`p-2 w-[90%]  md:w-full mx-auto pb-5 md:pb-1 border-b ${isDark ? "border-[#252525]" : "border-gray-400"} md:border-none`}>
                <h1 className={isDark ? "" : "text-gray-900 font-bold pb-1 "}>کیارش اقبالی</h1>
				<p className={` text-xs ${isDark ? "text-[#555555]" : "text-gray-600"} `}>
					کیارش اقبالی — توسعه‌دهنده فول‌استک و فریلنسر ۱۶ ساله | بیش از ۱ سال تجربه در توسعه وب تخصص در طراحی و توسعه وبسایت‌های مدرن با React, Next.js, TypeScript در فرانت‌اند و Express.js, PHP, Laravel در بک‌اند. آشنا با MongoDB, MySQL,
					WordPress و WooCommerce. علاقه‌مند به یادگیری مداوم و تبدیل ایده‌ها به محصولات دیجیتال کاربرپسند.
				</p>
			</div>
		</>
	);
}

export default InfoFooter;
