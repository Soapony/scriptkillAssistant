const NeiJuan = require('./NeiJuan/NeiJuan');

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  switch (event.type) {
    case "NeiJuan":
      return await NeiJuan.main(event, context);
  }
}