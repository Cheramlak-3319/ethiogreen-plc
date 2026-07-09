import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import styles from "@/Components/navigation/Navbar.module.scss";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const direction = useScrollDirection();
    const [menuOpen, setMenuOpen] = useState(false);

    const wrapperClass = [
        styles.navbarWrapper,
        direction === "down" && !menuOpen ? styles.hidden : "",
    ].join(" ");

    return (
        <>
            <div className={wrapperClass}>
                <nav className={styles.navbar}>
                    <Link href="/" className={styles.logo}>
                        EthioGreen
                    </Link>

                    <div className={styles.links}>
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.link}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <button
                            type="button"
                            aria-label="Search"
                            className={styles.iconButton}
                        >
                            <i className="ti ti-search" aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            aria-label="Menu"
                            className={`${styles.iconButton} ${styles.hamburger}`}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <i
                                className={
                                    menuOpen ? "ti ti-x" : "ti ti-menu-2"
                                }
                                aria-hidden="true"
                            />
                        </button>

                        <button type="button" className={styles.ctaButton}>
                            Get started
                        </button>
                    </div>
                </nav>
            </div>

            {menuOpen && (
                <div className={styles.dropdown}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.dropdownLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
