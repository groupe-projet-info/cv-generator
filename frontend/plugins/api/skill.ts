import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface SkillAPI {
  getList(cvId: any): Promise<any>,
  add_to_cv(cvId: string, skillTitle: string, skillValue: [string]): Promise<any>,
  deleteItem(cvId: String, skillId: String): Promise<boolean>,
  deleteList(cvId: string): Promise<boolean>
}


function generateSkill($axios: NuxtAxiosInstance, store: Store<any>): SkillAPI {
  return {
    async getList(cvId: String) {
      try {
        const data = await $axios.$get("/api/cv/"+cvId+"/skill");
        return data;
      } catch (err) {
        return false
      }
     },
    
    
    async add_to_cv(cvId: string, skillTitle: string, skillValue: [string]) {
      try {
        let a = await $axios.$post("/api/cv/"+cvId+"/skill", { skillTitle: skillTitle, skillValue: skillValue});
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteItem(cvId: string, skillId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/skill/"+skillId);
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteList(cvId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/skill/");
        return true;
      } catch (_err) {
        return false
      }
    }
  }
}    

export default generateSkill