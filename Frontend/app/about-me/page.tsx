"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeContext } from "@/contexts/ThemeContext";
import AboutStatisticsBox from "@/components/About-me/AboutStatistics/AboutStatisticsBox";
import AboutTimelineBox from "@/components/About-me/AboutTimeline/AboutTimelineBox";
import AboutSkill from "@/components/About-me/AboutSkill/AboutSkill";
import brandMark from "@/public/nano-banana-3bbbe006478acfc767060b100a5c70ab-1_-_Copy-removebg-preview.webp";
import { faArrowLeft, faCode, faLaptopCode, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
  const { isDark } = useThemeContext();
  const panel = isDark ? "border-white/10 bg-[#1b1d23]" : "border-slate-200 bg-white";
  const muted = isDark ? "text-slate-400" : "text-slate-600";
  return (
    <main className={`mx-auto w-full max-w-6xl px-4 pb-24 pt-28 md:px-8 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
      <section className={`relative isolate overflow-hidden rounded-[2rem] border ${panel} px-6 py-10 shadow-2xl shadow-blue-950/5 md:px-12 md:py-14`}>
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-2 text-xs font-bold text-sky-500"><span className="h-2 w-2 rounded-full bg-emerald-400" /> توسعه‌دهنده وب و سازنده KEDT</span>
            <h1 className="text-3xl font-black leading-[1.5] md:text-5xl">سلام، من <span className="bg-gradient-to-l from-sky-500 to-indigo-500 bg-clip-text text-transparent">کیارش اقبالی</span> هستم.</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 md:text-base ${muted}`}>توسعه‌دهنده فول‌استک علاقه‌مند به ساخت تجربه‌های دیجیتال سریع، کاربردی و چشم‌نواز. تمرکزم روی طراحی و توسعه وب‌سایت‌های واکنش‌گرا، پیاده‌سازی API و ساخت محصولاتی است که استفاده از آن‌ها ساده و لذت‌بخش باشد.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-me" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-l from-sky-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1">شروع همکاری <FontAwesomeIcon icon={faArrowLeft} /></Link>
              <a href="#journey" className={`rounded-xl border px-5 py-3 text-sm font-bold transition hover:-translate-y-1 ${panel}`}>مسیر من</a>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            <div className="absolute inset-5 rounded-[2.5rem] bg-gradient-to-br from-sky-500/25 to-indigo-500/20 blur-2xl" />
            <div className={`relative flex aspect-[4/4.5] w-full items-center justify-center overflow-hidden rounded-[2rem] border ${panel} p-8`}>
              <div className="absolute inset-3 rounded-[1.5rem] border border-dashed border-sky-500/30" />
              <Image src={brandMark} alt="نشان KEDT" width={360} height={360} priority className="relative z-10 h-auto w-[78%] object-contain drop-shadow-[0_18px_35px_rgba(14,165,233,.22)]" />
              <span className="absolute bottom-5 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-bold tracking-widest text-sky-500">KEDT · DEVELOPER</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          { icon: faCode, title: "کدنویسی تمیز", desc: "ساختار قابل توسعه و نگهداری" },
          { icon: faLaptopCode, title: "توسعه فول‌استک", desc: "از رابط کاربری تا API و دیتابیس" },
          { icon: faWandMagicSparkles, title: "تجربه کاربری", desc: "طراحی ساده، سریع و واکنش‌گرا" },
        ].map((item) => <article key={item.title} className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 ${panel}`}><span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-lg text-sky-500"><FontAwesomeIcon icon={item.icon} /></span><h2 className="font-extrabold">{item.title}</h2><p className={`mt-2 text-sm ${muted}`}>{item.desc}</p></article>)}
      </section>
      <section className={`mt-12 rounded-[2rem] border p-6 md:p-9 ${panel}`}>
        <div className="mb-4 flex items-center gap-3"><span className="h-8 w-1 rounded-full bg-gradient-to-b from-sky-500 to-indigo-500"/><h2 className="text-xl font-black">داستان من و KEDT</h2></div>
        <p className={`text-sm leading-8 md:text-base ${muted}`}>من از ۱۴ سالگی وارد دنیای برنامه‌نویسی شدم و قدم‌به‌قدم با ابزارها و فناوری‌های مختلف آشنا شدم؛ از JavaScript و TypeScript تا React، Next.js، Express.js، Laravel و MongoDB. تجربه کار با WordPress و ساخت قالب و افزونه را هم دارم. KEDT فضایی است برای نمایش مسیر یادگیری، تجربه‌ها و پروژه‌هایی که با علاقه و دقت می‌سازم. هدفم رشد مداوم و همکاری در پروژه‌های واقعی و حرفه‌ای است.</p>
      </section>
      <div className="mt-12"><AboutStatisticsBox /></div>
      <div id="journey" className="mt-12 scroll-mt-28"><AboutTimelineBox /></div>
      <div className="mt-12"><AboutSkill /></div>
    </main>
  );
}
