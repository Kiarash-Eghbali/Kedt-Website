"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Card from "./Card";

function CardInfo() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center`}>
				<Card
					icon="fa-solid fa-server"
					title="خرید دامنه و هاست"
					body="دامنه، آدرس اینترنتی سایت شماست و هاست، فضایی روی سرور برای ذخیره‌ی فایل‌های سایت. به‌بیان ساده، دامنه مثل پلاکِ خانه و هاست مثل خودِ خانه می‌ماند؛ اولی باعث پیداشدن شما و دومی باعث بودنتان در فضای مجازی می‌شود."
					className={isDark ? "border-[#252525] bg-[#252525] text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-150" : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-150"}
                />
				<Card
					icon="fa-brands fa-square-figma"
					title="طراحی طرح نمونه برای ساخت"
					body="طراحی طرح نمونه یا Sample Design، یک نسخه‌ی اولیه از ظاهر و چیدمان سایت است که قبل از کدنویسی اصلی تهیه می‌شود. این طرح شامل جایگاه هدر، منو، بخش‌ها، دکمه‌ها و فوتر است و به شما کمک می‌کند نمای کلی سایت را پیش از اجرای نهایی ببینید و تغییرات لازم را اعمال کنید."
					className={isDark ? "border-[#252525] bg-[#252525] text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-150" : "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-150"}
				/>
				<Card
					icon="fa-solid fa-laptop-code"
					title="توسعه وبسایت"
					body="طراحی سایت یعنی فرآیند خلق و پیاده‌سازی ظاهر و ساختار یک وب‌سایت با استفاده از اصول زیبایی‌شناسی، تجربه کاربری و کدنویسی. یک طراح سایت با ترکیب هنر و تکنولوژی، ایده‌های مشتری را به صفحه‌هایی تعاملی و چشم‌نواز تبدیل می‌کند که هم کاربرپسند باشند و هم پیام برند را به‌درستی منتقل کنند."
				    className={isDark ? "border-[#252525] bg-[#252525] text-green-600 hover:bg-green-600 hover:text-white transition-all duration-150" : `border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-150`}
				/>
				<Card
					icon="fa-brands fa-cpanel"
					title="نصب سایت و تنظیمات اضافی"
					body="نصب سایت یعنی انتقال فایل‌های طراحی‌شده به روی هاست و راه‌اندازی آن برای نمایش در اینترنت. پس از نصب، تنظیمات اضافی شامل اتصال دامنه به هاست، نصب گواهی SSL برای امنیت، تنظیم زبان و زمان‌بندی سایت، نصب افزونه‌های موردنیاز (در وردپرس)، بهینه‌سازی سرعت و تنظیم فرم‌های تماس انجام می‌شود تا سایت شما کاملاً آماده‌ی استفاده باشد."
				    className={isDark ? "border-[#252525] bg-[#252525] text-[#888888] hover:bg-[#666666] hover:text-white transition-all duration-150" : "border-[#666666] text-[#666666] hover:bg-[#666666] hover:text-white transition-all duration-150"}
				/>
			</section>
		</>
	);
}

export default CardInfo;
