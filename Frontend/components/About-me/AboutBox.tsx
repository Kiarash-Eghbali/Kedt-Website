"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import pic from "@/public/nano-banana-3bbbe006478acfc767060b100a5c70ab-1_-_Copy-removebg-preview.webp";
import Image from "next/image";
import InfoButton from "../Home/InfoSection/InfoButton";


function AboutBox() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`h-[50%]  ${isDark ? "border border-[#252525] px-3 py-2 rounded-xl" : "border border-gray-300 px-3 py-2 rounded-xl"}  md:w-[90%] lg:w-[60%] flex items-center justify-center flex-col`}>
				<Image
					src={pic}
					alt={"kedt-team-pic"}
					width={80}
					height={80}
					className={`w-20 h-20 md:w-25 md:h-25 p-2 object-cover rounded-full ${isDark ? "bg-[#252525]" : "bg-white"}`}
					sizes="80px"
					loading="lazy"
				/>
				<h1 className={`text-xl md:text-2xl font-bold ${isDark ? "text-gray-300" : "text-gray-800"} mt-1`}>کیارش اقبالی</h1>
				<p className={`text-xs text-center md:text-sm mt-4 mb-2 w-[80%] ${isDark ? "text-[#bbbbbb]" : "text-gray-700"}`}>
					من کیارش اقبالی هستم، یه توسعه‌دهنده فول‌استک ۱۶ ساله از ایران. از ۱۴ سالگی شروع به برنامه‌نویسی کردم و تا الان با زبان‌ها و فریم‌ورک‌های مختلفی کار کردم — از JavaScript و TypeScript گرفته تا React، Next.js، Express.js، Laravel و
					MongoDB. تمرکز اصلی من روی ساخت وبسایت‌های ریسپانسیو، APIهای حرفه‌ای و تجربه کاربری تمیز و مینیمال هست. همچنین تجربه کار با WordPress و ساخت قالب و افزونه رو هم دارم. هدف من تبدیل شدن به یه توسعه‌دهنده سطح بالا (Senior) و فریلنسری
					بین‌المللی هست.
				</p>
                <InfoButton />
			</section>
		</>
	);
}

export default AboutBox;
