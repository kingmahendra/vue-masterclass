<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = (route.params as { id: string }).id
</script>

<template>
  <h1>Single Project {{ id }}</h1>
</template>
