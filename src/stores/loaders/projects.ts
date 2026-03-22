import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { useMemoize } from '@vueuse/core'

export const useProjectsStore = defineStore('projects-store', () => {
  const validateCache = () => {
    if (projects.value?.length) {
      projectsQuery.then(({ data, error }) => {
        if (JSON.stringify(projects.value) === JSON.stringify(data)) {
        } else {
          loadProjects.delete('projects')
          if (!error && data) projects.value = data
        }
      })
    }
  }

  const projects = ref<Projects>([])
  const loadProjects = useMemoize(async (key: string) => await projectsQuery)

  const getProjets = async () => {
    validateCache()
    const { data, error, status } = await loadProjects('projects')
    if (error) useErrorStore().setError({ error, customCode: status })
    if (data) {
      projects.value = data
    }
  }

  return {
    projects,
    getProjets,
  }
})
