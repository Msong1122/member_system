import Mock from 'mockjs'
// user数组
import userList from './data/user'
Mock.setup({
  timeout: '300-600'
})
Mock.mock('/api/user/getUserList', {
  userList: userList
})
export default Mock
