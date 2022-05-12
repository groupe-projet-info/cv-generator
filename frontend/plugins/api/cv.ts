import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface CVAPI {
  create(): Promise<any>,
  getItem(id: any): Promise<any>,
  
  update_hobbies(id: any): Promise<any>,
  update_jobtitle(id: any): Promise<any>,

  deleteItem(id: any): Promise<boolean>,
}

function generateCV($axios: NuxtAxiosInstance, store: Store<any>): CVAPI {
  return {
    async create() { return '0' },
    async getItem(id: any) { },

    async update_hobbies(id: any) { return '0' },
    async update_jobtitle(id: any) { return '0' },
    
    async deleteItem(id: any) { return false }
  }
}

export default generateCV