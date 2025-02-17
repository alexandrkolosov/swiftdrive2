'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, remember }),
      })

      if (!res.ok) {
        throw new Error('Ошибка сети')
      }

      const data = await res.json()

      if (data.token) {
        router.push('/customer/')
      } else {
        setError('Не получилось получить токен.')
      }
    } catch (err) {
      console.error(err)
      setError('Неверный пароль или логин. Попробуйте еще раз.')
    }
  }

  return (
      <main className="overflow-hidden bg-gray-50">
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
            <form onSubmit={handleSubmit} className="p-7 sm:p-11">
              <div className="flex items-start">
                <a href="/" title="Home">
                  {/* лого или обратно добавить */}
                </a>
              </div>
              <h1 className="mt-8 text-base/6 font-medium">Добро пожаловать обратно!</h1>
              <p className="mt-1 text-sm/5 text-gray-600">Войти в аккаунт</p>

              <Field className="mt-8 space-y-3">
                <Label className="text-sm/5 font-medium">Email</Label>
                <Input
                    required
                    autoFocus
                    type="email"
                    name="email"
                    placeholder="ivan@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={clsx(
                        'block w-full rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
                        'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                        'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black'
                    )}
                />
              </Field>

              <Field className="mt-8 space-y-3">
                <Label className="text-sm/5 font-medium">Пароль</Label>
                <Input
                    required
                    type="password"
                    name="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={clsx(
                        'block w-full rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
                        'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                        'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black'
                    )}
                />
              </Field>

              {error && (
                  <p className="mt-4 text-center text-sm text-red-600">{error}</p>
              )}

              <div className="mt-8 flex items-center justify-between text-sm/5">
                <Field className="flex items-center gap-3">
                  <input
                      id="remember-me"
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="w-4 h-4 text-black border-gray-300 rounded focus:black"
                  />
                  <Label htmlFor="remember-me">Запомнить</Label>
                </Field>
                <a href="/forgot-password" className="font-medium hover:text-gray-600">
                  Забыли пароль?
                </a>
              </div>

              <div className="mt-8 text-center">
                <Button type="submit" invert className="w-[80px] mx-auto hover:cursor-pointer ">
                  Войти
                </Button>
              </div>
            </form>
            <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
              Еще не с нами?{' '}
              <a href="/create-account" className="font-medium hover:text-gray-600">
                Создать аккаунт
              </a>
            </div>
          </div>
        </div>
      </main>
  )
}