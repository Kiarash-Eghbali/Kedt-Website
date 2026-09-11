import AboutBox from "@/components/About-me/AboutInfo/AboutBox";
import AboutSkill from "@/components/About-me/AboutSkill/AboutSkill";
import AboutStatisticsBox from "@/components/About-me/AboutStatistics/AboutStatisticsBox";
import AboutTimelineBox from "@/components/About-me/AboutTimeline/AboutTimelineBox";

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
