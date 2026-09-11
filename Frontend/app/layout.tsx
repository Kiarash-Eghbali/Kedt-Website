import type { Metadata } from "next";
import { Vazirmatn, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const vazirMatn = Vazirmatn({ 
	subsets: ["arabic"],
	display: "swap",
	preload: true,
	adjustFontFallback: true,
});
const poppins = Poppins({ 
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["500"] 
});

export const metadata: Metadata = { title: "KEDT | تیم توسعه دهنده کیارش اقبالی", description: "KEDT website created with NextJs , Typescript , Tailwindcss , ExpressJs , NodeJs" };

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="fa"
			dir="rtl"
			className={`${vazirMatn.className} ${poppins.variable} h-full antialiased`}
		>
			<ThemeProvider>
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</html>
	);
}
