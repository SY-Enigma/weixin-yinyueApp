// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env : 'sy-8gfng79gae5c7c40'
})

const db = cloud.database()

const playListCollection = db.collection('playlist') 

// 云函数入口函数
exports.main = async (event, context) => {
  //异步转同步
  const res = await playListCollection.get()
  
  console.log('#####' + res.data)
  return res.data
}