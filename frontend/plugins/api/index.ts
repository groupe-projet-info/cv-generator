import { Plugin, } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Store } from 'vuex'
import { default as auth, AuthAPI } from './auth'
import { default as cv, CVAPI } from './cv'
import { default as user, UserAPI } from './user'
import { default as template, TemplateAPI } from './template'
import { default as certification, CertificationAPI } from './certification'
import { default as education, EducationAPI } from './education'
import { default as job, JobAPI } from './job'
import { default as language, LanguageAPI } from './language'
import { default as skill, SkillAPI } from './skill'


interface API {
  auth: AuthAPI,
  cv: CVAPI,
  user: UserAPI,
  template: TemplateAPI
  certification: CertificationAPI
  education: EducationAPI
  job: JobAPI
  language: LanguageAPI
  skill: SkillAPI
}

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $test(): boolean,
    $api: API
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $test(): boolean,
    $api: API
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $test(): boolean,
    $api: API
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $test(): boolean,
    $api: API
  }
}

async function generateAPI($axios: NuxtAxiosInstance, store: Store<any>): Promise<API> {
  return {
    auth: await auth($axios, store),
    cv: cv($axios, store),
    user: user($axios, store),
    template: template($axios, store),
    certification: certification($axios, store),
    education: education($axios, store),
    job: job($axios, store),
    language: language($axios, store),
    skill: skill($axios, store)
  }
}

const apiPlugin: Plugin = async ({ $axios, store }, inject) => {
  inject('api', await generateAPI($axios, store))
}

export default apiPlugin