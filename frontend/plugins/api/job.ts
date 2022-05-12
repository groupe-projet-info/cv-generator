import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface JobAPI {
  getList(cvId: any): Promise<any>,
  add_to_cv(cvId: any): Promise<any>,
  deleteItem(cvId: any, id: any): Promise<boolean>,
  deleteList(cvId: any): Promise<boolean>
}

function generateJob($axios: NuxtAxiosInstance, store: Store<any>): JobAPI {
  return {
    async getList(cvId: any) { },
    async add_to_cv(cvId: any) { return '0' },
    async deleteItem(cvId: any, id: any) { return false },
    async deleteList(cvId: any) { return false }
  }
}

export default generateJob