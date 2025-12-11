"use client"

import { motion } from "motion/react"
import { BsThermometerSun } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaTreeCity } from "react-icons/fa6";
import { MdOutlineTaskAlt } from "react-icons/md";
import { animationUp, animationLeft, animationRight } from "@/src/motion";

const cards = [
    {
        name: 'Опыт работы в климате Израиля',
        description: 'Учитываем особенности почвы, сезонность и потребности местных растений.',
        icon: BsThermometerSun,
    },
    {
        name: 'Премиальный уровень сервиса',
        description: 'Чистота, пунктуальность, прозрачные цены. Мы ценим ваше время и доверие.',
        icon: MdOutlineWorkspacePremium,
    },
    {
        name: 'Индивидуальный подход',
        description: 'Подберём решения под ваш стиль, бюджет и задачи.',
        icon: MdOutlineTaskAlt,
    },
    {
        name: 'Работа с разными типами объектов',
        description: '	Работаем с частными домами, квартирами, учреждениями и бизнесом.',
        icon: FaTreeCity,
    },
]

export default function AboutSection() {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative isolate overflow-hidden bg-white py-24 my-20">
            <_BackgroundEffect />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className='flex justify-center text-center flex-col items-center'>
                    <div className="   mx-auto max-w-2xl lg:mx-0">
                        <motion.span
                            custom={1} variants={animationUp}
                            className="text-base/7 font-semibold text-green-600">
                            Почему выбирают нас
                        </motion.span>
                        <motion.h2
                            custom={2} variants={animationUp}
                            className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            Садовник с большим опытом работы!
                        </motion.h2>
                        <motion.p
                            custom={3} variants={animationUp}
                            className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                            Профессиональный уход за вашим садом круглый год.
                        </motion.p>
                    </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-12">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.name}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            custom={5} variants={index % 2 == 0 ? animationLeft : animationRight}
                            className="flex gap-x-4 rounded-xl bg-white/30 p-6 ring-1 ring-gray-900/5 backdrop-blur-sm"
                        >

                            <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-600" />
                            <div className="text-base/7">
                                <p className="font-semibold text-gray-900">{card.name}</p>
                                <p className="mt-2 text-gray-700">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

function _BackgroundEffect() {
    const imageUrl = "/banner.jpg"

    return (
        <>
            <img
                alt=""
                src={imageUrl}
                className="absolute inset-0 -z-10 size-full object-cover object-right opacity-15 md:object-center" />
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                <div
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-green-600 to-green-900 opacity-15" />
            </div><div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
                <div
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-green-600 to-green-900 opacity-15" />
            </div>
        </>
    )
};