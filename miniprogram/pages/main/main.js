// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scriptnames:["内卷","随意","随便"],
    choosen:-1,
  },

  onClick:function(e){
    console.log(e.currentTarget.dataset.text);
    this.setData({
      choosen:parseInt(e.currentTarget.dataset.text),
    })
    switch(this.data.choosen){
      case 0:
        wx.navigateTo({
          url:"../NeiJuan/dmMain/dmMain"
        });
        break;
      default:
        wx.showToast({
          title:'哎呀出错了',
          icon:'none',
          duration:'1000'
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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