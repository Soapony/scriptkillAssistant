const cloud = require('wx-server-sdk');
const db = cloud.database();
const _ = db.command;

cloud.init();

exports.main = async (event, context) => {
    try{
        return await db.collection('NeiJuan').where({
            _id: "0"
        }).remove()
    } catch(e) {
        console.error(e)
    }
};