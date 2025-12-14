"use client";
import Image from "next/image"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const posts = [
  {
    id: 1,
    title: 'Частный дом в Ашдоде — до и после:',
    href: '#',
    description:
      `✔️ Полностью посадили оливковое дерево \n✔️ Оформили зону кустами и декоративными растениями \n✔️ Уложили камни для аккуратного и стильного вида \n✔️ Постелили синтетическую траву для максимального удобства и красоты`,
    imageUrl:
      '/was_become.jpg',
    city: 'Ashdod',
  },
  {
    id: 2,
    title: 'Частный дом в Явне — до и после:',
    href: '#',
    description:
      `✔️ Полностью посадили оливковое дерево \n✔️ Оформили зону кустами и декоративными растениями \n✔️ Уложили камни для аккуратного и стильного вида \n✔️ Постелили синтетическую траву для максимального удобства и красоты`,
    imageUrl:
      '/was_become.jpg',
    city: 'Yavne',
  },
  {
    id: 3,
    title: 'Жилой дом в Ашкелоне — до и после:',
    href: '#',
    description:
      `✔️ Полностью посадили оливковое дерево \n✔️ Оформили зону кустами и декоративными растениями \n✔️ Уложили камни для аккуратного и стильного вида \n✔️ Постелили синтетическую траву для максимального удобства и красоты`,
    imageUrl:
      '/Gan_eden_reviews.jpg',
    city: 'Ashkelon',
  },
]

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClickHandler = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  }

  return (
    <div className="bg-white py-6 mb-12 lg:mb-20">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={posts.map((post) => ({ src: post.imageUrl }))}
        index={currentIndex}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="text-base/7 font-semibold text-green-600">Фотогалерея</span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Работа садовника в Израиле
          </h1>
          <p className="mt-2 text-lg/8 text-gray-600">Ваш сад — в надёжных руках.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              onClick={() => onClickHandler(index)}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full aspect-square cursor-zoom-in">
                <Image
                  width={800}
                  height={800}
                  alt={`Image for ${post.title}`}
                  src={post.imageUrl}
                  className="w-full rounded-2xl bg-gray-100 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <p
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.city}
                  </p>
                </div>
                <div className="group relative grow">
                  <p className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </p>
                  <p
                    className="mt-5 text-sm/6 text-gray-600"
                    style={{ whiteSpace: 'pre-wrap' }}>
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
