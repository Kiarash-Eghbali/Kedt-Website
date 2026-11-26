"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import FAQBox from "@/components/Contact-me/ContactFAQ/FAQBox";
import { faEnvelope, faPaperPlane, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const channels = [
  { label: "ایمیل", value: "king.game.live89@gmail.com", href: "mailto:king.game.live89@gmail.com", icon: faEnvelope, tint: "text-rose-500", hint: "برای درخواست‌های رسمی و جزئیات پروژه" },
  { label: "تلگرام", value: "@KiarashEgh", href: "https://t.me/KiarashEgh", icon: faTelegram, tint: "text-sky-500", hint: "برای گفت‌وگوی سریع‌تر" },
  { label: "لینکدین", value: "KiarashEghbali", href: "https://www.linkedin.com/in/kiarasheghbali", icon: faLinkedin, tint: "text-blue-600", hint: "برای ارتباط حرفه‌ای" },
  { label: "اینستاگرام", value: "@KiarashJson", href: "https://instagram.com/KiarashJson", icon: faInstagram, tint: "text-pink-500", hint: "برای دنبال‌کردن فعالیت‌ها" },
];

export default function ContactMe() {
  const { isDark } = useThemeContext();
  const panel = isDark ? "border-white/10 bg-[#1b1d23]" : "border-slate-200 bg-white";
  const muted = isDark ? "text-slate-400" : "text-slate-600";
  return (
    <main className={`mx-auto w-full max-w-6xl px-4 pb-24 pt-28 md:px-8 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
      <section className={`relative isolate overflow-hidden rounded-[2rem] border px-6 py-10 shadow-xl shadow-blue-950/5 md:px-12 md:py-14 ${panel}`}>
        <div className="pointer-events-none absolute -left-16 -top-24 -z-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-28 -z-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-500"><span className="h-2 w-2 rounded-full bg-emerald-400" /> آماده بررسی ایده‌های جدید</span>
          <h1 className="mt-5 text-3xl font-black leading-[1.5] md:text-5xl">بیایید ایده‌تان را <span className="bg-gradient-to-l from-sky-500 to-indigo-500 bg-clip-text text-transparent">به واقعیت تبدیل کنیم.</span></h1>
          <p className={`mt-5 max-w-2xl text-sm leading-8 md:text-base ${muted}`}>برای ثبت پروژه، مشاوره یا همکاری پیام بدهید. کمی درباره ایده، امکانات موردنیاز و زمان‌بندی مدنظرتان بنویسید تا بتوانیم بهترین مسیر را انتخاب کنیم.</p>
          <a href="mailto:king.game.live89@gmail.com" className="mt-7 inline-flex items-center gap-3 rounded-xl bg-gradient-to-l from-sky-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1">ارسال ایمیل <FontAwesomeIcon icon={faArrowLeft} /></a>
        </div>
      </section>
      <section className="mt-10">
        <div className="mb-5"><p className="text-xs font-bold tracking-widest text-sky-500">GET IN TOUCH</p><h2 className="mt-2 text-2xl font-black">راه‌های ارتباطی</h2><p className={`mt-2 text-sm ${muted}`}>یکی از روش‌های زیر را انتخاب کنید؛ خوشحال می‌شوم درباره ایده‌تان بیشتر بدانم.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => <a key={channel.label} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined} className={`group flex items-center gap-4 rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5 ${panel}`}><span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-500/10 text-2xl ${channel.tint}`}><FontAwesomeIcon icon={channel.icon} /></span><span className="min-w-0 flex-1"><span className="block text-xs font-bold text-sky-500">{channel.label}</span><span className="mt-1 block truncate text-sm font-extrabold" dir="ltr">{channel.value}</span><span className={`mt-1 block text-xs ${muted}`}>{channel.hint}</span></span><FontAwesomeIcon icon={faArrowLeft} className="text-sm text-slate-400 transition group-hover:-translate-x-1 group-hover:text-sky-500" /></a>)}
        </div>
      </section>
      <section className={`mt-10 rounded-[2rem] border p-6 md:p-8 ${panel}`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-black">برای شروع همکاری چه چیزهایی بفرستم؟</h2><p className={`mt-2 text-sm leading-7 ${muted}`}>نوع وب‌سایت، امکانات اصلی، بودجه تقریبی، زمان تحویل و نمونه‌های الهام‌بخش را بنویسید تا بررسی دقیق‌تری داشته باشیم.</p></div><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-2xl text-sky-500"><FontAwesomeIcon icon={faPaperPlane} /></span></div>
      </section>
      <section className="mt-14"><FAQBox /></section>
    </main>
  );
}
