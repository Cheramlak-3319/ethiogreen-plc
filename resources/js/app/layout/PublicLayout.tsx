import { PropsWithChildren } from "react";
import { Head } from "@inertiajs/react";

import Navbar from "@/Components/navigation/NavBar";
import Footer from "@/Components/navigation/Footer";

interface props extends PropsWithChildren {
    title: string;
}

export default function PublicLayout({ title, children }: props) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
