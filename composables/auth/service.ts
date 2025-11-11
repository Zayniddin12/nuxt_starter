import request from '@/utils/request';

export function signUpApi(data) {
  return request({
    url: 'users',
    method: 'post',
    data,
  });
}

export function googleSignUpApi(params) {
  return request({
    url: "auth/google/callback",
    method: 'post',
    params,
  })
}

export function currentUser() {
  return request({
    url: '/auth/me',
    method: 'post'
  });
}

export function storeApplications(data) {
  return request({
    url: 'applications',
    method: 'post',
    data,
  });
}

export function updateApplications(data, uuid) {
  return request({
    headers: { "Content-Type": "multipart/form-data" },
    url: `applications/${uuid}`,
    method: 'post',
    data,
  });
}

export function getApplication() {
  return request({
    url: '/applications',
    method: 'get'
  });
}

export function getApplicationById(id) {
  return request({
    url: `/applications/${id}`,
    method: 'get'
  });
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  });
}

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  });
}

export function userQuestions(data) {
  return request({
    url: '/user-questions',
    method: 'post',
    data
  });
}

export function sendToReview(uuid) {
  return request({
    url: '/applications/send-to-review/' + uuid,
    method: 'put',
  });
}

export function changePassword(data) {
  return request({
    url: '/change-password',
    method: 'put',
    data
  });
}