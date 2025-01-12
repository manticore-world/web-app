'use client';

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Github, Telegram, X} from '@/public/icons';

import {Button} from '@/components/ui/button';



function LiveClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleString("en-US", {
                weekday: "short", // Sun
                month: "short",   // Jan
                day: "2-digit",   // 05
                year: undefined,  // Omit year
                hour: "2-digit",  // 7 PM
                minute: "2-digit",
                second: undefined,
                hour12: true,     // 12-hour format
            });
            setTime(`${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span className={"text-white font-mono mr-2"}>{time}</span>;
}

export default function TopBar() {
    const   router = useRouter();
    return (
        <div>

            <div
                className={"fixed flex items-center justify-between top-0 left-0 w-full bg-white/20 backdrop-blur-xl shadow-lg text-white"}>
                <div>
                    <Button variant="ghost" className={"hover:bg-white/20 rounded-none"} onClick={() => router.push('/')}>
                        Home
                    </Button>

                    <Button variant="ghost" className={"hover:bg-white/20 rounded-none"}
                            onClick={() => window.open("https://manticore-2.gitbook.io/docs", "_blank")}>
                        Docs
                    </Button>
                </div>
                <div className={"flex items-center gap-2"}>
                    <div className={"flex items-center"}>
                        <Button variant="ghost" size="icon" className={"hover:bg-white/20 p-1 rounded-xl"}
                                onClick={() => window.open("https://x.com/world_manticore", "_blank")}>
                            <Image src={X} alt={"X"} width={32} height={32} className="rounded-xl"/>
                        </Button>
                        <Button variant="ghost" size="icon" className={"hover:bg-white/20 p-1 rounded-xl"}
                                onClick={() => window.open("https://t.me/manticoreworldsol", "_blank")}>
                            <Image src={Telegram} alt={"Telegram"} width={32} height={32} className="rounded-xl"/>
                        </Button>
                        <Button variant="ghost" size="icon" className={"hover:bg-white/20 p-1 rounded-xl"}
                                onClick={() => window.open("https://github.com/manticore-world", "_blank")}>
                            <Image src={Github} alt={"Github"} width={32} height={32} className="rounded-xl"/>
                        </Button>
                    </div>
                    {LiveClock()}
                </div>
            </div>
        </div>
    )
        ;
}