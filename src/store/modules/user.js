export default {
  state: {
    id: null,
    name: null,
    idCard: null,
    bankCard: null,
    deptId: null

  },
  mutations: {
    setUser (state, userData) {
      state.id = userData.id
      state.name = userData.name
      state.idCard = userData.idCard
      state.bankCard = userData.bankCard
      state.deptId = userData.deptId
    },
    cleanUser (state) {
      state.id = null
      state.name = null
      state.idCard = null
      state.bankCard = null
      state.deptId = null
    }
  }
}
