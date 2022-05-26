const newGame= require('newGame');
// const cloud = require('wx-server-sdk');
// const db = cloud.database();
// const _ = db.command;

// cloud.init();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'newGame':
      return await newGame.main(event, context);
  }
  // try{
  //   return await db.collection('NeiJuan').where({
  //       _id_: _.exists(true)
  //   }).remove()
  //   } catch(e) {
  //     console.error(e)
  //   }
};
