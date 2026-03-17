<script setup lang="ts">
usePageStore().pageData.title = 'Dashboard'
</script>
<template>
  <h1>Home Page</h1>
  <RouterLink to="/projects"> Go to Projects</RouterLink>
</template>
