// create-account/page.tsx

import { Button } from '@/components/Button'
import { clsx } from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Вы еще не с нами?',
  description: 'Узнайте как создать аккаунт!',
}

export default function CreateAccount() {
  return (
      <main className="overflow-hidden bg-gray-50">
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
            <div className="p-7 sm:p-11">
              <div className="flex items-start">
                <a href="/" title="Home">
                </a>
              </div>
              <h1 className="mt-8 text-base/6 font-medium">Создать аккаунт</h1>
              <p className="mt-1 text-sm/5 text-gray-600">
                Чтобы создать аккаунт обратитесь в транспортный департамент вашей компании или <a href='/contact' className='text-indigo-600 hover:underline'> свяжитесь с нами по форме заявки. </a>
              </p>
              <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
                <a href="/login" className="font-medium hover:text-gray-600">
                  Обратно
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}