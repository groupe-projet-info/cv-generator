import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'
import { StoreState } from "~/store"

export interface AuthAPI {
  login(username: string, password: string): Promise<boolean>,
  logout(): Promise<boolean>,
  register(username: string, password: string, confirmPassword: string): Promise<boolean>,
  test(): Promise<boolean>,
  canRegister(username: string): Promise<boolean>,
}

const parseCookie = (str: string): any => {
  return str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc: any, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
}

function getUserFromCookies() {
  if (!window || !window.document || !window.document.cookie) {
    console.log("%cwindow is not defined", "background-color: red; color: white")
    return ''
  }
  const cookies = parseCookie(window.document.cookie)
  return cookies.token ? cookies.token : ''
}

function initTokenStorage(store: Store<StoreState>) {
  const token = getUserFromCookies()
  store.commit('setToken', token)
}

function generateAuth($axios: NuxtAxiosInstance, store: Store<StoreState>): AuthAPI {
  initTokenStorage(store)
  return {
    async login(username: string, password: string) {
      const token = "test"
      document.cookie = `token=${token};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Strict`
      store.commit('setToken', token)
      store.commit('setUser', { username: 'TEST' })
      return true
    },
    async logout() {
      document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;SameSite=Strict`
      store.commit('setToken', '')
      store.commit('setUser', {})
      return true
    },
    async register(username: string, password: string, confirmPassword: string) { return false },
    async test() { return store.state.token == 'test' },
    async canRegister(username: string) { return false }
  }
}

export default generateAuth