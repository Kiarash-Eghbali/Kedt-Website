import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

const vazirMatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "KEDT | Kiarash Eghbali Developer Team",
  description: "KEDT website created with NextJs , Typescript , Tailwindcss , ExpressJs , NodeJs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirMatn.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
