import AboutBox from "@/components/About-me/AboutInfo/AboutBox";
import AboutSkill from "@/components/About-me/AboutSkill/AboutSkill";

function aboutMe() {
	return (
		<>
			<main className="md:w-[80%] flex items-center justify-center flex-col gap-5 mx-auto">
				<AboutBox />
				<AboutSkill />
			</main>
		</>
	);
}

export default aboutMe;
