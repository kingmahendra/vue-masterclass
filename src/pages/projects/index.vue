<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'
const projectLoader = useProjectsStore()
const { projects } = storeToRefs(projectLoader)
const { getProjets } = projectLoader
await getProjets()
</script>
<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
