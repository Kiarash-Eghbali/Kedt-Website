"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";
import { faInstagram, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";


function Info() {
	const { isDark } = useThemeContext();
	return (
		<>
            <div className={`w-[90%] mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-center gap-5`}>
                <Social 
                    icon={faEnvelope}
                    content="king.game.live89@gmail.com"
                    className={isDark ? "text-red-400" : "text-pink-400"}
                />
                <Social
                    icon={faTelegram}
                    content="KiarashEgh@"
                    className={isDark ? "text-blue-400" : "text-blue-500"}
                />
                <Social
                    icon={faLinkedin}
                    content="KiarashEghbali@"
                    className={isDark ? "text-blue-500" : "text-blue-600"}
                />
                <Social
                    icon={faInstagram}
                    content="KiarashJson@"
                    className={isDark ? "text-pink-600" : "text-pink-600"}
                />
            </div>
		</>
	);
}

export default Info;
