"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Timeline from "./Timeline";

function AboutTimeline() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`flex items-start mt-5 justify-center gap-5 flex-col`}>
                <Timeline
                    year={1403}
                    title="یادگیری وردپرس به صورت پیشرفته"
                    content="من در سال 1403 برای اولین بار  برای یادگیری برنامه نویسی سراغ دوره طراحی سایت با (Wordpress) رفتم و به صورت پیشرقته دوره را به اتمام رساندم."
                />
                <Timeline
                    year={1404}
                    title="یادگیری زبان های اولیه"
                    content="در سال 1404 من اولین زبان های مبتدی طراحی سایت را یاد گرفتم و با آنها سایت هایی به صورت تستی ساختم و در اواخر آن سایت Kedt را نسخه قبلیش رو با Html , css, tailwind, js ساختم"
                />
                <Timeline
                    year={1405}
                    title="یادگیری فریم ورک ها"
                    content="امسال به صورت جدی شروع به یادگیری فریم ورک ها و دیتا بیس کردم و شروع کار با بک اند هم اغاز کردم و تا الان در حال آموزش و تمرین تخصصی هستم."
                />
            </section>
        </>
    )
};

export default AboutTimeline;