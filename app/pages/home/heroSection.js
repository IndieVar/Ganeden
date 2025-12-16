"use client";
import { motion } from 'framer-motion'
import { FaMapPin, FaRegCalendarCheck } from 'react-icons/fa'
import { IoDiamondOutline } from 'react-icons/io5'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { animationLeft } from '@/src/motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('hero')

  const features = [
    { name: t('feature1.name'), description: t('feature1.description'), icon: FaMapPin },
    { name: t('feature2.name'), description: t('feature2.description'), icon: FaRegCalendarCheck },
    { name: t('feature3.name'), description: t('feature3.description'), icon: IoDiamondOutline },
    { name: t('feature4.name'), description: t('feature4.description'), icon: BiHappyHeartEyes },
  ]
const imageUrl = "/Gan_eden_hero_circle.png"

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative isolate overflow-hidden bg-white py-6 mb-12 lg:mb-20">
      <_BackgroundEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-2 lg:pr-8">
            <motion.div className="lg:max-w-lg">
              <motion.h1
                custom={1} variants={animationLeft}
                className="text-base/7 font-semibold text-green-600">{t('heading')}</motion.h1>
              <motion.p
                custom={2} variants={animationLeft}
                className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {t('title')}
              </motion.p>
              <motion.p
                custom={3} variants={animationLeft}
                className="mt-6 text-lg/8 text-gray-700">
                {t('lead')}
              </motion.p>
              <dl className="mt-10 max-w-xl space-y-7 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div
                    custom={index + 4} variants={animationLeft}
                    key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </div>
          <Image
            width={500}
            height={500}
            alt="Gan&Eden hero image"
            src={imageUrl}
            className="w-full object-cover max-w-none "
          />
        </div>
      </div>
    </motion.section>
  )
}


function _BackgroundEffect() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-1108/632 w-277 bg-linear-to-r from-green-600 to-green-900 opacity-20"
        />
      </div>
    </>
  );
} 