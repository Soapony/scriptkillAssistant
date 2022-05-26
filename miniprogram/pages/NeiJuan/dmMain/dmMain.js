// pages/NeiJuan/dmMain/dmMain.js
const db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    newGame(){
        let i=0;
        let idS = ['ZSN','SXM','QDD','LBG','ZDZ','WQY','ZJR'];
        let pos = ['dm1','dm2','buy','service','meal','clean','officer'];
        let salary = [5001,5001,4001,6001,4001,3001,8001];
        for(;i<7;i++){
            db.collection('NeiJuan').doc(idS[i]).remove({
                success:function(res){
                    console.log(res.data)
                }
            })
        }
        i=0;
        for(;i<7;i++){
            db.collection('NeiJuan').doc(pos[i]).update({
                data:{
                    salary:salary[i],
                    character:''
                }
            }).then( res => {
                console.log(res.data)
            })
        }
    },

    invitePlayer(){

    },

    onShareAppMessage:function(){
        return{
            title:'邀请您加入',
            path: '/pages/NeiJuan/selectCharacter/selectCharacter',
            imageUrl:'/images/icon.jpg',
            success: function(res){
                wx.showToast({
                    title:'分享成功',
                    icon:'success',
                    duration:2000
                })
            },
            faile:function(res){
                wx.showToast({
                    title:'分享失败',
                    icon:"error",
                    duration:"2000"
                })
            }
        }
    },

    gotoMonthlyEvent(){
        wx.navigateTo({
            url:"../monthlyEvent/monthlyEvent"
        })
    },

    gotoPlayer(){
        wx.navigateTo({
            url:"../selectCharacter/selectCharacter"
        })
    },

    gotoIncome(){
        wx.navigateTo({
            url:"../income/income"
        })
    },

    gotoBid(){
        wx.navigateTo({
            url:"../bid/bid"
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.hideShareMenu();
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

})