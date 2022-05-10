import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface CVAPI {
  getList(): void,
  getItem(id: any): void,
  create(): Promise<any>,
  delete(id: any): Promise<boolean>,
  update(id: any): Promise<boolean>,
}

function generateCV($axios: NuxtAxiosInstance, store: Store<any>): CVAPI {
  return {
    async getList() { },
    async getItem(id: any) { },
    async create() { return '0' },
    async delete(id: any) { return false },
    async update(id: any) { return false },
  }
}

export default generateCV