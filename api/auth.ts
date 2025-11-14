const { $request } = useNuxtApp()
export function signUpApi(data: Record<string, any>) {
  return $request.post('/users', data)
}

export function googleSignUpApi(params: Record<string, any>) {
  return $request.post('/auth/google/callback', null, { params })
}

export function currentUser() {
  return $request.post('/auth/me')
}

export function storeApplications(data: Record<string, any>) {
  return $request.post('/applications', data)
}

export function updateApplications(data: FormData, uuid: string) {
  return $request.post(`/applications/${uuid}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export function getApplication() {
  return $request.get('/applications')
}

export function getApplicationById(id: string | number) {
  return $request.get(`/applications/${id}`)
}

export function logout() {
  return $request.post('/auth/logout')
}

export function login(data: Record<string, any>) {
  return $request.post('/auth/login', data)
}

export function userQuestions(data: Record<string, any>) {
  return $request.post('/user-questions', data)
}

export function sendToReview(uuid: string) {
  return $request.put(`/applications/send-to-review/${uuid}`)
}

export function changePassword(data: Record<string, any>) {
  return $request.put('/change-password', data)
}
