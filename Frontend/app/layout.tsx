import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";


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
      lang="en"
      className={`${vazirMatn.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
