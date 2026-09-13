import CardInterFace from "@/types/CardInterFace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { faCpanel, faSquareFigma } from "@fortawesome/free-brands-svg-icons";

function Card({ icon, title, body, className }: CardInterFace) {
	return (
		<>
			<div className={`${className ? className : ""} border px-2 py-7 rounded-xl text-center flex items-center justify-center flex-col gap-5 my-10 w-[80%] h-[80%] md:w-[90%] lg:w-[70%] xl:w-[95%]  mx-auto  `}>
				<FontAwesomeIcon
					icon={icon}
					className={`text-4xl xl:text-5xl`}
				/>
				<h1 className={`text-lg font-bold lg:text-sm xl:text-xl`}>{title}</h1>
				<p className={`text-xs m-1 mt-2`}>{body}</p>
			</div>
		</>
	);
}

export default Card;
