"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useState } from "react";

function InfoParagraph() {
	const { isDark } = useThemeContext();
    const [ isOpen, setIsOpen ] = useState<boolean>(false)


	return (
		<>
			<div className={``}>
				<p className={`text-[14px] w-[90%] ${isOpen ? "h-[90%]" : "h-[40%]"} rounded-xl transition-all duration-250 ease-in-out overflow-y-hidden mx-auto mt-2 ${isDark ? "text-[#888888]" : "text-[#151515]"}`}>
					برای ثبت پروژه یا همکاری، کافیه از طریق یکی از شبکه‌های اجتماعی زیر با من در ارتباط باشید و پس از دریافت پیام شما، در اولین فرصت پاسخ می‌دم و جلسه‌ی مشاوره رایگان برای بررسی ایده‌هاتون برگزار می‌کنم تا بتوانیم بهترین راه‌حل رو
					برای پروژه‌تان پیدا کنیم. لطفاً قبل از ارسال پیام، حتماً موارد زیر رو مشخص کنید تا من بتوانم دقیق‌تر و سریع‌تر به شما پاسخ بدم: نوع پروژه که می‌تواند سایت شخصی، شرکتی، فروشگاهی، نمونه‌کار، وبلاگ یا هر نوع سایت دیگری باشد، بودجه‌ی
					مدنظر برای پروژه، زمان موردنظر برای تحویل پروژه، هرگونه ایده یا طرح اولیه‌ای که در ذهن دارید، اگر نمونه‌کار یا سایت مشابهی مد نظر دارید که دوست دارید سایت شما شبیه به آن باشد، لینکش رو برای من بفرستید تا بتوانم دقیق‌تر متوجه سلیقه
					و نیاز شما بشوم، همچنین اگر نیاز به امکانات خاصی مثل سیستم عضویت، فروشگاه اینترنتی، فرم‌های پیشرفته، دکمه‌های پرداخت، اتصال به درگاه بانکی، پنل مدیریت اختصاصی، یا هر ویژگی دیگری دارید، حتماً آن را هم در پیام خود ذکر کنید تا من
					بتوانم یک برنامه‌ی دقیق و کامل برای شما طراحی کنم و تمام نیازهایتان را پوشش بدهم.
				</p>
				<div className={`w-full flex items-center justify-center mt-3`}>
					<button className={`px-2 py-1 rounded-md ${isDark ? "bg-blue-600 hover:bg-blue-700" : ""} transition-all duration-150`} onClick={() => setIsOpen(! isOpen)} >{isOpen ? "نمایش کمتر" : "نمایش بیشتر"}</button>
				</div>
			</div>
		</>
	);
}

export default InfoParagraph;
