import type { Metadata } from "next";
import { Vazirmatn, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ViewProvider } from "@/contexts/ViewContext";
import { ToastContainer } from "react-toastify";
import { ReactionProvider } from "@/contexts/ReactionContext";
import { MenuProvider } from "@/contexts/MenuContext";
import Menu from "@/components/Layouts/Headers/menu";

const vazirMatn = Vazirmatn({ subsets: ["arabic"], display: "swap", preload: true, adjustFontFallback: true });
const poppins = Poppins({ subsets: ["latin"], display: "swap", variable: "--font-poppins", weight: ["500"] });

export const metadata: Metadata = {
	title: "KEDT | تیم توسعه دهنده کیارش اقبالی",
	description: "KEDT website created with NextJs , Typescript , Tailwindcss , ExpressJs , NodeJs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="fa"
			dir="rtl"
			className={`${vazirMatn.className} ${poppins.variable} h-full antialiased`}
		>
			<ThemeProvider>
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={true}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<ViewProvider>
					<ReactionProvider>
						<MenuProvider>
							<Menu />
							<Header />
							{children}
							<Footer />
						</MenuProvider>
					</ReactionProvider>
				</ViewProvider>
			</ThemeProvider>
		</html>
	);
}
