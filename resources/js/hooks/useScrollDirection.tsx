import { useState, useRef, useEffect } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(threshold = 10) {
    const [direction, setDirection] = useState<ScrollDirection>("up");
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.screenY;
            const diff = currentScrollY - lastScrollY.current;

            if (Math.abs(diff) < threshold) return;

            if (currentScrollY < 80) {
                setDirection("up");
            } else {
                setDirection(diff > 0 ? "down" : "up");
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);
    return direction;
}
