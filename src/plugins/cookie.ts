import Cookie from 'js-cookie'

const TOKEN_NAME = '_token'

export default {
  setToken(token: string) {
    Cookie.set(TOKEN_NAME, token, { expires: 30 })
  },

  getToken() {
    return Cookie.get(TOKEN_NAME)
  },

  deleteToken() {
    Cookie.remove(TOKEN_NAME)
  }
}
