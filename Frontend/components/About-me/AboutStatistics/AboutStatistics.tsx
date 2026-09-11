"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Statistics from "./Statistics";
import { faCalendar, faListCheck, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";


function AboutStatistics() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`grid grid-cols-1`}>
                <Statistics 
                    icon={faListCheck}
                    name="تعداد پروژه"
                    content="+3"
                    className={isDark ? "text-blue-400 hover:border-blue-400" : ""}
                    classTitle={isDark ? "group-hover:text-blue-400" : ""}
                />
                <Statistics
                    icon={faUsers}
                    name="تعداد اعضای تیم"
                    content="2 نفر"
                    className={isDark ? "text-pink-400 hover:border-pink-400" : ""}
                    classTitle={isDark ? "group-hover:text-pink-400" : ""}
                />
                <Statistics
                    icon={faStar}
                    name="رضایت مشتری"
                    content="85%"
                    className={isDark ? "text-yellow-400 hover:border-yellow-400" : ""}
                    classTitle={isDark ? "group-hover:text-yellow-400" : ""}
                />
                <Statistics
                    icon={faCalendar}
                    name="تجربه"
                    content="+1 سال"
                    className={isDark ? "text-green-400 hover:border-green-400" : ""}
                    classTitle={isDark ? "group-hover:text-green-400" : ""}
                />
            </section>
        </>
    )
};

export default AboutStatistics;