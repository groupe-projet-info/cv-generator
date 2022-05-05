import { Plugin } from '@nuxt/types'
import '@nuxtjs/axios'
import { default as auth, Auth } from './auth'

interface API {
  auth: Auth
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

const apiPlugin: Plugin = ({ $axios }, inject) => {
  inject('test', () => true)
  inject('api', {
    auth
  })
}

export default apiPlugin