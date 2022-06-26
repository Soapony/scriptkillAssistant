// pages/NeiJuan/playerMain/playerMain.js
var Name;
const db = wx.cloud.database();
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        character:'',
        characterId:'',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.hideShareMenu();
        let Name=app.globalData.wxName;
        db.collection('NeiJuan').where({
            wxName:Name
        })
        .get()
        .then(res=>{
            console.log(res.data)
            this.setData({
                character:res.data[0].character,
                characterId:res.data[0]._id
            })
        })
    },

    round1(){
        wx.navigateTo({
            url:"../round1/round1"
        })
    },

    round2(){
        wx.navigateTo({
            url:"../round2/round2"
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})