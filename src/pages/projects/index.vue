<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjets = async () => {
  const { data, error, status } = await projectsQuery
  if (error) useErrorStore().setError({ error, customCode: status })
  if (data) {
    projects.value = data
  }
}
await getProjets()
</script>
<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
