import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="d-flex min-vh-100 flex-column align-items-center justify-content-center bg-light py-4">
            <div>
                <Link href="/">
                    <ApplicationLogo
                        style={{
                            height: "80px",
                            width: "80px",
                            fill: "currentColor",
                            color: "#6c757d",
                        }}
                    />
                </Link>
            </div>

            <div
                className="mt-4 w-100 bg-white px-4 py-4 shadow-sm rounded"
                style={{ maxWidth: "400px" }}
            >
                {children}
            </div>
        </div>
    );
}
