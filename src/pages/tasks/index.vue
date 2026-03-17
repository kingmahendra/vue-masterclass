<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { tasksWithProjectsQuery, type TasksWithProject } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/taskColumns'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProject | null>(null)
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery
  if (error) useErrorStore().setError({ error, customCode: status })
  if (data) {
    tasks.value = data
  }
}

await getTasks()
</script>
<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
