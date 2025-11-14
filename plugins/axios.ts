import axios from 'axios'

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'https://your-api-url.com', // bu joyni o'zgartir
    timeout: 10000,
  })

  return {
    provide: {
      axios: api,
    },
  }
})
