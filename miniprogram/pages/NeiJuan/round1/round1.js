// pages/NeiJuan/round1/round1.js
const db=wx.cloud.database()
const _ =db.command
var Name=''
var flag=false
var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        positions:['请选择','硬核/机制dm','情感/恐怖dm','剧本采购','运营客服','餐饮负责人','保洁人员','店长'],
        index:0,
        posKey:['dm1','dm2','buy','service','meal','clean','officer'],
        salary:0,
        character:'',
        btn:false,
    },

    bindPickerChange: function(e) {
        this.setData({
          index: e.detail.value
        })
        console.log("选择了 ",this.data.posKey[this.data.index-1])
    },

    salaryInput: function(e){
        this.setData({
            salary:parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.salary)
    },

    submit(){
        if(this.data.index == 0){
            wx.showToast({
                title:'请选择岗位',
                icon:'none',
                duration: 2000
               })
            return;
        }
        db.collection("NeiJuan").doc(this.data.posKey[this.data.index-1]).get().then(res => {
            console.log('get salary info',res.data);
            if(res.data.salary > this.data.salary){
                console.log('less than salary: ',this.data.posKey[this.data.index-1])
                db.collection("NeiJuan").doc(this.data.posKey[this.data.index-1]).update({
                    data:{
                        salary:this.data.salary,
                        character:this.data.character,
                    }
                })
                flag=true
            }
        })
        this.setData({
            btn:true,
        })
    },

    checkResult(){
        let URL='';
        db.collection("NeiJuan").where({
            character:this.data.character
        }).get().then(res =>{
            console.log(res.data)
            if((res.data.length != 0) && flag){
                URL=res.data[0]._id
                URL="../positions/"+URL+"/"+URL+"?salary="+this.data.salary.toString();
                console.log('navi url: ',URL)
                wx.navigateTo({
                    url:URL
                })
            }
            else{
                URL="empty"
                URL="../positions/"+URL+"/"+URL;
                console.log('navi url: ',URL)
                wx.navigateTo({
                    url:URL
                })
            }
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
                character:res.data[0]._id,
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
        this.setData({
            btn:false
        })
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