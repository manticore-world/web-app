import React from "react";
import {Open_Sans as Sans} from "next/font/google";
import type {Metadata} from "next";

import Desktop from "@/components/core/desktop";


const sans = Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
    title: "Manicore World | Launch",
};

export default function LaunchLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div
            className={`${sans.className} h-screen w-screen dark`}
            style={
                {
                    backgroundImage: "url('/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                }
            }
        >
        <div className={"pt-8"}>
            {children}
        </div>
        <Desktop/>
        </div>
    );
}
