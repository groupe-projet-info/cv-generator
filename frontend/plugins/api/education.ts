import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface EducationAPI {
  getList(cvId: string) : Promise<any>,
  add_to_cv(cvId: string, location: string, title: string,startYear: number, hasEnded: boolean, endYear: number, comments: string ): Promise<any>,
  deleteItem(cvId: string, educId: string): Promise<boolean>,
  deleteList(cvId: any): Promise<boolean>
}

function generateEducation($axios: NuxtAxiosInstance, store: Store<any>): EducationAPI {
  return {
    async getList(cvId: string) { 
      try {
        const data = await $axios.$get("/api/cv/"+cvId+"/education");
        return data;
      } catch (err) {
        return false
      }
    },

    async add_to_cv(cvId: string, location: string, title: string,startYear: number, hasEnded: boolean, endYear: number, comments: string ) {
      try {
        let a = await $axios.$post("/api/cv/"+cvId+"/education", { location: location, title: title,startYear: startYear, hasEnded: hasEnded, endYear: endYear, comments: comments });
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteItem(cvId: string, educId: string){
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/education/"+educId);
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteList(cvId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/education/");
        return true;
      } catch (_err) {
        return false
      }
    }
  }
}

export default generateEducation