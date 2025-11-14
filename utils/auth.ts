import { useAuthStore } from '@/store/auth/index'
import { removeItem, getItem, setItem } from '@/utils/storage'
// import { resetState } from '@/store/index'

export function getToken() {
  return getItem('access_token')
}
// element-ui
export function setToken(token: string) {
  // clearForLogout();
  return setItem('access_token', token)
}

export function removeToken() {
  return removeItem('access_token')
}

export function clearForLogout() {
  removeItem('access_token')
  removeItem('access_token_time')
  removeItem('user')

  const authStore = useAuthStore()
  authStore.$reset()
  // resetState();
  return true
}

export function setTokenTime(expires_in: number) {
  var d = new Date()
  d.setHours(d.getHours() + expires_in / 60 / 60)
  setItem('access_token_time', d.getTime())
}

export function getTokenTime() {
  return getItem('access_token_time')
}

export function checkTokenTime() {
  let tokenTime = getItem('access_token_time')
  return tokenTime > new Date().getTime()
}
