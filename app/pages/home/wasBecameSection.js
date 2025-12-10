import CallButton from "@/app/components/callButton"

export default function WasBecameSection() {
  const imageUrl = "/was_become.jpg"

  return (
    <div className="relative bg-white py-8">
      <div className="relative mx-auto max-w-2xl lg:max-w-7xl pb-12 lg:px-8 lg:py-40">
        <div className="px-6 md:px-0 lg:ml-auto lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <h3 className="text-base/7 font-semibold text-green-600">Работа садовника в Ашдоде</h3>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Было → Стало</p>
          <p className="mt-6 text-base/7 text-gray-700">
            Иногда участок меняется не за месяцы — а за один визит профессионала.
            Посмотрите, как преобразился этот сад: аккуратно подрезанные деревья, чистые клумбы, обновлённый газон и порядок в каждой детали.
          </p>
          <p className="mt-6 text-base/7 text-gray-700">
            Хотите так же? Наши садовники готовы взяться за работу и сделать ваш участок настоящим украшением дома.
          </p>
          <div className="mt-8 flex justify-start gap-4">
            <CallButton />
            <a
              href="/gallery"
              className="inline-flex rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {' '}
              Открыть фотогалерею{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full overflow-hidden lg:absolute lg:left-0 lg:top-0 px-6 md:px-0 mx-auto max-w-2xl lg:max-w-full lg:w-auto">
        <img
          alt=""
          src={imageUrl}
          className="size-full object-cover rounded-2xl lg:rounded-none lg:rounded-r-2xl"
        />
        
      </div>
    </div>
  )
}