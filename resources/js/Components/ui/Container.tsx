import { ReactNode } from "react";
import styles from "@/Components/ui/Container.module.scss";

type ContainerSize = "sm" | "md" | "lg" | "xl";

interface ContainerProps {
    children: ReactNode;
    size?: ContainerSize;
    className?: string;
}

export default function Container({
    children,
    size = "lg",
    className = "",
}: ContainerProps) {
    const sizeClass = styles[size];

    return (
        <div className={`${styles.container} ${sizeClass} ${className}`.trim()}>
            {children}
        </div>
    );
}
