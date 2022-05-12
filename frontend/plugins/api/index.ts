import { Plugin, } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Store } from 'vuex'
import { default as auth, AuthAPI } from './auth'
import { default as cv, CVAPI } from './cv'
import { default as user, UserAPI } from './user'
import { default as template, TemplateAPI } from './template'

interface API {
  auth: AuthAPI,
  cv: CVAPI,
  user: UserAPI,
  template: TemplateAPI
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

function generateAPI($axios: NuxtAxiosInstance, store: Store<any>): API {
  return {
    auth: auth($axios, store),
    cv: cv($axios, store),
    user: user($axios, store),
    template: template($axios, store)
  }
}

const apiPlugin: Plugin = ({ $axios, store }, inject) => {
  inject('api', generateAPI($axios, store))
}

export default apiPlugin