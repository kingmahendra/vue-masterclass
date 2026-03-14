<script setup lang="ts"></script>
<template>
  <h1>Home Page</h1>
  <RouterLink to="/projects"> Go to Projects</RouterLink>
  <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }"> Go to Project 1</RouterLink>
</template>
