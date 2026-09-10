"use client";
import Link from "next/link";
import Image from "next/image";
import pic from "../../public/nano-banana-3bbbe006478acfc767060b100a5c70ab-1_-_Copy-removebg-preview.webp";
import Navbar from "./Headers/navbar";
import ThemeButton from "./Headers/themeButton";
import { useThemeContext } from "@/contexts/ThemeContext";

function Header() {
	const { isDark } = useThemeContext();
	return (
		<>
			<header className={`w-full fixed top-0 z-10 border-b  ${isDark ? "border-[#292929] bg-[#141414]" : "border-gray-200 bg-[whitesmoke]"} px-8 py-3 flex items-center justify-between  `}>
				<div className="flex items-center justify-center">
					<Link
						href={"/"}
						className="w-15 h-15  md:w-20 md:h-20"
					>
						<Image
							src={pic}
							alt={"Kedt-Team-pic"}
							loading="eager"
						/>
					</Link>
				</div>
				<Navbar />
				<ThemeButton />
			</header>
		</>
	);
}

export default Header;
