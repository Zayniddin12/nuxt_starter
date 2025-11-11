import { getToken } from '@/composables/auth/index'
import { getItem } from '@/utils/storage'

export interface AuthState {
  isAuth: boolean
  user: Record<string, any> | null
  role: string
  applications: Record<string, any>
  application: Record<string, any>
}

export const state = (): AuthState => ({
  isAuth: !!getToken(),
  user: getItem("user") || null,
  role: getItem("user") ? getItem("user").role : "",
  applications: {},
  application: {},
})
