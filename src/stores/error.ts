import type { CustomError } from '@/types/Error'
import type { ExtendedPostgrestError } from '@/types/Error'
import type { PostgrestError } from '@supabase/supabase-js'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
  const isCustomError = ref(false)

  const setError = ({
    error,
    customCode = 500,
  }: {
    error: string | PostgrestError | Error
    customCode?: number
  }) => {
    if (typeof error === 'string') isCustomError.value = true
    if (typeof error === 'string' || error instanceof Error) {
      activeError.value = typeof error === 'string' ? new Error(error) : error
      activeError.value.customCode = customCode
      return
    }
    const extendedError: ExtendedPostgrestError = {
      ...(error as PostgrestError),
      statusCode: customCode,
    }
    activeError.value = extendedError
  }

  const clearError = () => {
    activeError.value = null
    isCustomError.value = false
  }

  return {
    activeError,
    isCustomError,
    setError,
    clearError,
  }
})
