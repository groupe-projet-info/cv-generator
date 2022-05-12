import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface EducationAPI {
  getList(cvId: any): Promise<any>,
  add_to_cv(cvId: any): Promise<any>,
  deleteItem(cvId: any, id: any): Promise<boolean>,
  deleteList(cvId: any): Promise<boolean>
}

function generateEducation($axios: NuxtAxiosInstance, store: Store<any>): EducationAPI {
  return {
    async getList(cvId: any) { },
    async add_to_cv(cvId: any) { return '0' },
    async deleteItem(cvId: any, id: any) { return false },
    async deleteList(cvId: any) { return false }
  }
}

export default generateEducation