'use client';

import React, {useEffect, useState} from "react";

import {Logo} from '@/public/icons';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import "@/styles/Chat.module.css";

export default function Chat() {
    return (
        <div className={"h-full"}>
            <div className={"h-full flex flex-col gap-2 p-2"}>
                <ScrollArea className={"flex-1  px-4"}>
                    <AIMessage/>
                </ScrollArea>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className={"sticky text-white flex items-center h-12 bg-zinc-900 backdrop-blur-xl shadow-lg rounded-lg cursor-no-drop"}>
                                <input type={"text"}
                                       className={"flex-1 p-2 bg-transparent outline-none cursor-no-drop"}
                                       disabled={true}
                                       placeholder={"type a message..."}/>
                                <Button variant={"default"} size={"icon"} className={"mx-2"} disabled={true}>
                                    <Send/>
                                </Button>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side={"bottom"}>
                            <p>Chat will be active after the development process.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

function AIMessage() {
    const message = useStreamText("Hello, I'm Manticore. How can I help you today?");
    return <div className={"flex flex-wrap gap-1 my-2"}>
        <Avatar>
            <AvatarImage src={Logo.src}/>
            <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className={"bg-neutral-900 rounded-xl p-2 space-y-2 text-white"}>
            {message}
        </div>
    </div>
}

function useStreamText(text: string) {
    const [message, setMessage] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < text.length) {
                setMessage((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [index, text]);

    return <div className={"flex gap-0.5 items-center"}>
        <p>{message}</p>
        <div className={"cursor-effect h-4 w-1.5 bg-white"}/>
    </div>;
}