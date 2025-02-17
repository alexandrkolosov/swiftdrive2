// app/forgot-password/ForgotPasswordForm.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'

export default function ForgotPasswordForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Optionally add additional email validation here
        setSubmitted(true)
    }

    return (
        <form
            action="#"
            method="POST"
            onSubmit={handleSubmit}
            className="p-7 sm:p-11"
        >
            <div className="flex items-start">
                <a href="/" title="Home">
                </a>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">Сбросить пароль</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
                Введите электронный адрес. Ссылка на сброс пароля будет направлена на ваш зарегистрированный почтовый ящик.
            </p>
            <Field className="mt-8 space-y-3">
                <Label className="text-sm/5 font-medium">Email</Label>
                {submitted ? (
                    <p
                        className={clsx(
                            'block w-full rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
                            'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6'
                        )}
                    >
                        Проверьте свою почту, которая зарегистрирована в системе. В течении 2-3 минут вам придет письмо. Проверьте спам.
                    </p>
                ) : (
                    <Input
                        required
                        type="email"
                        name="email"
                        autoFocus
                        className={clsx(
                            'block w-full rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
                            'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                            'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black'
                        )}
                    />
                )}
            </Field>
            <div className="mt-8">
                <Button type="submit" className="w-full hover:cursor-pointer">
                    Сбросить пароль
                </Button>
            </div>
            <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
                <a href="/login" className="font-medium hover:text-gray-600">
                    Обратно
                </a>
            </div>
        </form>
    )
}