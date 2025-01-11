'use client';

import React, {ReactElement, useEffect, useState} from "react";
import Image from "next/image";
import {Telegram, X,Github} from '@/public/icons';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
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

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return <span className={"text-white font-mono mr-2"}>{time}</span>;
}

function MenuContent({title, description, content}:
                     {
                         title?: string,
                         description?: string,
                         content?: ReactElement,
                     }) {
    return (
        <DrawerContent className={"bg-white/20 backdrop-blur shadow-lg border-none text-white h-1/2"}>
            <DrawerHeader>
                <DrawerTitle className={"mx-auto text-3xl"}>
                    <h1>
                        {title}
                    </h1>
                </DrawerTitle>
                <DrawerDescription className={"mx-auto text-2xl"}>{description}</DrawerDescription>
            </DrawerHeader>
            <div className={"text-lg flex items-center align-middle h-full flex-col"}>
                <p>
                    {content}
                </p>
            </div>
            <DrawerFooter>
                <DrawerClose>
                    <Button className={"hover:bg-white/20"}>
                        Continue
                    </Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    )
}

export default function TopBar() {
    return (
        <div>
            <div
                className={"fixed flex items-center justify-between top-0 left-0 w-full bg-white/20 backdrop-blur-xl shadow-lg text-white"}>
                <div>
                    <Drawer>
                        <DrawerTrigger asChild={true}>
                            <Button variant="ghost" className={"hover:bg-white/20 rounded-none"}>
                                Home
                            </Button>
                        </DrawerTrigger>
                        <MenuContent title={"DeFi + AI: Empowering the future of decentralized finance with smart, automated solutions on Solana"}
                                     description={"Instant Access to the Solana Ecosystem. No Sign-Ups. No Barriers."}
                                     content={
                                         <div className={"w-1/2 mx-auto"}>
                                             <p>Leave the complexities of crypto behind. Manticore World connects you directly to the Solana ecosystem’s top projects, with no registration or login required. Access leading platforms like Jupiter, Meteora, Raydium, Orca, MarginFi, Drift, and Jito in one seamless experience.
                                                 <br/>
                                                 Meet Manticore AI, your intelligent assistant for crypto.

                                                 Instant Solutions: From chart analysis to token research and strategic insights, Manticore AI is here to help.
                                                 Effortless Access: Make informed decisions quickly and efficiently using AI-powered tools.
                                                 Discover everything the Solana ecosystem has to offer. With Manticore World, the power is in your hands.
                                             </p>
                                         </div>
                                     }
                        />
                    </Drawer>

                    <Drawer>
                        <DrawerTrigger asChild={true}>
                            <Button variant="ghost" className={"hover:bg-white/20 rounded-none"}>
                                Docs
                            </Button>
                        </DrawerTrigger>
                        <MenuContent title={"Welcome, how are you feeling today?"}
                                     content={
                                             <div className="max-w-4xl mx-auto p-8">
                                                 <header className="mb-8">
                                                     <h1 className="text-4xl font-bold text-blue-600">Manticore World
                                                         Documentation</h1>
                                                     <p className="text-lg text-gray-600">Your guide to navigating the
                                                         Manticore World platform.</p>
                                                 </header>

                                                 <section className="mb-8">
                                                     <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                                                     <h3 className="text-xl font-medium text-gray-800">What is Manticore
                                                         World?</h3>
                                                     <p className="mb-4">Manticore World is an AI-powered DeFi platform
                                                         providing seamless access to the Solana ecosystem. Users can
                                                         access
                                                         the platform directly, without the need for registration or
                                                         login.</p>

                                                     <h3 className="text-xl font-medium text-gray-800">Our Mission</h3>
                                                     <p>To make DeFi more accessible, faster, and smarter for
                                                         everyone.</p>
                                                 </section>

                                                 <section className="mb-8">
                                                     <h2 className="text-2xl font-semibold mb-4">2. Integrated
                                                         Projects</h2>
                                                     <ul className="list-disc list-inside space-y-2">
                                                         <li><strong>Jupiter:</strong> Trade tokens at the best rates.
                                                         </li>
                                                         <li><strong>Raydium & Orca:</strong> Access liquidity pools and
                                                             trading solutions.
                                                         </li>
                                                         <li><strong>MarginFi:</strong> Decentralized lending and
                                                             borrowing.
                                                         </li>
                                                         <li><strong>Drift:</strong> Solana-based perpetual futures.
                                                         </li>
                                                         <li><strong>Jito:</strong> Efficient staking and yield
                                                             optimization.
                                                         </li>
                                                     </ul>
                                                 </section>

                                                 <section className="mb-8">
                                                     <h2 className="text-2xl font-semibold mb-4">3. Using Manticore
                                                         AI</h2>
                                                     <h3 className="text-xl font-medium text-gray-800">How It Works</h3>
                                                     <p className="mb-4">Manticore AI responds to your crypto-related
                                                         questions in real time. From charting and analytics to DeFi
                                                         strategies, it simplifies complex tasks.</p>

                                                     <h3 className="text-xl font-medium text-gray-800">Example
                                                         Queries</h3>
                                                     <ul className="list-disc list-inside space-y-2">
                                                         <li>What’s the SOL price trend?</li>
                                                         <li>How do I add liquidity to Raydium pools?</li>
                                                         <li>What projects does Meteora support?</li>
                                                     </ul>
                                                 </section>

                                                 <section className="mb-8">
                                                     <h2 className="text-2xl font-semibold mb-4">4. Platform Guide</h2>
                                                     <ol className="list-decimal list-inside space-y-2">
                                                         <li>Click on any integrated project from the homepage.</li>
                                                         <li>Interact with Manticore AI for guidance.</li>
                                                         <li>Connect your Solana wallet (e.g., Phantom, Ledger) and
                                                             manage
                                                             your transactions.
                                                         </li>
                                                     </ol>
                                                 </section>

                                                 <section className="mb-8">
                                                     <h2 className="text-2xl font-semibold mb-4">5. Frequently Asked
                                                         Questions (FAQs)</h2>
                                                     <ul className="list-disc list-inside space-y-2">
                                                         <li><strong>Do I need to sign up?</strong> No. You can access
                                                             the
                                                             platform without creating an account.
                                                         </li>
                                                         <li><strong>Is Manticore AI free?</strong> Yes, Manticore AI is
                                                             free for all users.
                                                         </li>
                                                         <li><strong>Which wallets are
                                                             supported?</strong> Solana-compatible
                                                             wallets like Phantom, Solflare, and Ledger are supported.
                                                         </li>
                                                     </ul>
                                                 </section>

                                                 <section className="mb-8">
                                                     <h2 className="text-2xl font-semibold mb-4">6. Security and
                                                         Privacy</h2>
                                                     <ul className="list-disc list-inside space-y-2">
                                                         <li>No user data is collected or stored.</li>
                                                         <li>All transactions are conducted through user wallets,
                                                             ensuring
                                                             decentralization.
                                                         </li>
                                                     </ul>
                                                 </section>

                                                 <footer className="mt-12 text-center text-gray-600">
                                                     <p>&copy; 2025 Manticore World. All Rights Reserved.</p>
                                                 </footer>
                                             </div>
                                     }
                        />
                    </Drawer>
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
    );
}