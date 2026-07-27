import styles from "./ContactInfo.module.scss";

interface ContactItem {
    icon: string;
    label: string;
    value: string;
}

const CONTACT_ITEMS: ContactItem[] = [
    { icon: "ti-map-pin", label: "Office", value: "Addis Ababa, Ethiopia" },
    { icon: "ti-phone", label: "Phone", value: "+251 94 647 3319" },
    { icon: "ti-mail", label: "Email", value: "info@ethiogreen.com" },
];

export default function ContactInfo() {
    return (
        <div>
            {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className={styles.card}>
                    <i className={`ti ${item.icon}`} aria-hidden="true" />
                    <div>
                        <div className={styles.label}>{item.label}</div>
                        <div className={styles.value}>{item.value}</div>
                    </div>
                </div>
            ))}

            <div className={styles.map}>
                <iframe
                    title="EthioGreen location"
                    src="https://www.google.com/maps?q=Addis+Ababa,Ethiopia&output=embed"
                    width="100%"
                    height="140"
                    style={{ border: 0, borderRadius: "12px" }}
                    loading="lazy"
                />
            </div>
        </div>
    );
}
