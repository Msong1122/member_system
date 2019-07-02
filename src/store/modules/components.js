export default {
  state: {
    isCollapse: true
  },
  mutations: {
    changeIsCollapse: state => {
      state.isCollapse = !state.isCollapse
    }
  }
}
