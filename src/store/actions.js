import AuthApi from '../api/authorization'
import mixin from '../mixin'

export default {
  async authorize({ commit }) {
    console.log('===', AuthApi)
    const result = await AuthApi.authorize()
    if (mixin.methods.isSuccess(result)) {
      commit('SET_IS_LOGGED_IN', true)
    } else {
      throw Error('unauthorized')
    }
  }
}
