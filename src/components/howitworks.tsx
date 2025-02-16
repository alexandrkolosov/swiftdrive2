import imageLaptop from '@/images/laptop.jpg'
import { ComponentType } from 'react'

interface Feature {
    name: string
    description: string
    icon?: string | ComponentType<{ className?: string; 'aria-hidden'?: string }>
}

const features: Feature[] = [
    {
        name: 'Каршеринг',
        description:
            'Каршеринг предоставляет возможность арендовать автомобиль на короткий срок, что особенно актуально для деловых поездок и встреч вне офиса.',
        icon: '/assets/sharing1.png',
    },
    {
        name: 'Самокаты',
        description:
            'Идеально подходят для коротких поездок, они помогают сотрудникам быстро и удобно добираться до офиса или совершать межкорпоративные встречи.',
        icon: '/assets/scooter1.png',
    },
    {
        name: 'Корпоративное такси',
        description:
            'Такси остаётся одним из самых востребованных видов корпоративного транспорта, обеспечивая высокий уровень комфорта и оперативность.',
        icon: '/assets/taxi1.png',
    },
]

export default function HowItWorks() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    {/* Left Column */}
                    <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-[#F6C751]">Единая платформа</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Все виды транспорта под рукой
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Мы создали платформу, которая помогает компаниям эффективно управлять поездками своих сотрудников, оптимизировать маршруты, улучшать качество обслуживания клиентов и снижать затраты на транспортные расходы.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => {
                                    let IconComponent: ComponentType<{ className?: string; 'aria-hidden'?: string }> | null = null
                                    if (feature.icon && typeof feature.icon !== 'string') {
                                        IconComponent = feature.icon as ComponentType<{ className?: string; 'aria-hidden'?: string }>
                                    }
                                    return (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                {feature.icon ? (
                                                    typeof feature.icon === 'string' ? (
                                                        <img
                                                            src={feature.icon}
                                                            alt={`${feature.name} icon`}
                                                            className="absolute top-1 left-1 w-5 h-5 text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                    ) : IconComponent ? (
                                                        <IconComponent
                                                            className="absolute top-1 left-1 w-5 h-5 text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                    ) : null
                                                ) : null}
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    )
                                })}
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
                            <img
                                src={imageLaptop.src}
                                alt="portal_upravleniya_poezdkami"
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-start w-full"
                            />
                            <div
                                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}