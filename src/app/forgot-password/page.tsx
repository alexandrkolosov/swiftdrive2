// app/forgot-password/page.tsx
import ForgotPasswordForm from './ForgotPasswordForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Забыли пароль?',
  description: 'Введите почту чтобы восстановить ваш пароль.',
}

export default function ForgotPasswordPage() {
  return (
      <main className="overflow-hidden bg-gray-50">
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
            <ForgotPasswordForm />
          </div>
        </div>
      </main>
  )
}