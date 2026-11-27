import InfoBox from "@/components/Home/InfoSection/InfoBox";
import CardInfoBox from "@/components/Home/CardSection/CardInfoBox";
import PortfolioBox from "@/components/Home/PortfolioSection/PortfolioBox";
import SkillInfoBox from "@/components/Home/SkillSection/SkillInfoBox";
import LikeBox from "@/components/Home/LikeSection/LikeBox";

function homePage() {
	return (
		<main className="kedt-home mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 pb-24 pt-24 md:px-8 md:gap-16">
			<div className="kedt-home-hero w-full"><InfoBox /></div>
			<div className="kedt-home-block kedt-home-process w-full"><CardInfoBox /></div>
			<div className="kedt-home-block kedt-home-portfolio w-full"><PortfolioBox /></div>
			<div className="kedt-home-block kedt-home-skills w-full"><SkillInfoBox /></div>
			<div className="kedt-home-block kedt-home-reactions w-full"><LikeBox /></div>
		</main>
	);
}

export default homePage;
