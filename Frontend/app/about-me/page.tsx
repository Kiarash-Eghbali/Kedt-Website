
import AboutBox from "@/components/About-me/AboutBox";
import AboutSkill from "@/components/About-me/AboutSkill";

function aboutMe() {
	return (
		<>
			<main className="md:w-[80%] flex items-center justify-center flex-col gap-5 mx-auto">
				<div className={`h-180 flex items-center justify-center `}>
					<AboutBox />
				</div>

				<AboutSkill />
			</main>
		</>
	);
}

export default aboutMe;
