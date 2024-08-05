import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/navbar";
import SmoothScroll from "@/components/smoothscroll";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-test",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahem Khakiki Khaya - Portfolio",
  description:
    "Fahem Khakiki Khaya's personal portfolio website showcasing skills, projects, and contact information.",
  keywords:
    "Fahem Khakiki Khaya, portfolio, software engineer, web developer, Next.js, React",
  authors: [
    {
      name: "Fahem Khakiki Khaya",
      url: "https://fahem-khakiki-khaya.vercel.app",
    },
  ],
  openGraph: {
    title: "Fahem Khakiki Khaya - Portfolio",
    description:
      "Fahem Khakiki Khaya's personal portfolio website showcasing skills, projects, and contact information.",
    url: "https://fahem-khakiki-khaya.vercel.app",
    siteName: "Fahem Khakiki Khaya",
    images: [
      {
        url: "/static/profile-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Fahem Khakiki Khaya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahem Khakiki Khaya - Portfolio",
    description:
      "Fahem Khakiki Khaya's personal portfolio website showcasing skills, projects, and contact information.",
    images: [
      {
        url: "/static/profile-picture.jpg",
        alt: "Fahem Khakiki Khaya Portfolio",
      },
    ],
    creator: "@fahemkhakikikhaya",
  },
  icons: {
    icon: "/static/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <NavigationBar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
