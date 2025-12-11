import Link from "next/link";
import { forwardRef } from "react";
import { motion } from "motion/react";

export const CallButton = forwardRef(({}, ref) => {
    return (
        <Link
            ref={ref}
            href="whatsapp://send?phone=972504794997"
            className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Бесплатная консультация
        </Link>
    )
});

export const MCallButton = motion(CallButton);