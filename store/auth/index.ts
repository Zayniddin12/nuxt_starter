import { defineStore } from 'pinia'
import { state } from './state'
import { actions } from './action'




export const useAuthStore = defineStore("auth", {
  state,
  actions,
});

