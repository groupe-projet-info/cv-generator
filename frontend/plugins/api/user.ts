import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface UserAPI {
  getUser(): void,
  changePassword(newPassword: string, newPasswordConfirmation: string): Promise<boolean>,
}

function generateUser($axios: NuxtAxiosInstance, store: Store<any>): UserAPI {
  return {
    async getUser() { },
    async changePassword(newPassword: string, newPasswordConfirmation: string) { return false }
  }
}

export default generateUser