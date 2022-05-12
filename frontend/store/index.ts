export interface StoreState {
  user: any,
  token: string
}

export const state = (): StoreState => ({
  user: {},
  token: ''
})

export const mutations = {
  setUser(state: StoreState, user: any) {
    state.user = user
  },
  setToken(state: StoreState, token: string) {
    state.token = token
  }
}
