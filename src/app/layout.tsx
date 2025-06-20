import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Messenger from "@/sections/messenger";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Abdul Rahman portfolio",
    description:' A portfolio website showcasing my work and skills as a software engineer, with a focus on web development and design.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white `}
            >
                <Messenger/>
                {children}
               
            </body>
        </html>
    );
}
