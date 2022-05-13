import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'
import { StoreState } from "~/store"

export interface AuthAPI {
  login(userName: string, password: string): Promise<boolean>,
  logout(): Promise<boolean>,
  register(userName: string, password: string, confirmPassword: string): Promise<boolean>,
  test(): Promise<boolean>,
  canRegister(userName: string): Promise<boolean>,
}

interface LoginData {
  id: string,
  userName: string,
  accessToken: string
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

async function initTokenStorage($axios: NuxtAxiosInstance, store: Store<StoreState>) {
  const token = getUserFromCookies()
  if (token != undefined && token != '') {
    store.commit('setToken', token)
    $axios.defaults.headers['X-Access-Token'] = token
    const user = await $axios.$get('/api/user')
    store.commit('setUser', user)
  }
}

async function generateAuth($axios: NuxtAxiosInstance, store: Store<StoreState>): Promise<AuthAPI> {
  await initTokenStorage($axios, store)
  return {
    async login(userName: string, password: string) {
      let data: LoginData | null | undefined;
      try {

        data = await $axios.$post('/api/auth/login', { userName: userName, password })

      } catch (_err) {
        return false
      }

      if (!data || !data.accessToken) {
        console.log('accessToken is not defined')
        return false
      }

      const token = data.accessToken
      document.cookie = `token=${token};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Strict`
      store.commit('setToken', token)
      $axios.defaults.headers['X-Access-Token'] = token
      const user = await $axios.$get('/api/user')
      store.commit('setUser', user)
      // store.commit('setUser', { userName: 'TEST' })
      return true
    },
    async logout() {
      document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;SameSite=Strict`
      $axios.defaults.headers['X-Access-Token'] = undefined
      store.commit('setToken', '')
      store.commit('setUser', {})
      return true
    },
    async register(userName: string, password: string, confirmPassword: string) {
      try {

        let data = await $axios.$post('/api/auth/register', { userName: userName, password })

        return true
      } catch (_err) {
        return false
      }
    },
    async test() {
      if (store.state.token == '') return false
      try {
        const a = await $axios.$post('/api/auth/test')
      } catch (err) {
        return false
      }
      return true
    },
    async canRegister(userName: string) { return true }
  }
}

export default generateAuth