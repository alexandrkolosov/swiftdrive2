import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
            eyebrow="Наша культура"
            title="Мы верим, что успех компании рождается из сильных ценностей"
            invert
        >
          <p>
            В <span className='font-bold underline'>SwiftDrive</span> мы объединяем инновации и командный дух, создавая условия для творческого и профессионального роста.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem title="Ответственность" invert>
              Мы несем ответственность за качество наших решений и заботимся о каждом сотруднике.
            </GridListItem>
            <GridListItem title="Доверие" invert>
              Наши партнеры и клиенты выбирают нас за прозрачность и надежность, которые лежат в основе каждого проекта.
            </GridListItem>
            <GridListItem title="Инновации" invert>
              Мы постоянно ищем новые пути развития, внедряя передовые технологии для улучшения корпоративного транспорта.
            </GridListItem>
          </GridList>
        </Container>
      </div>
  )
}

const team = [
  {
    title: 'Владельцы',
    people: [
      {
        name: 'Алексей Котелков',
        role: 'Соучредитель / CFO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Станислав Ястржембский',
        role: 'Соучредитель / CFO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Александр Колосов',
        role: 'Соучредитель / CPO',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Команда',
    people: [
      {
        name: 'Мурад Ханмамедов',
        role: 'Генеральный директор',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Иван Сидоров',
        role: 'CTO',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Денис Стрелков',
        role: 'Исполнительный директор',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Артем Башмачников',
        role: 'Директор по продажам',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Анна Адрианова',
        role: 'Директор направления Prime',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Светлана Бутова',
        role: 'Директор сервисного отдела',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Екатерина Ретина',
        role: 'Старший data аналитик',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Алексей Кучеренко',
        role: 'Тим-лид разработки',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Олег Миронов',
        role: 'Старший back-end разработчик',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24">
          {team.map((group) => (
              <FadeInStagger key={group.title}>
                <Border as={FadeIn} />
                <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                  <FadeIn>
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                      {group.title}
                    </h2>
                  </FadeIn>
                  <div className="lg:col-span-3">
                    <ul
                        role="list"
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                    >
                      {group.people.map((person) => (
                          <li key={person.name}>
                            <FadeIn>
                              <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                <Image
                                    alt=""
                                    {...person.image}
                                    className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                                  <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                    {person.name}
                                  </p>
                                  <p className="mt-2 text-sm text-white">
                                    {person.role}
                                  </p>
                                </div>
                              </div>
                            </FadeIn>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInStagger>
          ))}
        </div>
      </Container>
  )
}

export const metadata: Metadata = {
  title: 'О компании',
  description:
      'SwiftDrive.ru – инновационная B2B-платформа для объединения различных видов городского транспорта и оптимизации корпоративных поездок.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
      <>
        <PageIntro eyebrow="О компании" title="Инновационные решения для корпоративного транспорта">
          <p>
            SwiftDrive.ru – это инновационная B2B-платформа, созданная для объединения различных видов городского транспорта в единую экосистему. Мы предлагаем комплексные решения для корпоративных клиентов, позволяющие оптимизировать управление поездками, снизить затраты на перемещения и повысить оперативность работы сотрудников.
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-base">
            <p>
              Наша миссия — трансформировать традиционные подходы к корпоративным поездкам с помощью современных технологий. Мы интегрируем такси, каршеринг, самокаты и другие виды транспорта, чтобы обеспечить максимальную гибкость и эффективность в управлении мобильностью.
            </p>
            <p>
              SwiftDrive.ru помогает компаниям создавать удобные, прозрачные и экономичные решения для управления корпоративным транспортом. Наши инструменты позволяют централизовать планирование, контроль и анализ расходов, что способствует цифровой трансформации бизнеса.
            </p>
          </div>
        </PageIntro>
        <Container className="mt-16">
          <StatList>
            <StatListItem value="800+" label="Клиентов по России" />
            <StatListItem value="99.9%" label="Доступность сервиса" />
            <StatListItem value="25%" label="Экономия для бизнеса" />
          </StatList>
        </Container>

        <Culture />

        <Team />

        <PageLinks
            className="mt-24 sm:mt-32 lg:mt-40"
            title="Из нашего блога"
            intro="Наши эксперты делятся идеями и решениями для оптимизации корпоративных поездок и управления городским транспортом. Читайте наши статьи, чтобы быть в курсе последних трендов и технологий."
            pages={blogArticles}
        />

        <ContactSection />
      </>
  )
}