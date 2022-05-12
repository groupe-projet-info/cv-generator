import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface EducationAPI {
  getList(cvId: any): void,
  getItem(cvId: any, id: any): void,
  create(cvId: any): Promise<any>,
  delete(cvId: any, id: any): Promise<boolean>,
  update(cvId: any, id: any): Promise<boolean>,
}

function generateEducation($axios: NuxtAxiosInstance, store: Store<any>): EducationAPI {
  return {
    async getList(cvId: any) { },
    async getItem(cvId: any, id: any) { },
    async create(cvId: any) { return '0' },
    async delete(cvId: any, id: any) { return false },
    async update(cvId: any, id: any) { return false },
  }
}

export default generateEducation