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

const vazirMatn = Vazirmatn({ subsets: ["arabic"], display: "swap", preload: true, adjustFontFallback: true, variable: "--font-vazir" });
const poppins = Poppins({ subsets: ["latin"], display: "swap", variable: "--font-poppins", weight: ["500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kedt.ir"),
  title: { default: "KEDT | طراحی و توسعه وب با کیارش اقبالی", template: "%s | KEDT" },
  description: "KEDT؛ نمونه‌کارها، مهارت‌ها و خدمات طراحی و توسعه وب کیارش اقبالی با React، Next.js و TypeScript.",
  category: "technology",
  applicationName: "KEDT",
  keywords: ["KEDT", "کیارش اقبالی", "طراحی سایت", "توسعه وب", "Next.js", "React", "TypeScript", "طراحی وبسایت"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fa_IR", url: "https://kedt.ir", siteName: "KEDT", title: "KEDT | طراحی و توسعه وب", description: "نمونه‌کارها و معرفی خدمات طراحی و توسعه وب کیارش اقبالی." },
  twitter: { card: "summary_large_image", title: "KEDT | طراحی و توسعه وب", description: "نمونه‌کارها و معرفی خدمات طراحی و توسعه وب کیارش اقبالی." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
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
