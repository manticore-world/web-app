import React from "react";
import {Open_Sans as Sans} from "next/font/google";
import type {Metadata} from "next";
import "./globals.css";

import Desktop from "@/components/core/desktop";


const sans = Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
    title: "Manticore Protocol",
    description: "Manticore Protocol is a decentralized protocol for creating and trading synthetic assets.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body
            className={`${sans.className}`}

        >
        <div className={"pt-8"}>
            {children}
        </div>
        <Desktop/>
        </body>
        </html>
    );
}
