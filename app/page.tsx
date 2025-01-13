import {Badge} from '@/components/ui/badge';
import {BookMarked, Layers, MessageCircleQuestion, Sparkles, Waypoints} from 'lucide-react';
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import preview from "@/public/preview.png";
import React from "react";
import Link from "next/link";
import ParticlesBackground from "@/components/core/particles-background";


export default function Home() {
    return (
        <div className="flex flex-col p-8 gap-6">
            <ParticlesBackground/>
            <div className="mx-auto">
                <Badge variant="outline" className="rounded-full flex gap-2">
                    <Sparkles size={16} color="gold"/>
                    <span className="text-sm font-mono">Introducing Manticore World</span>
                </Badge>
            </div>
            <div className="flex flex-col">
                <h1 className="mx-auto text-5xl font-bold mb-8">
                    The Future of Finance and <span className="fancy">AI</span>
                </h1>
                <p className="mx-auto opacity-80">
                    The New Face of Decentralized Finance and Artificial Intelligence (DeFAI)
                </p>
            </div>

            <div className="w-1/2 mx-auto">
                <Card>
                    <Image src={preview} alt="Preview" className="rounded-xl"/>
                </Card>
            </div>
            <h1 className="mx-auto text-3xl font-bold">
                FAQ
            </h1>
            <Separator/>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col backdrop-blur-lg">
                    <MessageCircleQuestion size={64} className="mx-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">What is Manticore World?</h2>
                    <p className="font-semibold opacity-70  mb-8">
                        <ul className="gap-2 flex flex-col">
                            <li>
                                Manticore World is an innovative platform that merges decentralized finance (DeFi) and
                                artificial intelligence, creating a unique space we call DeFAI, within the Solana
                                ecosystem. Our
                                goal is to eliminate the complexities of the crypto world by offering our users a
                                simple,
                                understandable, and seamless experience.
                            </li>
                            <li>
                                Through a single website, we provide access to the best DeFi protocols in the Solana
                                ecosystem.
                                By combining the efficiency of decentralized finance with the intelligence of AI,
                                Manticore
                                World simplifies the user experience, allowing seamless navigation of DeFAI solutions in
                                one
                                place.
                            </li>
                        </ul>
                    </p>
                </Card>
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col backdrop-blur-lg">
                    <BookMarked size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">Manticore AI: The Crypto Expert in DeFAI</h2>
                    <p className="font-semibold opacity-70  mt-auto mb-8">
                        <ul className="flex flex-col gap-2">
                            <li>
                                At the heart of our platform lies Manticore AI, an artificial intelligence chatbot
                                specialized in the crypto field. It acts as the intelligent core of our DeFAI ecosystem,
                                helping users better understand and manage their crypto assets. Here are the key
                                benefits offered by Manticore AI:
                            </li>
                            <li>
                                Comprehensive Guidance: Instant support for optimizing your crypto portfolio, devising
                                investment strategies, and analyzing the market.
                            </li>
                            <li>
                                DeFi Guidance: Clear and simplified explanations of how decentralized finance protocols
                                work, empowered by AI insights.
                            </li>
                            <li>
                                Security Advice: Preventive information and recommendations to mitigate risks in the
                                crypto world.
                            </li>
                            <li>
                                Manticore AI is more than just an AI; it's a companion designed to make your DeFAI
                                experience flawless and accessible.
                            </li>
                        </ul>
                    </p>
                </Card>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col backdrop-blur-lg">
                    <Layers size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">Why Choose Manticore World?</h2>
                    <p className="font-semibold opacity-70 mt-auto mb-8">
                        <ul className="flex flex-col gap-2">
                            <li>
                                Ease of Use: Access all DeFAI protocols through a single platform.
                            </li>
                            <li>
                                Fast and Reliable: Lightning-fast transactions enabled by the Solana ecosystem.
                            </li>
                            <li>
                                AI Support: Professional guidance with Manticore AI.
                            </li>
                            <li>
                                Comprehensive Integrations: The best of DeFi, combined with AI, at your fingertips.
                            </li>
                            <li>
                            </li>
                        </ul>
                    </p>
                </Card>
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col backdrop-blur-lg">
                    <Waypoints size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">Simplify the DeFAI World with Manticore World</h2>
                    <p className="font-semibold opacity-70  mt-auto mb-8">
                        <ul className="flex flex-col gap-2">
                            <li>
                                In this innovative space where decentralized finance and AI converge, we offer a more
                                accessible, understandable, and secure experience for everyone.
                            </li>
                            <li>
                                Be Part of the Future.
                            </li>
                            <li>
                                Join Manticore World today and rediscover the power of DeFAI.
                            </li>
                        </ul>
                    </p>
                </Card>
            </div>
            <div className="mx-auto">
                © {new Date().getFullYear()} Manticore World. All rights reserved.
            </div>
        </div>
    )
}