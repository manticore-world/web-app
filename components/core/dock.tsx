'use client';

import React, {ReactElement, ReactNode, useRef} from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';
import {animate, motion, MotionValue, useMotionValue, useSpring, useTransform,} from 'framer-motion';
import {DexScreener, Drift, Jito, Jupiter,  Logo, Marginfi, Meteora, Orca, Pump, Raydium} from '@/public/icons';
import {StaticImageData} from 'next/image';
import {Window, WindowsProps} from '@/types/window';
import Chat from '@/components/core/chat';

interface App {
    name: string;
    icon: StaticImageData;
    url?: string;
    content: ReactElement;
    divideLeft?: boolean;
    divideRight?: boolean;
}

const SCALE = 2; // max scale factor of an icon
const DISTANCE = 110; // pixels before mouse affects an icon
const NUDGE = 40; // pixels icons are moved away from mouse
const SPRING = {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
};
const APPS: App[] = [
    {
        name: 'Manticore AI',
        icon: Logo,
        content: <Chat/>,
        divideRight: true
    },
    {
        name: 'jup.ag',
        icon: Jupiter,
        content: <iframe src="https://jup.ag/" className="w-full h-full"/>,
    },
    {
        name: 'raydium.io',
        icon: Raydium,
        content: <iframe src="https://raydium.io/" className="w-full h-full"/>,
    },
    {
        name: 'orca.so',
        icon: Orca,
        content: <iframe src="https://orca.so/" className="w-full h-full"/>,
    },
    {
        name: 'meteora.ag',
        icon: Meteora,
        content: <iframe src="https://meteora.ag/" className="w-full h-full"/>,
    },
    {
        name: 'app.drift.trade',
        icon: Drift,
        content: <iframe src="https://app.drift.trade/" className="w-full h-full"/>,
    },
    {
        name: 'app.marginfi.com',
        icon: Marginfi,
        content: <iframe src="https://app.marginfi.com/" className="w-full h-full"/>,
    },
    {
        name: 'www.jito.network',
        icon: Jito,
        content: <iframe src="https://www.jito.network/" className="w-full h-full"/>,
    },
    {
        name: 'pump.fun',
        icon: Pump,
        url: 'https://pump.fun/',
        content: <NotSupportedWindow/>,
        divideLeft: true
    },
    {
        name: 'dexscreener.com',
        icon: DexScreener,
        url: 'https://dexscreener.com/',
        content: <NotSupportedWindow/>,
    },
];

