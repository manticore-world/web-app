'use client'

import Dock from "@/components/core/dock";
import TopBar from "@/components/core/topbar";
import React, {useState} from "react";
import {Window} from "@/types/window";
import Windows from "@/components/core/windows";
import StartupScreen from "@/components/core/StartupScreen";


export default function Desktop() {
    const [windows, setWindows] = useState<Window[]>([]);

    return (
        <div className={"fixed w-screen h-screen top-0 left-0"}>
            <StartupScreen/>
            <Windows windows={windows} setWindows={setWindows}/>
            <TopBar/>
            <Dock windows={windows} setWindows={setWindows}/>
        </div>
    )
}