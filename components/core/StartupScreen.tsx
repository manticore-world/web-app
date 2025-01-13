'use client';

import { useState, useEffect } from "react";
import styles from "@/styles/StartupScreen.module.css";
import Image from "next/image";
import { LogoFlat } from "@/public/icons";

export default function StartupScreen() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 1000);
                    return 100;
                }
                return oldProgress + 1;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isVisible && (
                <div
                    className={`${styles.container} ${
                        progress === 100 ? styles.hidden : ""
                    }`}
                >
                    <Image src={LogoFlat.src} alt={"Logo"} width={128} height={128} className={styles.logo  + "invert"} />
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progress}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </>
    );
}