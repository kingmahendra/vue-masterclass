import type { LoginForm } from '@/types/AuthForm'
import type { AuthError } from '@supabase/supabase-js'

type FormErrors<T> = {
  [K in keyof T]: string[]
}
export const useFormErrors = () => {
  const serverError = ref('')
  const realtimeError = ref<FormErrors<LoginForm>>()

  const handleServerError = async (error: AuthError) => {
    serverError.value =
      error.message === 'Invalid login credentials' ? 'Incorrect email or password' : error.message
  }

  const handleLoginForm = async (formData: LoginForm) => {
    realtimeError.value = {
      email: [],
      password: [],
    }
    const { validateEmail, validatePassword } = await import('@/utils/formValidations')

    const emailErrors = validateEmail(formData.email)
    if (emailErrors.length) realtimeError.value.email = emailErrors

    const passwordErrors = validatePassword(formData.password)
    if (passwordErrors.length) realtimeError.value.password = passwordErrors
  }

  return {
    serverError,
    realtimeError,
    handleServerError,
    handleLoginForm,
  }
}
