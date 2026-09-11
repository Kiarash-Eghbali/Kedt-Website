import AboutBox from "@/components/About-me/AboutInfo/AboutBox";
import AboutSkill from "@/components/About-me/AboutSkill/AboutSkill";
import AboutStatisticsBox from "@/components/About-me/AboutStatistics/AboutStatisticsBox";

function aboutMe() {
	return (
		<>
			<main className="md:w-[80%] flex items-center justify-center flex-col gap-30 mx-auto">
				<AboutBox />
				<AboutStatisticsBox />
				<AboutSkill />
			</main>
		</>
	);
}

export default aboutMe;
