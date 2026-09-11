import PortfolioInterface from "@/types/PortfolioInterface";
import Link from "next/link";
import Image from "next/image";

function Portfolio({ image, title, body, link, className, languages, classLang, classBody }: PortfolioInterface) {
	return (
		<>
			<Link
				href={link}
				className={` group  ${className ? className : ""} m-1 my-10 flex items-right justify-center flex-col hover:-translate-y-0.75 transition-all duration-150`}
			>
				<div className="overflow-hidden mx-auto rounded-xl group-hover:scale-103 transition-all  duration-300">
					<Image
						src={image}
						alt={title}
						width={520}
						height={320}
						sizes="260px"
						loading="lazy"
						style={{ aspectRatio: "260/160" }} 
						className="w-65 h-40 rounded-xl object-cover" 
					/>
				</div>

				<div className={`grid grid-cols-2 md:grid-cols-3 font-bold w-[70%] md:w-full h-full text-center gap-2 mt-2`}>
					{languages.map((lang, index) => (
						<span
							className={`${classLang ? classLang : ""} rounded-lg px-1 flex items-center justify-center  py-2  text-xs `}
							key={index}
						>
							<h1 className="self-center">{lang}</h1>
						</span>
					))}
				</div>
				<h1 className={`text-xl font-bold mt-5`}>{title}</h1>
				<p className={` ${classBody ? classBody : ""} text-md mt-5 h-40 w-[85%]`}>{body}</p>
				<p className={` ${classBody ? classBody : ""} text-sm mt-5 underline`}>مشاهده سایت</p>
			</Link>
		</>
	);
}

export default Portfolio;
