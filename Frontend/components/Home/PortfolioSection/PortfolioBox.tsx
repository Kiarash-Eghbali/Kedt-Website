"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Portfolio from "./Portfolio";
import morvarid from "@/public/Screenshot (13).webp";
import kedt_old from "@/public/Screenshot (17).webp";
import kedt_new from "@/public/Screenshot (24).webp";

function PortfolioBox() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`mt-5 flex items-center justify-center flex-col`}>
				<h1 className={`text-xl text-center font-bold ${isDark ? "text-[#888888]" : "text-gray-600"}`}>نمونه کار</h1>
				<section className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b ${isDark ? "border-[#252525]" : "border-gray-400"} mb-5 items-center w-full justify-center`}>
					<Portfolio
						image={morvarid}
						title={"شیرالات مروارید"}
						body="یک فروشگاه آنلاین شیرالات ساخته‌شده با WordPress و WooCommerce برای یک کسب‌وکار. شامل کاتالوگ محصولات، سفارش آنلاین و طراحی واکنش‌گرا."
						link="https://morvarid.top"
						languages={["Wordpress", "JavaScript", "Elementor"]}
						className={isDark ? "bg-[#202020] w-[85%] mx-auto px-5 py-3 rounded-lg text-[#999999]" : "border border-gray-400 w-[85%] mx-auto px-5 py-3 rounded-lg "}
						classLang={isDark ? "bg-[#333333] rounded-xl md:mb-10" : "bg-gray-200 md:mb-10 rounded-xl"}
						classBody={isDark ? "text-[#555555]" : "text-[#888888]"}
					/>
					<Portfolio
						image={kedt_old}
						title={"Kedt نسخه قدیمی"}
						body="یک وبسایت ساده و واکنش‌گرا ساخته‌شده با HTML، CSS، JavaScript و Tailwind CSS در ۵ روز. طراحی‌شده به‌عنوان صفحه اصلی تیم با UI ساده و ریسپانسیو."
						link="https://legacy.kedt.ir"
						languages={["Html", "Css", "JavaScript", "Tailwindcss"]}
						className={isDark ? "bg-[#202020] w-[85%] mx-auto px-5 py-3 rounded-lg text-[#999999]" : "border border-gray-400 w-[85%] mx-auto px-5 py-3 rounded-lg "}
						classLang={isDark ? "bg-[#333333] rounded-xl" : "bg-gray-200 rounded-xl"}
						classBody={isDark ? "text-[#555555]" : "text-[#888888]"}
					/>
					<Portfolio
						image={kedt_new}
						title="نسخه جدید Kedt"
						body="یک وبسایت مدرن ساخته‌شده با Next.js، TypeScript و Tailwind CSS. شامل قابلیت تغییر تم تاریک/روشن، طراحی واکنش‌گرا و انیمیشن‌های روان."
						link="https://kedt.ir"
						languages={["Next Js", "Express Js", "Tailwindcss", "TypeScript", "React Js", "Node Js"]}
						className={isDark ? "bg-[#202020] w-[85%] mx-auto px-5 py-3 rounded-lg text-[#999999]" : "border border-gray-400 w-[85%] mx-auto px-5 py-3 rounded-lg "}
						classLang={isDark ? "bg-[#333333] rounded-xl" : "bg-gray-200 rounded-xl"}
						classBody={isDark ? "text-[#555555]" : "text-[#888888]"}
					/>
				</section>
			</section>
		</>
	);
}

export default PortfolioBox;
