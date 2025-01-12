import React from "react";
import {Open_Sans as Sans} from "next/font/google";
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/core/header";

const sans = Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
    title: "Manticore World",
    description: "DeFi + AI: Empowering the future of decentralized finance with smart, automated solutions on Solana",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${sans.className} dark`}
        >
        <Header/>
        {children}
        </body>
        </html>
    );
}
