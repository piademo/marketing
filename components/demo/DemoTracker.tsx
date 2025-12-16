"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function DemoTracker() {
    useEffect(() => {
        track('demo_view');
    }, []);

    return null;
}
