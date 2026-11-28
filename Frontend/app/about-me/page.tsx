import type { Metadata } from "next";
import AboutBox from "@/components/About-me/AboutInfo/AboutBox";
import AboutSkill from "@/components/About-me/AboutSkill/AboutSkill";
import AboutStatisticsBox from "@/components/About-me/AboutStatistics/AboutStatisticsBox";
import AboutTimelineBox from "@/components/About-me/AboutTimeline/AboutTimelineBox";

export const metadata: Metadata = { title: "درباره کیارش اقبالی", description: "با کیارش اقبالی، توسعه‌دهنده وب آشنا شوید؛ مسیر یادگیری، مهارت‌ها، تجربه‌ها و فناوری‌های مورد استفاده در پروژه‌های KEDT.", alternates: { canonical: "/about-me" } };

function aboutMe() {
	return (
		<>
			<main className="md:w-[80%] flex items-center justify-center flex-col gap-30 mx-auto">
				<AboutBox />
				<AboutStatisticsBox />
				<AboutTimelineBox />
				<AboutSkill />
			</main>
		</>
	);
}

export default aboutMe;
