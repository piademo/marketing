"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";

export default function DemoCTA() {
    return (
        <Button
            as="link"
            href="https://pro.bookfast.es"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => track('cta_access_pro_click', { source: 'demo' })}
            className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-secondary hover:from-primary/60 hover:to-secondary/60 text-white border-0 shadow-lg animated-gradient"
        >
            Acceder
        </Button>
    );
}
