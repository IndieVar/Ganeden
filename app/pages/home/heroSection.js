
import { FaMapPin, FaRegCalendarCheck } from 'react-icons/fa'
import { IoDiamondOutline } from 'react-icons/io5'
import { BiHappyHeartEyes } from 'react-icons/bi'

const features = [
  {
    name: 'Локация',
    description: 'Мы в Ашдоде, говорим с вами на одном языке и всегда понимаем, чего вы хотите.',
    icon: FaMapPin,
  },
  {
    name: 'Календарь',
    description: 'Без выходных, в любое удобное для вас время.',
    icon: FaRegCalendarCheck,
  },
  {
    name: 'Качество',
    description: 'Качество, педантичность, пунктуальность — наш девиз.',
    icon: IoDiamondOutline,
  },
  {
    name: 'Счастье',
    description: 'С нами у вас не болит голова ни по одному вопросу — мы всё сделаем в лучшем виде, чтобы ваш сад был как на картинке.',
    icon: BiHappyHeartEyes,
  },
]
const heroImageUrl = "/Gan_eden_hero_circle.png"

export default function HeroSection() {

  return (
    <div className="relative isolate overflow-hidden bg-white py-6">
      <_BackgroundEffect />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-2 lg:pr-8">
            <div className="lg:max-w-lg">
              <h1 className="text-base/7 font-semibold text-green-600">Садовник в Ашдоде</h1>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Ваш сад, как на картинке
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                В GAN&EDEN мы не просто создаём ландшафт — мы создаём атмосферу, в которой хочется жить.
                У нас — многолетний опыт, более 1000 довольных клиентов и работа по всей стране.
              </p>
              <dl className="mt-10 max-w-xl space-y-7 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Gan&Eden hero image"
            src={heroImageUrl}
            className="w-full object-cover max-w-none "
          />
        </div>
      </div>
    </div>
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