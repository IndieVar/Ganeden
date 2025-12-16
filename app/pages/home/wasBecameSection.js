"use client"

import { motion } from "motion/react"
import { MCallButton } from "@/app/components/callButton"
import { animationRight } from "@/src/motion";
import Link from "next/link";
import ImageZoom from "@/app/components/imageZoom";
import { useTranslations } from 'next-intl'

export default function WasBecameSection() {
  const imageUrl = "/was_become.jpg"
  const t = useTranslations('wasBecame')

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-white grid grid-cols-2 mb-12 lg:mb-20"
    >
      <div
        className="row-start-2 lg:row-auto col-span-full lg:col-span-1 lg:col-start-1 lg:col-end-2 relative h-full overflow-hidden mx-auto max-w-2xl lg:max-w-full lg:w-auto">
        <ImageZoom
          src={imageUrl}
          alt="Gan Eden before and after"
          className="size-full object-cover rounded-2xl lg:rounded-none lg:rounded-r-2xl"
        />
      </div>
      <div className="col-span-full lg:col-span-1 lg:col-start-2 lg:col-end-2 relative mx-auto max-w-2xl lg:max-w-7xl pb-12 lg:px-8 lg:py-40  ">
        <div className="px-6 md:px-0 lg:w-full lg:pr-0 lg:pl-6">
          <motion.h3
            custom={1}
            variants={animationRight}
            className="text-base/7 font-semibold text-green-600">
            {t('heading')}
          </motion.h3>
          <motion.p
            custom={2}
            variants={animationRight}
            className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </motion.p>
          <motion.p custom={3}
            variants={animationRight}
            className="mt-6 text-base/7 text-gray-700">
            {t('lead')}
            {" "}
            {t('description')}
          </motion.p>
          <motion.p custom={4}
            variants={animationRight}
            className="mt-6 text-base/7 text-gray-700">
            {t('ask')}
          </motion.p>
          <motion.div
            custom={5}
            variants={animationRight}
            className="mt-8 flex justify-start gap-4">
            <MCallButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }} />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <Link
                href="/gallery"
                className="inline-flex rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </motion.section>
  )
}