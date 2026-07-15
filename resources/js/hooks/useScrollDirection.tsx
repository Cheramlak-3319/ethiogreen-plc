import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(threshold = 10) {
    const [direction, setDirection] = useState<ScrollDirection>("up");
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY.current;

            if (Math.abs(diff) < threshold) return;

            // Always show navbar near the top of the page
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
