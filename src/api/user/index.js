import axios from 'axios'
function getUserlist () {
  return axios({
    method: 'get',
    url: '/api/user/getUserList'
  })
}
export {getUserlist}
