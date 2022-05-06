import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface AuthAPI {
  login(username: string, password: string): Promise<boolean>,
  logout(): Promise<boolean>,
  register(username: string, password: string, confirmPassword: string): Promise<boolean>,
  test(): Promise<boolean>,
  canRegister(username: string): Promise<boolean>,
}

function generateAuth($axios: NuxtAxiosInstance, store: Store<any>): AuthAPI {
  return {
    async login(username: string, password: string) { return false },
    async logout() { return true },
    async register(username: string, password: string, confirmPassword: string) { return false },
    async test() { return false },
    async canRegister(username: string) { return false }
  }
}

export default generateAuth