export default function Dock(
    {windows, setWindows}: WindowsProps
) {
    const mouseLeft = useMotionValue(-Infinity);
    const mouseRight = useMotionValue(-Infinity);
    const left = useTransform(mouseLeft, [0, 40], [0, -40]);
    const right = useTransform(mouseRight, [0, 40], [0, -40]);
    const leftSpring = useSpring(left, SPRING);
    const rightSpring = useSpring(right, SPRING);

    const addNewWindow = (id: string, content: ReactElement) => {
        if (windows.find((w) => w.id === id)) {
            const opened: Window | undefined = windows.find((w) => w.id === id)
            if (!opened) return;
            opened.minimized = false;
            opened.maximized = false;
            setWindows([...windows]);
            return;
        }
        const newWindow: Window = {
            id: id,
            title: id,
            zIndex: windows.length + 2,
            width: window.innerWidth / 2,
            height: window.innerHeight / 2,
            x: (window.innerWidth / 2 - window.innerWidth / 4) + (windows.length * 20),
            y: (window.innerHeight / 2 - window.innerHeight / 4) + (windows.length * 20),
            minimized: false,
            maximized: false,
            content: content,
        };
        setWindows([...windows, newWindow]);
    };

    return (
        <div>
            <div className={"fixed bottom-0 right-1/2 translate-x-1/2 mb-2"}>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-1 h-1 bg-white/20 rounded-full"/>
                    <div className="w-1 h-1 bg-white/20 rounded-full"/>
                    <div className="w-1 h-1 bg-white/20 rounded-full"/>
                </div>
                <motion.div
                    onMouseMove={(e) => {
                        const {left, right} = e.currentTarget.getBoundingClientRect();
                        const offsetLeft = e.clientX - left;
                        const offsetRight = right - e.clientX;
                        mouseLeft.set(offsetLeft);
                        mouseRight.set(offsetRight);
                    }}
                    onMouseLeave={() => {
                        mouseLeft.set(-Infinity);
                        mouseRight.set(-Infinity);
                    }}
                    className="mx-auto hidden items-center gap-3 px-2 py-3 sm:flex relative"
                >
                    <motion.div
                        className="absolute rounded-2xl inset-y-0 bg-white/20 border border-white/15 -z-10 backdrop-blur-xl shadow-lg"
                        style={{left: leftSpring, right: rightSpring}}
                    />

                    {Array.from(Array(APPS.length).keys()).map((i) => (
                        <div key={i} className={"flex gap-3"}>
                            {APPS[i].divideLeft && <div className="w-1 h-auto bg-white/20 rounded-lg"/>}
                            <AppIcon mouseLeft={mouseLeft} icon={APPS[i].icon} url={APPS[i]?.url}
                                     run={() => addNewWindow(APPS[i].name, APPS[i].content)}>
                                {APPS[i].name}
                            </AppIcon>
                            {APPS[i].divideRight && <div className="w-1 h-auto bg-white/20 rounded-lg"/>}
                        </div>
                    ))}
                </motion.div>

                <div className="sm:hidden">
                    <div
                        className="mx-auto flex max-w-full gap-4 overflow-x-scroll rounded-2xl bg-white/20 border border-white/15 -z-10 backdrop-blur-xl shadow-lg px-4 p-3 sm:hidden">
                        {Array.from(Array(APPS.length).keys()).map((i) => (
                            <div key={i}>
                                <AppIcon mouseLeft={mouseLeft} icon={APPS[i].icon} url={APPS[i]?.url}>
                                    {APPS[i].name}
                                </AppIcon>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AppIcon({
                     mouseLeft,
                     children,
                     icon,
                     url,
                     run
                 }: {
    mouseLeft: MotionValue;
    children: ReactNode;
    icon: StaticImageData;
    url?: string;
    run?: () => void;
}) {
    const ref = useRef<HTMLButtonElement>(null);

    const distance = useTransform(() => {
        const bounds = ref.current
            ? {x: ref.current.offsetLeft, width: ref.current.offsetWidth}
            : {x: 0, width: 0};

        return mouseLeft.get() - bounds.x - bounds.width / 2;
    });

    const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
    const x = useTransform(() => {
        const d = distance.get();
        if (d === -Infinity) {
            return 0;
        } else if (d < -DISTANCE || d > DISTANCE) {
            return Math.sign(d) * -1 * NUDGE;
        } else {
            return (-d / DISTANCE) * NUDGE * scale.get();
        }
    });

    const scaleSpring = useSpring(scale, SPRING);
    const xSpring = useSpring(x, SPRING);
    const y = useMotionValue(0);

    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <motion.button
                        ref={ref}
                        style={{
                            x: xSpring,
                            scale: scaleSpring,
                            y,
                            backgroundImage: `url(${icon.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        onClick={() => {
                            animate(y, [0, -40, 0], {
                                repeat: 2,
                                ease: [
                                    [0, 0, 0.2, 1],
                                    [0.8, 0, 1, 1],
                                ],
                                duration: 0.7,
                            });
                            if (run) run();
                            if (url) window.open(url, '_blank');
                        }}
                        className="aspect-square block md:w-12 sm:w-12 w-10 rounded-xl shadow origin-bottom bg-white"
                    />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        sideOffset={10}
                        className="bg-white/30 shadow-lg  border-none px-2 py-1.5 text-sm rounded-lg text-white font-medium backdrop-blur-xl"
                    >
                        {children}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

function NotSupportedWindow() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-3xl font-bold">Not Supported 😣</h1>
            <p className="text-lg">This application is not supported on window platform.</p>
        </div>
    );
}