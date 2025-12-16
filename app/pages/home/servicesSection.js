"use client"

import { motion } from "motion/react"
import { CheckIcon } from '@heroicons/react/20/solid'
import { animationLeft, animationUp } from "@/src/motion"
import Image from "next/image"
import { useTranslations } from 'next-intl'

// feature texts are localized via messages (services.features)

export default function ServicesSection() {
    const t = useTranslations()
    const imageUrl = "/Gan_eden_logotype_v2.png"

    const features = [0,1,2,3,4,5].map(i => ({
        name: t(`services.features.${i}.name`),
        description: t(`services.features.${i}.description`),
    }))

    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative isolate overflow-hidden bg-white px-6 lg:px-8 py-12 lg:py-20 mb-12 lg:mb-20">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),green)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <Image
                        width={200}
                        height={80}
                        alt={t('nav.logoAlt')}
                        src={imageUrl}
                        className='h-full w-auto mx-auto px-12 lg:px-6 py-2'
                    />
                    <div className="mx-auto w-full mt-10  lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2">
                                <motion.span
                                    custom={1} variants={animationLeft}
                                    className="text-base/7 font-semibold text-green-600">
                                    {t('services.heading')}
                                </motion.span>
                                <motion.h4
                                    custom={2} variants={animationLeft}
                                    className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    {t('services.title')}
                                </motion.h4>
                                <motion.p
                                    custom={3} variants={animationLeft}
                                    className="mt-6 text-base/7 text-gray-700">
                                    {t('services.summary')}
                                </motion.p>
                            </div>
                            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                                {features.map((feature, index) => (
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        custom={index + 4} variants={animationUp}
                                        key={feature.name} 
                                        className="relative pl-9">
                                        <dt className="font-semibold text-gray-900">
                                            <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-indigo-500" />
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2">{feature.description}</dd>
                                    </motion.div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}
