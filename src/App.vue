<script setup lang="ts">
import AuthLayout from '@/components/layout/main/AuthLayout.vue'
import AppErrorPage from './components/AppError/AppErrorPage.vue'

const errorStore = useErrorStore()
const { activeError } = storeToRefs(errorStore)

onErrorCaptured((err) => {
  errorStore.setError({ error: err })
})

onMounted(async () => {
  useAuthStore().trackAuthChanges()
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="1000">
        <component :is="Component" :key="route.name"></component>
        <template #fallback> <span>Loading....</span> </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
