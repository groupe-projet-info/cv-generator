export interface StoreState {
  user: any
}

export const state = (): StoreState => ({
  user: {}
})

export const mutations = {
  setUser(state: StoreState, user: any) {
    state.user = user
  }
}
