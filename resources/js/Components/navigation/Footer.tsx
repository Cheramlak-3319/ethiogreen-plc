import { Link } from "@inertiajs/react";
import styles from "@/Components/navigation/Footer.module.scss";

const SOCIAL_LINKS = [
    { label: "facebook", href: "#", icon: "bi bi-facebook" },
    { label: "instagram", href: "#", icon: "bi bi-instagram" },
    { label: "telegram", href: "#", icon: "bi bi-telegram" },
    { label: "tiktok", href: "#", icon: "bi bi-tiktok" },
];

const QUICK_LINKS = [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
];

const CONTACT_LINKS = [
    { label: "Addis Ababa, Ethiopia", icon: "bi bi-map", href: null },
    {
        label: "+251 94 647 3319",
        icon: "bi bi-phone",
        href: "tel:+251946473319",
    },
    {
        label: "cheemanbest@gmail.com",
        icon: "bi bi-envelope",
        href: "mailto:cheemanbest@gmail.com",
    },
];
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div>
                    <div className={styles.brandName}>
                        <span className={styles.brandAccent}>Ethio-Green</span>{" "}
                        Agro-Processing PLC
                    </div>
                    <p className={styles.brandBlurb}>
                        Sustainable agro-processing rooted in Ethiopia,
                        delivering quality products from farm to global markets.
                    </p>
                    <div className={styles.socials}>
                        {SOCIAL_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={styles.socialIcon}
                            >
                                <i className={link.icon}></i>
                            </Link>
                        ))}
                    </div>
                    <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
                <div>
                    <div className={styles.columnTitle}>Quick Links</div>
                    <div className={styles.linkList}>
                        {QUICK_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.links}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={styles.columnTitle}>Contact</div>
                    <div>
                        <div className={styles.contactList}>
                            {CONTACT_LINKS.map((contact) =>
                                contact.href ? (
                                    <Link
                                        key={contact.label}
                                        href={contact.href}
                                        className={styles.contactItem}
                                    >
                                        <i
                                            className={`ti ${contact.icon}`}
                                            aria-hidden="true"
                                        />
                                        <span className={styles.contactText}>
                                            {contact.label}
                                        </span>
                                    </Link>
                                ) : (
                                    <div
                                        key={contact.label}
                                        className={styles.contactItem}
                                    >
                                        <i
                                            className={contact.icon}
                                            aria-hidden="true"
                                        />
                                        <span className={styles.contactText}>
                                            {contact.label}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.columnTitle}>Stay Updated</div>
                </div>
            </div>
        </footer>
    );
}
