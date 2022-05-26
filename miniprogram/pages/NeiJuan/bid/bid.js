// pages/bid/bid.js
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    round:1,
    store:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
    total:[0,0,0,0,0,0,0],
    store1:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    total1:[0,0,0,0,0,0,0],
    idS:['ZSN','SXM','QDD','LBG','ZDZ','WQY','ZJR'],
  },

  async refresh(){
    if(this.data.round == 1){
      let i=0;
      for(;i<7;i++){
          await db.collection("NeiJuan").doc(this.data.idS[i]).get().then(
            res =>{
              console.log(res.data)
              this.setData({
                [`store[${i}][0]`]:res.data.yinghe,
                [`store[${i}][1]`]:res.data.kongbu,
                [`store[${i}][2]`]:res.data.jizhi,
                [`store[${i}][3]`]:res.data.qinggan,
              })
            }
          )
      }
      this.setData({
        "total[0]":this.data.store[0][0]+this.data.store[0][1]+this.data.store[0][2]+this.data.store[0][3],
        "total[1]":this.data.store[1][0]+this.data.store[1][1]+this.data.store[1][2]+this.data.store[1][3],
        "total[2]":this.data.store[2][0]+this.data.store[2][1]+this.data.store[2][2]+this.data.store[2][3],
        "total[3]":this.data.store[3][0]+this.data.store[3][1]+this.data.store[3][2]+this.data.store[3][3],
        "total[4]":this.data.store[4][0]+this.data.store[4][1]+this.data.store[4][2]+this.data.store[4][3],
        "total[5]":this.data.store[5][0]+this.data.store[5][1]+this.data.store[5][2]+this.data.store[5][3],
        "total[6]":this.data.store[6][0]+this.data.store[6][1]+this.data.store[6][2]+this.data.store[6][3]
      })
    }
    if(this.data.round == 2){
      let i=0;
      for(;i<7;i++){
          await db.collection("NeiJuan").doc(this.data.idS[i]).get().then(
            res =>{
              console.log(res.data)
              this.setData({
                [`store1[${i}][0]`]:res.data.yinghe,
                [`store1[${i}][1]`]:res.data.kongbu,
                [`store1[${i}][2]`]:res.data.jizhi,
                [`store1[${i}][3]`]:res.data.qinggan,
                [`store1[${i}][4]`]:res.data.yingheP,
                [`store1[${i}][5]`]:res.data.kongbuP,
                [`store1[${i}][6]`]:res.data.jizhiP,
                [`store1[${i}][7]`]:res.data.qingganP,
              })
            }
          )
      }
    }
    if(this.data.round == 3){
      let i=0;
      for(;i<7;i++){
          await db.collection("NeiJuan").doc(this.data.idS[i]).get().then(
            res =>{
              console.log(res.data)
              this.setData({
                [`store1[${i}][0]`]:res.data.yinghe,
                [`store1[${i}][1]`]:res.data.kongbu,
                [`store1[${i}][2]`]:res.data.jizhi,
                [`store1[${i}][3]`]:res.data.qinggan,
                [`store1[${i}][4]`]:res.data.yingheP,
                [`store1[${i}][5]`]:res.data.kongbuP,
                [`store1[${i}][6]`]:res.data.jizhiP,
                [`store1[${i}][7]`]:res.data.qingganP,
              })
            }
          )
      }
      let u = this.data;
      this.setData({
        "total1[0]":u.store1[0][0]*u.store1[0][4]+u.store1[0][1]*u.store1[0][5]+u.store1[0][2]*u.store1[0][6]+u.store1[0][3]*u.store1[0][7],
        "total1[1]":u.store1[1][0]*u.store1[1][4]+u.store1[1][1]*u.store1[1][5]+u.store1[1][2]*u.store1[1][6]+u.store1[1][3]*u.store1[1][7],
        "total1[2]":u.store1[2][0]*u.store1[2][4]+u.store1[2][1]*u.store1[2][5]+u.store1[2][2]*u.store1[2][6]+u.store1[2][3]*u.store1[2][7],
        "total1[3]":u.store1[3][0]*u.store1[3][4]+u.store1[3][1]*u.store1[3][5]+u.store1[3][2]*u.store1[3][6]+u.store1[3][3]*u.store1[3][7],
        "total1[4]":u.store1[4][0]*u.store1[4][4]+u.store1[4][1]*u.store1[4][5]+u.store1[4][2]*u.store1[4][6]+u.store1[4][3]*u.store1[4][7],
        "total1[5]":u.store1[5][0]*u.store1[5][4]+u.store1[5][1]*u.store1[5][5]+u.store1[5][2]*u.store1[5][6]+u.store1[5][3]*u.store1[5][7],
        "total1[6]":u.store1[6][0]*u.store1[6][4]+u.store1[6][1]*u.store1[6][5]+u.store1[6][2]*u.store1[6][6]+u.store1[6][3]*u.store1[6][7],
      })
    }
  },

  nextRound(){
    this.setData({
      round:this.data.round+1,
      store1:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
    })
    this.onPullDownRefresh();
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