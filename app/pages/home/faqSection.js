"use client"

import { motion } from "motion/react"
import { animationUp } from "@/src/motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import { useTranslations } from 'next-intl'

const faqs = Array.from({ length: 9 }, (_, i) => i + 1).map((n) => ({
  questionKey: `q${n}`,
  answerKey: `a${n}`,
}))

export default function FAQSection() {
  const t = useTranslations('faq')
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto max-w-7xl bg-white px-6 lg:px-8 py-6 lg:py-12"
    >
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <motion.h6
          custom={1} variants={animationUp}
          className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
          {t('heading')}
        </motion.h6>
        <dl className="mt-16 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <Disclosure
              key={faq.questionKey} as="div" className="py-6 first:pt-0 last:border-b hover:border-gray-600 group">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 hover:cursor-pointer">
                  <motion.span
                    custom={index + 2}
                    variants={animationUp}
                    className="text-base/7 font-semibold">
                    {t(faq.questionKey)}
                  </motion.span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                    <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base/7 text-gray-600">{t(faq.answerKey)}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </motion.section>
  )
}
