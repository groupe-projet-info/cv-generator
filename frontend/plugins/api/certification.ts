import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface CertificationAPI {
  getList(cvId: any): Promise<any>,
  add_to_cv(cvId: string, authority: string, certificationName: string,certificationPassYear: number ): Promise<any>,
  deleteItem(cvId: string, certifId: string): Promise<boolean>,
  deleteList(cvId: string): Promise<boolean>

}

function generateCertification($axios: NuxtAxiosInstance, store: Store<any>): CertificationAPI {
  return {

    async getList(cvId: string) { 
      try {
        const data = await $axios.$get("/api/cv/"+cvId+"/certification");
        return data;
      } catch (err) {
        return false
      }
    },

    async add_to_cv(cvId: string, authority: string, certificationName: string,certificationPassYear: number ) {
      try {
        let a = await $axios.$post("/api/cv/"+cvId+"/certification", { authority: authority, certificationName: certificationName, certificationPassYear: certificationPassYear });
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteItem(cvId: string, certifId: string){
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/certification/"+certifId);
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteList(cvId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/certification/");
        return true;
      } catch (_err) {
        return false
      }
    }
  }
}

export default generateCertification