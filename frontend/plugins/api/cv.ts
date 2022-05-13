import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Store } from 'vuex'

export interface CVAPI {

  create(v: { fullName?: string, phoneNumber?: string, emailAdress?: string, homeAdress?: string, drivingLicence?: string, jobTitle?: string, hobbies?: string[], preset: string }): Promise<any>,
  getItem(id: any): Promise<any>,
  getList(): Promise<any>,

  update_emailadress(id: string, emailAdress: string): Promise<any>,
  update_fullName(id: string, update_fullName: string): Promise<any>,
  update_phonenumber(id: string, phoneNumber: string): Promise<any>,
  update_homeadress(id: string, homeAdress: string): Promise<any>,
  update_licence(id: string, drivingLicence: string): Promise<any>,
  update_hobbies(id: string, hobbies: [string]): Promise<any>,
  update_jobtitle(id: string, jobTitle: string): Promise<any>,


  deleteItem(id: any): Promise<boolean>,
  deleteList(): Promise<boolean>

}

function generateCV($axios: NuxtAxiosInstance, store: Store<any>): CVAPI {
  return {

    async create({ fullName, phoneNumber, emailAdress, homeAdress, drivingLicence, jobTitle, hobbies, preset }) {
      try {
        let a = await $axios.$post("/api/cv/",
          {
            fullName: fullName,
            phoneNumber: phoneNumber,
            emailAdress: emailAdress,
            homeAdress: homeAdress,
            drivingLicence: drivingLicence,
            jobTitle: jobTitle,
            hobbies: hobbies,
            preset: preset
          });
        return a;
      } catch (_err) {
        return false
      }
    },

    async getItem(id: any) {
      try {
        const data = await $axios.$get("/api/cv/" + id);
        return data;
      } catch (err) {
        return false
      }

    },

    async getList() {
      try {
        const data = await $axios.$get("/api/cv");
        return data;
      } catch (err) {
        return false
      }
    },

    async update_fullName(id: string, fullName: string) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/fullname",
          { fullName: fullName });
        return true;
      } catch (_err) {
        return false
      }
    },

    async update_emailadress(id: string, emailAdress: string) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/emailadress",
          { emailAdress: emailAdress });
        return true;
      } catch (_err) {
        return false
      }
    },

    async update_phonenumber(id: string, phoneNumber: string) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/phonenumber",
          { phoneNumber: phoneNumber });
        return true;
      } catch (_err) {
        return false
      }
    },

    async update_homeadress(id: string, homeAdress: string) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/homeadress",
          { homeAdress: homeAdress });
        return true;
      } catch (_err) {
        return false
      }
    },

    async update_licence(id: string, drivingLicence: string) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/drivinglicence",
          { drivingLicence: drivingLicence });
        return true;
      } catch (_err) {
        return false
      }
    },
    async update_hobbies(id: string, hobbies: [string]) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/hobby",
          { hobbies: hobbies });
        return true;
      } catch (_err) {
        return false
      }
    },

    async update_jobtitle(id: string, jobTitle: string) {
      try {
        let a = await $axios.$post("/api/cv/" + id + "/jobtitle",
          { jobTitle: jobTitle });
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteItem(id: any) {
      try {
        let a = await $axios.$delete("/api/cv/" + id);
        return true;
      } catch (_err) {
        return false
      }
    },

    async deleteList() {
      try {
        let a = await $axios.$delete("/api/cv/");
        return true;
      } catch (_err) {
        return false
      }
    }

  }
}

export default generateCV