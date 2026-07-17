import { FormEvent, useState } from "react";
import { Link } from "@inertiajs/react";
import styles from "@/Components/navigation/Footer.module.scss";
interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

interface QuickLink {
    label: string;
    href: string;
}

interface ContactLink {
    label: string;
    icon: string;
    href: string | null;
}
const SOCIAL_LINKS: SocialLink[] = [
    { label: "facebook", href: "#", icon: "bi bi-facebook" },
    { label: "instagram", href: "#", icon: "bi bi-instagram" },
    { label: "telegram", href: "#", icon: "bi bi-telegram" },
    { label: "tiktok", href: "#", icon: "bi bi-tiktok" },
];

const QUICK_LINKS: QuickLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
];

const CONTACT_LINKS: ContactLink[] = [
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
    const [email, setEmail] = useState("");
    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault();
        console.log("Subscribe: ", email);
        setEmail("");
    };
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
                                            className={contact.icon}
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
                    <p className={styles.newsletterText}>
                        Get news on our products and sustainability efforts.
                    </p>
                    <form
                        className={styles.newsletterForm}
                        onSubmit={handleSubscribe}
                    >
                        <input
                            type="email"
                            required
                            placeholder="Your email"
                            className={styles.newsletterInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className={styles.newsletterButton}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <span className={styles.copyright}>
                    © {new Date().getFullYear()} Ethio-Green Agro-Processing
                    PLC. All rights reserved.
                </span>
                <div className={styles.legalLinks}>
                    <Link href="/privacy" className={styles.legalLink}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className={styles.legalLink}>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
