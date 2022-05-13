import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface UserAPI {
  getUser(): void,
  changePassword(password: string, newPassword: string, newPasswordConfirmation: string): Promise<boolean>,
}

function generateUser($axios: NuxtAxiosInstance, store: Store<any>): UserAPI {
  return {
    async getUser() { 
      try {
        const data = await $axios.$get("/api/user");
        return data;
      } catch (err) {
        return false
      }
    },
    async changePassword(password: string, newPassword: string, newPasswordConfirmation: string) { 
      try {
        let a = await $axios.$post("/api/user/password", { password: password, newPassword: newPassword, newPasswordConfirmation: newPasswordConfirmation });
        return true;
      } catch (_err) {
        return false
      }
    }
  }
}

export default generateUser