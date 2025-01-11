'use client';

import React from "react";
import {Rnd} from "react-rnd";
import {Maximize2, Minus, ShieldCheck, X} from "lucide-react";
import {WindowsProps} from '@/types/window';

export default function Windows({windows, setWindows}: WindowsProps) {

    const bringToFront = (id: string) => {
        const maxZIndex = Math.max(...windows.map((w) => w.zIndex));
        setWindows((prevWindows) =>
            prevWindows.map((w) =>
                w.id === id ? {...w, zIndex: maxZIndex + 1} : w
            )
        );
    };

    const closeWindow = (id: string) => {
        setWindows((prevWindows) => prevWindows.filter((w) => w.id !== id));
    };

    const minimizeWindow = (id: string) => {
        setWindows((prevWindows) =>
            prevWindows.map((w) =>
                w.id === id ? {...w, minimized: !w.minimized} : w
            )
        );
    };

    const maximizeWindow = (id: string) => {
        setWindows((prevWindows) =>
            prevWindows.map((w) =>
                w.id === id ? {...w, maximized: !w.maximized} : w
            )
        );
    };

    const controllerButtonStyle = "h-4 w-4 rounded-full p-0.5 group-hover:scale-125 transition duration-300";

    return (
        <div className={"fixed w-screen h-screen top-0 left-0"}>
            {windows.map((window) => (
                <Rnd
                    key={window.id}
                    onMouseDown={() => bringToFront(window.id)}
                    default={{
                        x: window.x,
                        y: window.y,
                        width: window.width,
                        height: window.height,
                    }}
                    size={{
                        width: window.maximized ? "100%" : window.width,
                        height: window.maximized ? "100%" : window.minimized ? 30 : window.height,
                    }}
                    position={{
                        x: window.maximized ? 0 : window.x,
                        y: window.maximized ? 0 : window.y,
                    }}
                    style={{
                        zIndex: window.zIndex,
                    }}
                    className={"rounded-lg backdrop-blur-xl shadow-lg  min-w-96 min-h-96"}
                    onDragStop={(e, data) => {
                        if (!window.maximized) {
                            setWindows((prevWindows) =>
                                prevWindows.map((w) =>
                                    w.id === window.id
                                        ? {...w, x: data.x, y: data.y}
                                        : w
                                )
                            );
                        }
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        if (!window.maximized) {
                            setWindows((prevWindows) =>
                                prevWindows.map((w) =>
                                    w.id === window.id
                                        ? {
                                            ...w,
                                            width: parseInt(ref.style.width),
                                            height: parseInt(ref.style.height),
                                            x: position.x,
                                            y: position.y,
                                        }
                                        : w
                                )
                            );
                        }
                    }}
                    cancel={".cancel"}

                >
                    <div
                        className={"fixed w-full flex items-center p-1 rounded-t-lg group hover:cursor-pointer overflow-hidden min-w-96 bg-white/20 backdrop-blur-xl shadow-lg"}>
                        <div className={"absolute flex gap-1.5"}>
                            <X className={`${controllerButtonStyle} bg-red-500`}
                               onClick={() => closeWindow(window.id)}/>
                            <Minus className={`${controllerButtonStyle} bg-yellow-500`}
                                   onClick={() => minimizeWindow(window.id)}/>
                            <Maximize2 className={`${controllerButtonStyle} bg-green-500`}
                                       onClick={() => maximizeWindow(window.id)}
                            />
                        </div>
                        <div className={"flex text-center mx-auto items-center gap-1 text-white "}>
                            <p className={"font-mono text-lg"}>{window.title}</p>
                        </div>
                        <ShieldCheck size={20} strokeWidth={3} className={"text-green-500"}/>
                    </div>
                    <div className={"h-full pt-8 cancel cursor-auto"}>
                        {window.content}
                    </div>
                </Rnd>
            ))}

        </div>
    );
}
