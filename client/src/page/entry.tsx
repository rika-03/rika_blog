
import { useEffect } from "react";

export function EntryPage() {
    useEffect(() => {
        window.location.replace("https://www.baidu.com");
    }, []);

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <p className="text-sm text-neutral-500">
                Redirecting...
            </p>
        </main>
    );
}
