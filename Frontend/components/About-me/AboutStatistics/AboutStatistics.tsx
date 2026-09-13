"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import Statistics from "./Statistics";
import { faCalendar, faListCheck, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";


function AboutStatistics() {
    const { isDark } = useThemeContext();
    return (
        <>
            <section className={`grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 pt-5 lg:gap-10`}>
                <Statistics 
                    icon={faListCheck}
                    name="تعداد پروژه"
                    content="+3"
                    className={isDark ? "text-blue-400 hover:border-blue-400" : "text-blue-400 hover:border-blue-500"}
                    classTitle={isDark ? "group-hover:text-blue-400" : "group-hover:text-blue-500"}
                />
                <Statistics
                    icon={faUsers}
                    name="تعداد اعضای تیم"
                    content="1 نفر"
                    className={isDark ? "text-pink-400 hover:border-pink-400" : "text-pink-500 hover:border-pink-500"}
                    classTitle={isDark ? "group-hover:text-pink-400" : "group-hover:text-pink-500"}
                />
                <Statistics
                    icon={faStar}
                    name="رضایت مشتری"
                    content="85%"
                    className={isDark ? "text-yellow-400 hover:border-yellow-400" : "text-yellow-500 hover:border-yellow-500"}
                    classTitle={isDark ? "group-hover:text-yellow-400" : "group-hover:text-yellow-600"}
                />
                <Statistics
                    icon={faCalendar}
                    name="تجربه"
                    content="+1 سال"
                    className={isDark ? "text-green-400 hover:border-green-400" : "text-green-600 hover:border-green-500"}
                    classTitle={isDark ? "group-hover:text-green-400" : "group-hover:text-green-600"}
                />
            </section>
        </>
    )
};

export default AboutStatistics;