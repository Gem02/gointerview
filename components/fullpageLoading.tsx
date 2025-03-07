// components/LoadingOverlay.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const LoadingOverlay = () => {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname(); // Detects route changes

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500); // Simulate a small delay

        return () => clearTimeout(timeout);
    }, [pathname]); // Runs whenever the route changes

    return loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <p className="text-white text-2xl">Loading...</p>
        </div>
    ) : null;
};

export default LoadingOverlay;
