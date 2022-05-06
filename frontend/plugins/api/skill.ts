import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface SkillAPI {
  getList(cvId: any): void,
  getItem(cvId: any, id: any): void,
  create(cvId: any): Promise<any>,
  delete(cvId: any, id: any): Promise<boolean>,
  update(cvId: any, id: any): Promise<boolean>,
}

function generateSkill($axios: NuxtAxiosInstance, store: Store<any>): SkillAPI {
  return {
    async getList(cvId: any) { },
    async getItem(cvId: any, id: any) { },
    async create(cvId: any) { return '0' },
    async delete(cvId: any, id: any) { return false },
    async update(cvId: any, id: any) { return false },
  }
}

export default generateSkill