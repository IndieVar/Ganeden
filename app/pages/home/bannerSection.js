export default function BannerSection() {
  const imageUrl = "/banner.jpg"

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <img
            alt=""
            src={imageUrl}
            className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
          />
          <div className="absolute inset-0 bg-green-700/90 mix-blend-multiply" />
          <div className="relative flex justify-center w-full mx-auto lg:mx-0">
            <div className="relative isolate overflow-hidden p-6 text-center sm:px-16">
              <p className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                Садовник с большим опытом работы!
              </p>
              <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-200">
                Мы будем рады предоставить Вам профессиональный и надежный сервис во всех видах садоводческих работ.
                Обрезка, уборка двора, посадка деревьев и многое другое!
                Более тысячи довольных клиентов уже выбрали нас - и вы следующие!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}