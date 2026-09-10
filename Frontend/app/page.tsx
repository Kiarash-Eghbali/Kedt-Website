import InfoBox from "@/components/Home/InfoSection/InfoBox";
import CardInfoBox from "@/components/Home/CardSection/CardInfoBox";
import PortfolioBox from "@/components/Home/PortfolioSection/PortfolioBox";
import SkillInfoBox from "@/components/Home/SkillSection/SkillInfoBox";
import LikeBox from "@/components/Home/LikeSection/LikeBox";

function homePage() {
	return (
		<>
			<section className="md:w-[80%] mx-auto">
				<InfoBox />
				<CardInfoBox />
				<PortfolioBox />
				<SkillInfoBox />
				<LikeBox />
			</section>
		</>
	);
}

export default homePage;
