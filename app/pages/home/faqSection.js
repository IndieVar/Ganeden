"use client"

import { motion } from "motion/react"
import { animationUp } from "@/src/motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Сколько стоит услуга садовника в Ашдоде?",
    answer:
      "Стоимость зависит от размера участка, типа работ и их регулярности. Разовый выезд обычно стоит дороже, чем абонементное обслуживание. После короткого видеообзора участка или прибытия на место мы сразу сообщим точную цену.",
  },
  {
    question: 'Как часто нужно вызывать садовника?',
    answer:
      'Оптимально — раз в 1–2 недели для газонов и активных садов. Для участков с деревьями и кустарниками достаточно обслуживания раз в 2–4 недели. Мы подбираем график под ваши растения и сезон.',
  },
  {
    question: 'Вы выполняете разовые работы или только регулярное обслуживание?',
    answer:
      'Выполняем оба варианта. Можно заказать разовую обрезку деревьев, генеральную уборку территории, настройку капельного полива или полноценное обслуживание «под ключ».',
  },
  {
    question: 'Занимаетесь ли вы обрезкой деревьев и пальм?',
    answer:
      "Да, выполняем санитарную, формирующую и омолаживающую обрезку. Работаем с цитрусовыми, декоративными деревьями, а также с пальмами, включая очистку ствола и удаление сухих листьев.",
  },
  {
    question: "Устанавливаете ли вы капельный полив?",
    answer:
      'Да. Проектируем, устанавливаем и обслуживаем системы автополива: шланги, капельницы, фильтры и таймеры. Учитываем климат Израиля, расход воды и требования растений.',
  },
  {
    question: 'Можно ли заказать уборку сада после ремонта или зимнего сезона?',
    answer:
      "Да. Выполняем генеральную уборку участков: вывоз сухостоя, сбор листьев, расчистку клумб, стрижку кустов, восстановление газона.",
  },
  {
    question: 'Работаете ли вы по всем районам Ашдода?',
    answer:
      "Да, мы работаем по всем районам Ашдода. При необходимости можем выехать в соседние города.",
  },
  {
    question: 'Что нужно подготовить перед визитом садовника?',
    answer:
      "Ничего. Мы привозим весь инструмент и расходные материалы. От клиента требуется только доступ к участку и источнику воды при необходимости.",
  },
  {
    question: 'Можно ли вызвать садовника срочно?',
    answer:
      "Да, при наличии свободного окна возможен срочный выезд в тот же день или на следующий. Лучше всего написать в WhatsApp — ответим быстро.",
  },
]

export default function FAQSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:pt-24 pb-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <motion.h6
            custom={1} variants={animationUp}
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
            Часто задаваемые вопросы
          </motion.h6>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure
                key={faq.question} as="div" className="py-6 first:pt-0 last:border-b hover:border-gray-600 group">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 hover:cursor-pointer">
                    <motion.span
                      custom={index + 2}
                      variants={animationUp}
                      className="text-base/7 font-semibold">
                      {faq.question}
                    </motion.span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </motion.section>
  )
}
