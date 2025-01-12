import {Badge} from '@/components/ui/badge';
import {BookMarked, Layers, MessageCircleQuestion, Sparkles, Waypoints} from 'lucide-react';
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import preview from "@/public/preview.png";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col p-8 gap-6">
            <div className="mx-auto">
                <Badge variant="outline" className="rounded-full flex gap-2">
                    <Sparkles size={16} color="gold"/>
                    <span className="text-sm font-mono">Introducing Manticore World</span>
                </Badge>
            </div>
            <div className="flex flex-col">
                <h1 className="mx-auto text-5xl font-bold mb-8">
                    Manticore World: Where DeFi Meets <span className="fancy">AI</span>
                </h1>
                <p className="mx-auto opacity-80">
                    Instant Access to the Solana Ecosystem. No Sign-Ups. No Barriers.
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
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col">
                    <MessageCircleQuestion size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">What is Manticore World?</h2>
                    <p className="font-semibold opacity-70 mt-auto mb-8">
                        Manticore World is an AI-powered DeFi platform providing seamless access to the Solana
                        ecosystem. Users can access the platform directly, without the need for registration or login.
                    </p>
                </Card>
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col">
                    <BookMarked size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">Our Mission</h2>
                    <p className="font-semibold opacity-70  mt-auto mb-8">
                        To make DeFi more accessible, faster, and smarter for everyone.
                    </p>
                </Card>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col">
                    <Layers size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">Integrated Projects</h2>
                    <p className="font-semibold opacity-70 mt-auto mb-8">
                        <ul>
                            <li>
                                Jupiter: Trade tokens at the best rates.
                            </li>
                            <li>
                                Raydium & Orca: Access liquidity pools and trading solutions.
                            </li>
                            <li>
                                MarginFi: Decentralized lending and borrowing.
                            </li>
                            <li>
                                Drift: Solana-based perpetual futures.
                            </li>
                            <li>
                                Jito: Efficient staking and yield optimization.
                            </li>
                        </ul>
                    </p>
                </Card>
                <Card className="p-4 bg-zinc-900/80 shadow-zinc-800 shadow-lg flex flex-col">
                    <Waypoints size={64} className="m-auto mb-8 stroke-white"/>
                    <h2 className="text-2xl font-bold pb-4">How It Works</h2>
                    <p className="font-semibold opacity-70  mt-auto mb-8">
                        <ul>
                            <li>
                                Manticore AI responds to your crypto-related questions in real time.
                                From charting and analytics to DeFi strategies, it simplifies complex tasks.
                            </li>
                            <li className="mt-2">
                                E.G. How do I add liquidity to Raydium pools?
                            </li>
                        </ul>
                    </p>
                    <Link href={"https://manticore-2.gitbook.io/docs"} target={"_blank"}
                          className="hover:underline mx-auto">
                        Learn More
                    </Link>
                </Card>
            </div>
            <div className="mx-auto">
                © {new Date().getFullYear()} Manticore World. All rights reserved.
            </div>
        </div>
    )
}