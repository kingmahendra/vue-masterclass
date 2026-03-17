<script setup lang="ts">
import { Button } from '@/components/ui/button'
defineProps<{
  message: string
  customCode: number
  code: string
  statusCode: number
  hint: string | null
  details: string | null
}>()
</script>

<template>
  <section
    class="mx-auto flex min-h-[90vh] flex-1 items-center justify-center -mt-20 p-10 text-center"
  >
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">{{ customCode || code }}</h1>
      <h1 class="error__code" v-if="statusCode">Status code: {{ statusCode }}</h1>
      <p class="error__msg">{{ message }}</p>
      <p v-if="hint">{{ hint }}</p>
      <p v-if="details">{{ details }}</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
