import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Москва, Россия" invert={invert}>
          Академика Туполева, 15
          <br />
          <a href="tel:+74956470540" className="tel">+7 (495) 647-05-40</a>
        </Office>
      </li>
      <li>
        <Office name="Астана, Кахастан" invert={invert}>
          Проспект Назарбаева, 14
          <br />
          <a href="tel:+74956470540" className="tel">+7 (495) 647-05-40</a>
        </Office>
      </li>
    </ul>
  )
}
