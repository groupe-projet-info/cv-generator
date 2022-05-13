import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface LanguageAPI {
  getList(cvId: string): Promise<any>,
  add_to_cv(cvId: string, languageName: string, level: string): Promise<any>,
  deleteItem(cvId: string, id: any): Promise<boolean>,
  deleteList(cvId: string): Promise<boolean>
}

function generateLanguage($axios: NuxtAxiosInstance, store: Store<any>): LanguageAPI {
  return {
    async getList(cvId: string) {
      try {
        const data = await $axios.$get("/api/cv/"+cvId+"/language");
        return data;
      } catch (err) {
        return false
      }
    },

    async add_to_cv(cvId: string, languageName: string, level: string) {
      try {
        let a = await $axios.$post("/api/cv/"+cvId+"/language", {languageName: languageName, level: level });
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteItem(cvId: string, languageId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/language/"+languageId);
        return true;
      } catch (_err) {
        return false
      }
    },
    async deleteList(cvId: string) {
      try {
        let a = await $axios.$delete("/api/cv/"+cvId+"/language/");
        return true;
      } catch (_err) {
        return false
      }
    }
  }
}

export default generateLanguage