import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface SkillAPI {
  getList(cvId: any): Promise<any>,
  add_to_cv(cvId: any): Promise<any>,
  deleteItem(cvId: any, id: any): Promise<boolean>,
  deleteList(cvId: any): Promise<boolean>
}

function generateSkill($axios: NuxtAxiosInstance, store: Store<any>): SkillAPI {
  return {
    async getList(cvId: any) { },
    async add_to_cv(cvId: any) { return '0' },
    async deleteItem(cvId: any, id: any) { return false },
    async deleteList(cvId: any) { return false }
  }
}

export default generateSkill