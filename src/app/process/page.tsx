import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
                   title,
                   image,
                   children,
                 }: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
      <Container className="group/section [counter-increment:section]">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                  {...image}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end lg:group-even/section:justify-start"
              />
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <FadeIn>
              <div
                  className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                  aria-hidden="true"
              />
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </FadeIn>
          </div>
        </div>
      </Container>
  )
}

function Discover() {
  return (
      <Section title="Понять потребности клиента" image={{ src: imageWhiteboard }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            На начальном этапе мы подробно знакомим клиента с нашим сервисом. Мы демонстрируем функционал платформы SwiftDrive.ru, чтобы вы могли оценить все преимущества объединения различных видов транспорта.
          </p>
          <p>
            Далее мы проводим личное общение, чтобы понять уникальные потребности вашего бизнеса. Такой подход позволяет адаптировать сервис под конкретные задачи и цели.
          </p>
        </div>

        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Включено на этом этапе
        </h3>
        <TagList className="mt-4">
          <TagListItem>Демонстрация сервиса</TagListItem>
          <TagListItem>Обсуждение потребностей</TagListItem>
          <TagListItem>Анализ бизнес-процессов</TagListItem>
          <TagListItem>Первичные консультации</TagListItem>
        </TagList>
      </Section>
  )
}

function Build() {
  return (
      <Section title="Интеграция и согласование" image={{ src: imageLaptop, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            На этапе Build мы согласовываем все детали сотрудничества, подписываем договор и выбираем удобные параметры оплаты. Этот этап включает всестороннее подключение вашего бизнеса к нашей системе.
          </p>
          <p>
            Мы сопровождаем вас на каждом шаге – от настройки параметров до полной интеграции, обеспечивая плавный и безболезненный запуск сервиса.
          </p>
        </div>

        <Blockquote
            author={{ name: 'Иван Сидоров', role: 'CTO SwiftDrive.ru' }}
            className="mt-12"
        >
          Наша команда обеспечила быструю и беспроблемную интеграцию, позволяя вам сосредоточиться на развитии бизнеса, а не на технических аспектах.
        </Blockquote>
      </Section>
  )
}

function Deliver() {
  return (
      <Section title="Поехали!" image={{ src: imageMeeting, shape: 2 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            После подключения клиента работа с нами только начинается. Наша поддержка доступна 27/7, что гарантирует оперативное решение любых вопросов.
          </p>
          <p>
            Мы всегда рядом и готовы помочь в решении практически любых возникающих задач, обеспечивая стабильность и эффективность работы вашего бизнеса.
          </p>
        </div>

        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Включено на этом этапе
        </h3>
        <List className="mt-8">
          <ListItem title="Поддержка 27/7">
            Круглосуточная помощь для решения любых оперативных вопросов.
          </ListItem>
          <ListItem title="Обучение персонала">
            Проведение тренингов и вебинаров для максимальной эффективности работы.
          </ListItem>
          <ListItem title="Мониторинг и анализ">
            Постоянный контроль работы системы для своевременного выявления и устранения проблем.
          </ListItem>
        </List>
      </Section>
  )
}

function Values() {
  return (
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
          <GridPattern
              className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
              yOffset={-270}
          />
        </div>

        <SectionIntro
            eyebrow="Наши ценности"
            title="Наши принципы"
        >
          <p>
            Мы строим нашу работу на основе ключевых ценностей, которые лежат в основе каждого проекта. Эти принципы помогают нам создавать доверительные и долгосрочные отношения с клиентами.
          </p>
        </SectionIntro>

        <Container className="mt-24">
          <GridList>
            <GridListItem title="Честность">
              Мы всегда действуем открыто и прозрачно, придерживаясь высоких стандартов этики. Наши клиенты ценят искренность и надежность в каждом взаимодействии.
            </GridListItem>
            <GridListItem title="Скорость">
              Быстрая реакция на запросы и оперативное решение задач — наш приоритет. Мы понимаем, что время клиента бесценно, поэтому работаем максимально оперативно.
            </GridListItem>
            <GridListItem title="Эффективность">
              Мы стремимся к максимальной результативности, оптимизируя бизнес-процессы для достижения наилучших результатов. Наши решения помогают снизить затраты и повысить продуктивность.
            </GridListItem>
            <GridListItem title="Лояльность">
              Мы ценим долгосрочные отношения и всегда готовы поддержать наших клиентов на каждом этапе сотрудничества. Доверие и взаимное уважение — основа нашего партнерства.
            </GridListItem>
            <GridListItem title="Гибкость">
              Наша платформа легко адаптируется под уникальные потребности каждого клиента. Мы готовы вносить изменения и улучшения в любой момент, чтобы обеспечить максимальное удобство.
            </GridListItem>
            <GridListItem title="Инновационность">
              Мы постоянно внедряем новые технологии и ищем нестандартные решения для оптимизации бизнес-процессов. Наша цель — оставаться на передовой технологического прогресса.
            </GridListItem>
          </GridList>
        </Container>
      </div>
  )
}

export const metadata: Metadata = {
  title: 'Как это работает',
  description:
      'Описание нашего процесса работы, включающего знакомство с клиентом, подключение и постоянную поддержку 27/7.',
}

export default function Process() {
  return (
      <>
        <PageIntro eyebrow="Наш процесс" title="Как это работает">
          <p>
            Мы стремимся сделать процесс подключения максимально прозрачным и эффективным, чтобы вы могли сосредоточиться на развитии вашего бизнеса.
          </p>
        </PageIntro>

        <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
          <Discover />
          <Build />
          <Deliver />
        </div>

        <Values />

        <ContactSection />
      </>
  )
}