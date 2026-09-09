import InfoBox from "@/components/Home/InfoBox";
import CardInfoBox from "@/components/Home/CardInfoBox";

function homePage() {
	return (
		<>
			<section className="md:w-[80%] mx-auto">
				<InfoBox />
				<CardInfoBox />
			</section>
		</>
	);
}

export default homePage;
