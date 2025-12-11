import React, { useEffect, useState } from "react";

// Простой и аккуратный компонент для увеличения изображения по клику.
// - Нажатие на изображение открывает модальное увеличенное изображение.
// - Нажатие вне изображения или на кнопку закрытия / клавиша Esc закрывает его.
// - Использует Tailwind-классы для стилизации (включая плавную анимацию).

export default function ImageZoom({ src, alt = "image", className = "", rounded = "" }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            {/* Миниатюра */}
            <button
                onClick={() => setOpen(true)}
                className={`inline-block overflow-hidden focus:outline-none ${className}`}
                aria-expanded={open}
                aria-label={open ? "Закрыть изображение" : "Открыть изображение"}
            >
                <img
                    src={src}
                    alt={alt}
                    className={`cursor-pointer transition-transform duration-300 transform  ${rounded}`}
                    style={{ maxWidth: "100%", display: "block" }}
                />
            </button>

            {/* Модальное окно с увеличенным изображением */}
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                >
                    {/* Полупрозрачный фон */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Контейнер изображения — останавливаем всплытие клика */}
                    <div
                        className="relative z-10 max-w-[90vw] max-h-[90vh] p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-2 -right-2 z-20 rounded-full text-gray-900 cursor-pointer bg-white/70 hover:bg-white py-1 px-2 shadow-lg focus:outline-none"
                            aria-label="Закрыть"
                        >
                            ✕
                        </button>

                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl transition-transform duration-300"
                        />

                        {/* Подпись (по желанию) */}
                        {/* {alt && (
              <div className="mt-2 text-center text-sm text-white/90">{alt}</div>
            )} */}
                    </div>
                </div>
            )}
        </>
    );
}
