import { useEffect } from "react";

export function RikaPage() {
    useEffect(() => {
        window.location.replace("https://rika3.dpdns.org");
    }, []);

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <p className="text-sm text-neutral-500">
                Redirecting...
            </p>
        </main>
    );
}
