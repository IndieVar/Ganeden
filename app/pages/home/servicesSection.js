import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Регулярный уход за садом',
        description: '• стрижка газона • удаление сорняков • формирование кустов и живых изгородей • уход за клумбами • сезонная обрезка растений • уборка территории',
    },
    {
        name: 'Обрезка деревьев и кустарников',
        description: '• санитарная обрезка • формирующая обрезка • омолаживание старых деревьев'
    },
    {
        name: 'Монтаж и обслуживание капельного полива',
        description: '• проектирование системы • установка оборудования • настройка таймеров • ремонт и оптимизация расхода воды',
    },
    {
        name: 'Посадка растений и озеленение',
        description: '	• подбор растений под климат и дизайн участка •	высадка кустарников, деревьев, цветов •	создание клумб и зеленых зон'
    },
    {
        name: 'Уход за пальмами',
        description: '	• очистка стволов •	обрезка старых листьев • профилактика вредителей'
    },
    {
        name: 'Разовая генеральная уборка территории',
        description: '	• после ремонта • после сезона • перед сдачей или продажей недвижимости'
    },

]

export default function ServicesSection() {

    return (
        <>
            <section className="relative isolate overflow-hidden bg-white px-6 lg:my-20 py-24 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),green)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <img
                        alt=""
                        src="/Gan_Eden_logotype.png"
                        className="mx-auto h-16"
                    />
                    <div className="mx-auto w-full mt-10  lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <div className="col-span-2">
                                <span className="text-base/7 font-semibold text-green-600">Наши услуги</span>
                                <h4 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Услуги садовника в Ашдоде
                                </h4>
                                <p className="mt-6 text-base/7 text-gray-700">
                                    Полный спектр работ по уходу за садом — от регулярного обслуживания до комплексного озеленения.
                                </p>
                            </div>
                            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="font-semibold text-gray-900">
                                            <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-indigo-500" />
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
