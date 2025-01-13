'use client';

import React from "react";
import {Badge} from "@/components/ui/badge";
import {Copy,CheckCheck} from "lucide-react";
import { useToast } from "@/hooks/use-toast"

const address = "CA:?"

export default function CopyAddress({className}: { className?: string }) {
    const { toast } = useToast()
    const copy = () => {
        navigator.clipboard.writeText(address).then(() => {
            toast({
                title: "Copied",
                description: "Address copied to clipboard",
                className: "rounded-lg",
                action: (
                    <CheckCheck size={16} className="stroke-green-400"/>
                )
            })
        });
    }
    return (
        <div className={`${className} cursor-pointer select-none`} onClick={() => copy()}>
            <Badge className="flex items-center gap-2 p-2" variant="outline">
                <Copy className="hover:stroke-zinc-400" size="16"/>
                <span>{address}</span>
            </Badge>
        </div>
    )
}