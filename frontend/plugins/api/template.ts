import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface TemplateAPI {
  getList(): void,
  getItem(id: any): void,
  create(): Promise<any>,
  delete(id: any): Promise<boolean>,
  update(id: any): Promise<boolean>,
}

function generateTemplate($axios: NuxtAxiosInstance, store: Store<any>): TemplateAPI {
  return {
    async getList() { },
    async getItem(id: any) { },
    async create() { return '0' },
    async delete(id: any) { return false },
    async update(id: any) { return false },
  }
}

export default generateTemplate