import PublicLayout from "@/app/layout/PublicLayout";
import Container from "@/Components/ui/Container";
import ContactForm from "@/Components/common/ContactPageHeros/ContactForm";
import ContactInfo from "@/Components/common/ContactPageHeros/ContactForm";
import { usePage } from "@inertiajs/react";

export default function Contact() {
    const { flash } = usePage<{ flash: { success?: string } }>().props;

    return (
        <PublicLayout title="Contact">
            {/* banner section — same pattern as your About page */}
            <Container>
                <div
                    style={{
                        padding: "40px 0",
                        display: "grid",
                        gridTemplateColumns: "1fr 1.2fr",
                        gap: "32px",
                    }}
                >
                    <ContactInfo />
                    <div>
                        {flash.success && (
                            <div
                                style={{
                                    marginBottom: "16px",
                                    background: "rgba(74,222,128,0.12)",
                                    color: "#128a3e",
                                    padding: "10px 14px",
                                    borderRadius: "8px",
                                    fontSize: "13px",
                                }}
                            >
                                {flash.success}
                            </div>
                        )}
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </PublicLayout>
    );
}
