import InfoBox from "@/components/Home/InfoSection/InfoBox";
import CardInfoBox from "@/components/Home/CardSection/CardInfoBox";
import PortfolioBox from "@/components/Home/PortfolioSection/PortfolioBox";
import SkillInfoBox from "@/components/Home/SkillSection/SkillInfoBox";
import LikeBox from "@/components/Home/LikeSection/LikeBox";

function homePage() {
	return (
		<>
			<main className="md:w-[80%] flex items-center justify-center flex-col gap-30 mx-auto">
				<InfoBox />
				<CardInfoBox />
				<PortfolioBox />
				<SkillInfoBox />
				<LikeBox />
			</main>
		</>
	);
}

export default homePage;
