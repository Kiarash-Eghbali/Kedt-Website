import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const vazirMatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = { title: "KEDT | تیم توسعه دهنده کیارش اقبالی", description: "KEDT website created with NextJs , Typescript , Tailwindcss , ExpressJs , NodeJs" };

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="fa"
			dir="rtl"
			className={`${vazirMatn.className}  h-full antialiased`}
		>
			<ThemeProvider>
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</html>
	);
}
