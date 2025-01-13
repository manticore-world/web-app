'use client'

import {Card,  CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Github, LogoFlat,Telegram,X} from "@/public/icons";
import {Button} from "@/components/ui/button";
import React,{useState} from "react";
import {BookText, Rocket,Loader2} from "lucide-react";
import styles from "@/styles/Header.module.css";
import {useRouter, usePathname} from "next/navigation";

export default function Header(){
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isLaunch = pathname === "/launch";
    return (
        !isLaunch && <div className="flex items-center w-fit mx-auto mt-4 gap-2">
            <Card className="w-fit flex items-center bg-zinc-800/20 backdrop-blur-xl  shadow-lg shadow-white/5 overflow-hidden">
                <Image src={LogoFlat.src} alt={"Manticore World"} width={128} height={128} className="fixed -left-14 opacity-30"/>
                <CardHeader className="flex flex-row items-center gap-2">
                    <CardTitle className={styles.wrapper}>
                        <div className={styles.top}>Manticore World</div>
                        <div className={styles.bottom}>Manticore World</div>
                    </CardTitle>
                </CardHeader>
                <div className="flex mx-auto gap-1">
                    <Button  className="rounded-full" onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            router.push("/launch")
                            setLoading(false);
                        },300)
                    }} disabled={loading}>
                        {loading ? <Loader2 size={32} className="animate-spin"/> : <Rocket size={32}/>}
                        <span className="font-bold">Launch App</span>
                    </Button>
                    <Button variant="ghost" className="rounded-full" onClick={() => window.open("https://manticore-2.gitbook.io/docs","_blank")}>
                        <BookText size={32}/>
                        Docs
                    </Button>
                </div>
                <div className="flex gap-2 px-2">
                    <Button variant="ghost" size="icon" className={"hover:bg-white/20 p-1 rounded-xl"}
                            onClick={() => window.open("https://x.com/world_manticore", "_blank")}>
                        <Image src={X} alt={"Github"} width={64} height={64} className="rounded-xl"/>
                    </Button>
                    <Button variant="ghost" size="icon" className={"hover:bg-white/20 p-1 rounded-xl"}
                            onClick={() => window.open("https://t.me/manticoreworldsol", "_blank")}>
                        <Image src={Telegram} alt={"Github"} width={64} height={64} className="rounded-xl"/>
                    </Button>
                    <Button variant="ghost" size="icon" className={"hover:bg-white/20 p-1 rounded-xl"}
                            onClick={() => window.open("https://github.com/manticore-world", "_blank")}>
                        <Image src={Github} alt={"Github"} width={64} height={64} className="rounded-xl"/>
                    </Button>
                </div>
            </Card>

        </div>
    )
}