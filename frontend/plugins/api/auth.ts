export interface Auth {
  login(): void,
  logout(): void,
  register(): void
}

function login() { }

function logout() { }

function register() { }

const auth: Auth = {
  login,
  logout,
  register
}

export default auth