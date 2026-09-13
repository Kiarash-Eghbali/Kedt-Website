"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import FAQItem from "./FAQItem";

function FAQBox() {
	const { isDark } = useThemeContext();
	return (
		<>
			<section className={` flex items-center justify-center gap-5 flex-col`}>
				<h1 className={`text-xl text-center ${isDark ? "text-[#888888] font-bold" : "text-gray-600 font-bold"}`}>سوالات متداول</h1>
				<FAQItem
					title="چطور میتونم پروژه ثبت کنم ؟"
					content="شما میتوانید با ارتباط با یکی از شبکه های اجتماعی بنده با من در تماس باشید و بنده پاسخگو هستم"
				/>
				<FAQItem
					title="هزینه‌ی طراحی سایت چقدره؟"
                    content="هزینه به نوع پروژه، امکانات و زمان تحویل بستگی داره. برای دریافت قیمت دقیق، جزئیات پروژه‌تون رو برام بفرستید تا بعد از بررسی، پیش‌فاکتور دقیق براتون ارسال کنم."
				/>
                <FAQItem
                    title="چقدر زمان می بره تا سایت تحویل داده بشه ؟"
                    content="سایت‌های شخصی و شرکتی بین ۷ تا ۲۱ روز، سایت‌های فروشگاهی بین ۲۱ تا ۴۵ روز و پروژه‌های سفارشی با توجه به نیاز مشتری زمان‌بندی می‌شه."
                />
                <FAQItem
                    title="با چه تکنولوژی هایی کار میکنی ؟"
                    content="React js, Next js, Node js, Express js, Wordpress, Php, Laravel بسته به نیاز پروژه بهترین رو انتخاب میکنم"
                />
                <FAQItem
                    title="بعد از تحویل, پشتیبانی میکنید ؟"
                    content="در صورت نیاز پشتیبانی با شما هماهنگ خواهید کرد"
                />
                <FAQItem
                    title="چطور مطمعن بشم سایت در گوگل دیده میشه ؟"
                    content="با رعایت اصول سئو، تنظیم عنوان و توضیحات متا، سرعت بارگذاری و ساختار استاندارد، سایت شما برای گوگل بهینه می‌شه تا رتبه‌ی خوبی در نتایج جستجو داشته باشه."
                />
			</section>
		</>
	);
}

export default FAQBox;
