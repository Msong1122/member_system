import Mock from 'mockjs'
const Random = Mock.Random
let userList = []

// 生成100个随机的user数据
for (let i = 0; i <= 100; i++) {
  let user = {}
  // 姓名
  user.name = Random.cname()
  // 生日
  user.age = Random.date()
  // 积分
  user.grade = Random.natural(0, 1000)
  // 地址
  user.site = Random.county(true)
  // 邮编
  user.postcode = Random.zip()
  // 省份证号码
  user.id = Random.id()
  userList.push(user)
}
export default userList
