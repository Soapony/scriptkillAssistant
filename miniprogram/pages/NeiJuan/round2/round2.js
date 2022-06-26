// pages/NeiJuan/round2/round2.js
var Name='';
const db = wx.cloud.database();
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        index:0,
        round:1,
        btn:false,
        myCharId:'',
        charId:'ZSN',
        amount:[0,0,0,0],
        price:[0,0,0,0],
        names:['赵胜男','孙小美','钱多多','李表哥','周大壮','吴情义','郑经人'],
        idS:['ZSN','SXM','QDD','LBG','ZDZ','WQY','ZJR'],
    },
    
    submit(){
        this.setData({
            btn:true,
        })
        let t=this.data
        db.collection('NeiJuan').doc(this.data.myCharId).update({
            data:{
                yinghe:t.amount[0],
                kongbu:t.amount[1],
                jizhi:t.amount[2],
                qinggan:t.amount[3],
            },
            success: function(res){
                console.log(res.data)
            }
        })
        db.collection('NeiJuan').doc(this.data.charId).get().then(res =>{
            if(t.price[0]<=res.data.yingheP || res.data.yingheP == 0){
                db.collection('NeiJuan').doc(this.data.charId).update({
                    data:{
                        yingheP:t.price[0],
                    },
                    success:function(res){
                        console.log(res.data)
                    }
                })
            }
            if(t.price[1]<=res.data.kongbuP || res.data.kongbuP == 0){
                db.collection('NeiJuan').doc(this.data.charId).update({
                    data:{
                        kongbuP:t.price[1],
                    },
                    success:function(res){
                        console.log(res.data)
                    }
                })
            }
            if(t.price[2]<=res.data.jizhiP || res.data.jizhiP == 0){
                db.collection('NeiJuan').doc(this.data.charId).update({
                    data:{
                        jizhiP:t.price[2],
                    },
                    success:function(res){
                        console.log(res.data)
                    }
                })
            }
            if(t.price[3]<=res.data.qingganP || res.data.qingganP == 0){
                db.collection('NeiJuan').doc(this.data.charId).update({
                    data:{
                        qingganP:t.price[3],
                    },
                    success:function(res){
                        console.log(res.data)
                    }
                })
            }
        })
    },

    nextRound(){
        this.onPullDownRefresh()
    },

    bindPickerChange: function(e) {
        this.setData({
          charId: this.data.idS[e.detail.value],
          index:e.detail.value,
        })
        console.log("选择了 ",this.data.charId)
    },

    amount1Input: function(e){
        this.setData({
            'amount[0]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.amount)
    },

    amount2Input: function(e){
        this.setData({
            'amount[1]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.amount)
    },

    amount3Input: function(e){
        this.setData({
            'amount[2]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.amount)
    },

    amount4Input: function(e){
        this.setData({
            'amount[3]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.amount)
    },

    price1Input: function(e){
        this.setData({
            'price[0]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.price)
    },

    price2Input: function(e){
        this.setData({
            'price[1]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.price)
    },

    price3Input: function(e){
        this.setData({
            'price[2]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.price)
    },

    price4Input: function(e){
        this.setData({
            'price[3]':parseInt(e.detail.value)
        })
        console.log('input发生改变',this.data.price)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.hideShareMenu();
        Name = app.globalData.wxName;
        db.collection('NeiJuan').where({
            wxName:Name
        })
        .get()
        .then(res=>{
            console.log('get char info',res.data)
            this.setData({
                myCharId:res.data[0]._id,
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
        this.setData({
            btn:false,
            amount:[0,0,0,0],
            price:[0,0,0,0],
            round:this.data.round+1,
        })
        db.collection('NeiJuan').doc(this.data.myCharId).update({
            data:{
                yinghe:0,
                yingheP:0,
                kongbu:0,
                kongbuP:0,
                jizhi:0,
                jizhiP:0,
                qinggan:0,
                qingganP:0,
            },
            success:function(res){
                console.log(res.data)
            }
        })
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