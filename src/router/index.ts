import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  await authStore.getSession()

  const isAuthpages = ['/login', '/register'].includes(to.path)
  if (!authStore.user && !isAuthpages) {
    return { name: '/login' }
  }

  if (authStore.user && isAuthpages) {
    return { name: '/' }
  }
})

export default router
