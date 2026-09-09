import InfoBox from "@/components/Home/InfoBox";
import SliderInfoBox from "@/components/Home/SliderInfoBox";

function homePage() {
	return (
		<>
			<section className="md:w-[80%] mx-auto">
				<InfoBox />
				<SliderInfoBox />
			</section>
		</>
	);
}

export default homePage;
