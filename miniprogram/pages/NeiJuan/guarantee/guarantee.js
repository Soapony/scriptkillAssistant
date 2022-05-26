var app=getApp()
const db=wx.cloud.database()
var Name=''
Page({

    /**
     * 页面的初始数据
     */
    data: {
        characterId:'',
        rent:0,
        guarantors:['赵胜男','孙小美','钱多多','李表哥','周大壮','吴情义','郑经人'],
        index:0,
    },

    rentAmount: function(e){
        if(e.detail.value <= 20.0){
            this.setData({
                rent:parseFloat(e.detail.value)*1.3,
            })
        }
        else{
            this.setData({
                rent:parseFloat(e.detail.value)*1.5
            })
        }
        console.log('input发生改变',this.data.rent)
    },

    bindPickerChange: function(e) {
        this.setData({
          index: e.detail.value
        })
        console.log("选择了 ",this.data.guarantors[this.data.index])
    },

    confirm(){
        db.collection('NeiJuan').doc(this.data.characterId).update({
            data:{
                guarantor:this.data.guarantors[this.data.index],
                liabilities:this.data.rent,
            },
            success:function(res){
                console.log(res.data)
            }
        })
        wx.navigateTo({
          url: '../round2/round2',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.hideShareMenu();
        Name = app.globalData.wxName
        db.collection('NeiJuan').where({
            wxName:Name
        })
        .get()
        .then(res=>{
            console.log('get char info',res.data)
            this.setData({
                characterId:res.data[0]._id,
            })
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