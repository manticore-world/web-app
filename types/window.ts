import React, {ReactElement} from "react";

export interface Window {
    id: string;
    title: string;
    zIndex: number;
    width: number;
    height: number;
    x: number;
    y: number;
    minimized: boolean;
    maximized: boolean;
    content: ReactElement;
}

export interface WindowsProps {
    windows: Window[];
    setWindows: React.Dispatch<React.SetStateAction<Window[]>>;
}