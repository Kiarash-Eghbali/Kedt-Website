import Link from "next/link";

function Navbar() {
	return (
		<>
			<div className="flex items-center justify-center gap-5">
				<Link
					className="hidden md:inline-block text-gray-400 hover:text-gray-800 transition-all duration-300"
					href={"/"}
				>
					خانه
				</Link>
				<Link
					href={"/about-me"}
					className="hidden md:inline-block text-gray-400 hover:text-gray-800 transition-all duration-300"
				>
					درباره من
				</Link>
				<Link
					href={"/contact-me"}
					className="hidden md:inline-block text-gray-400 hover:text-gray-800 transition-all duration-300"
				>
					تماس با من{" "}
				</Link>
			</div>
		</>
	);
}

export default Navbar;
