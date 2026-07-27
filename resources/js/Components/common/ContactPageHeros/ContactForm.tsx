import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import styles from "@/Components/common/ContactPageHeros/ContactForm.module.scss";

interface ContactFormFields {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface PageProps {
    flash?: { success?: string };
}
export default function ContactForm() {
    const { data, setData, post, processing, errors, reset } =
        useForm<ContactFormFields>({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        post(route("contact.store"), {
            onSuccess: () => reset(),
        });
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div>
                    <label className={styles.label} htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className={styles.input}
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <div className={styles.error}>{errors.name}</div>
                    )}
                </div>

                <div>
                    <label className={styles.label} htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={styles.input}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <div className={styles.error}>{errors.email}</div>
                    )}
                </div>
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">
                    Subject
                </label>
                <input
                    id="subject"
                    type="text"
                    className={styles.input}
                    value={data.subject}
                    onChange={(e) => setData("subject", e.target.value)}
                />
                {errors.subject && (
                    <div className={styles.error}>{errors.subject}</div>
                )}
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    className={styles.textarea}
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                />
                {errors.message && (
                    <div className={styles.error}>{errors.message}</div>
                )}
            </div>

            <button
                type="submit"
                className={styles.submitButton}
                disabled={processing}
            >
                {processing ? "Sending..." : "Send message"}
            </button>
        </form>
    );
}
