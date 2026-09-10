import InfoBox from "@/components/Home/InfoBox";
import CardInfoBox from "@/components/Home/CardInfoBox";
import PortfolioBox from "@/components/Home/PortfolioBox";
import SkillInfoBox from "@/components/Home/SkillInfoBox";

function homePage() {
	return (
		<>
			<section className="md:w-[80%] mx-auto">
				<InfoBox />
				<CardInfoBox />
				<PortfolioBox />
				<SkillInfoBox />
			</section>
		</>
	);
}

export default homePage;
