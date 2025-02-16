import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import HowItWorks from '@/components/howitworks'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
             Клиенты которые нам доверяют
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Примеры наших интеграций"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
            Интеграции SwiftDrive с крупнейшими компаниями подтверждают эффективность и надёжность нашей платформы мультимодальности. Ниже приведены несколько примеров, как сотрудничество с нами позволило оптимизировать транспортные расходы и повысить эффективность управления поездками:
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Пример интеграций</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Платформа"
        title="Наши преимущества"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Компания существует на рынке с 2021 года и нашими клиентами являются крупнейшие частные и государственные компании России.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-left lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Универсальность и интеграция">
                Единая платформа для работы с разными типами транспорта позволяет операторам оптимизировать процессы и сокращать издержки. Благодаря единому API вы легко интегрируете наши решения в свои IT-системы.
            </ListItem>
            <ListItem title="Высокая технологичность">
                Использование передовых технологий обработки данных и алгоритмов маршрутизации обеспечивает максимальную эффективность и скорость работы сервисов. Аналитические инструменты помогают прогнозировать спрос и управлять флотом в режиме реального времени.
            </ListItem>
            <ListItem title="Гибкость и масштабируемость">
                SwiftDrive.ru подходит как для небольших компаний, так и для крупных операторов. Наша платформа легко масштабируется, что позволяет быстро адаптироваться к изменениям рынка и требованиям клиентов.
            </ListItem>
            <ListItem title="Безопасность и надёжность">
                Высокие стандарты защиты данных и надёжные IT-инфраструктуры обеспечивают стабильную работу сервисов даже в условиях пиковых нагрузок. Мы уделяем особое внимание безопасности как данных клиентов, так и пассажиров.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Единая транспортная платформа для бизнеса
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Инновационная B2B-платформа, объединяющая сервисы райдхейлинга, каршеринга, кикшеринга и доставки в одном месте.
          </p>
        </FadeIn>
      </Container>

      <Clients />
      <HowItWorks />



      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Мы пользуемся сервисом SwiftDrive уже больше года и сократили наши расходы на такси более чем на 25%. Клиентская поддержка в разы лучше чем у конкурентов.
        <br/>
        Недавно они  добавили функцию <span className="bold underline">каршеринга</span> !
      </Testimonial>

      <Services />
      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}
