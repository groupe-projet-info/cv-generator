import { Middleware } from "@nuxt/types";

const middleware: Middleware = async ({ $api, redirect }) => {
  if (!await $api.auth.test()) {
    redirect('/login')
  }
}

export default middleware