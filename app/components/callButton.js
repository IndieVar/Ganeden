import Link from "next/link";

export default function CallButton() {
    return (
        <Link
            href="whatsapp://send?phone=972504794997"
            className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Бесплатная консультация
        </Link>
    )
}