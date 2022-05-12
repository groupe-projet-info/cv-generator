import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface JobAPI {
  getList(cvId: any): Promise<any>,
  add_to_cv(cvId: string, jobTitle: string, companyName: string, jobDescription: string, jobShortDescription: string, jobTechnicalKeywords: [string], startYear: number, hasEnded: boolean, endYear: number, missions: [string]): Promise<any>,
  deleteItem(cvId: any, id: any): Promise<boolean>,
  deleteList(cvId: any): Promise<boolean>
}

function generateJob($axios: NuxtAxiosInstance, store: Store<any>): JobAPI {
  return {
    async getList(cvId: string) { 
      try {
        const data = await $axios.$get("/api/cv/"+cvId+"/job");
        return data;
      } catch (err) {
        return false
      }
    },
    
    async add_to_cv
    (cvId: string, jobTitle: string, companyName: string, jobDescription: string, jobShortDescription: string, jobTechnicalKeywords: [string], startYear: number, hasEnded: boolean, endYear: number, missions: [string]) {
      try {
        let a = await $axios.$post("/api/cv/"+cvId+"/job", {
          jobTitle: jobTitle,
          companyName: companyName,
          jobDescription: jobDescription,
          jobShortDescription: jobShortDescription,
          jobTechnicalKeywords: jobTechnicalKeywords,
          startYear: startYear,
          hasEnded: hasEnded,
          endYear: endYear,
          missions: missions
        });       
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteItem(cvId: string, jobId: string){
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/job/"+jobId);
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteList(cvId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/job/");
        return true;
      } catch (_err) {
        return false
      }
    }
  }
}

export default generateJob