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
        liabilities:0,
        guarantor:'',
    },
    
    submit(){
        this.setData({
            btn:true,
        })
        let t=this.data;
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
        if(t.round == 2){
            db.collection('NeiJuan').doc(this.data.myCharId).update({
                data:{
                    yingheP:t.price[0],
                    kongbuP:t.price[1],
                    jizhiP:t.price[2],
                    qingganP:t.price[3],
                },
                success: function(res){
                    console.log(res.data)
                }
            })
        }
        if(t.round == 3){
            db.collection('NeiJuan').doc(this.data.charId).get().then(res =>{
                let r=res.data;
                if(!(t.price[0]<=r.yingheP || r.yingheP == 0)){
                    this.setData({
                        'price[0]':r.yingheP
                    })
                }
                if(!(t.price[1]<=r.kongbuP || r.kongbuP == 0)){
                    this.setData({
                        'price[1]':r.kongbuP
                    })
                }
                if(!(t.price[2]<=r.jizhiP || r.jizhiP == 0)){
                    this.setData({
                        'price[2]':r.jizhiP
                    })
                }
                if(!(t.price[3]<=r.qingganP || r.qingganP == 0)){
                    this.setData({
                        'price[3]':r.qingganP
                    })
                }
                console.log(this.data.price);
                db.collection('NeiJuan').doc(this.data.charId).update({
                    data:{
                        yingheP:t.price[0],
                        kongbuP:t.price[1],
                        jizhiP:t.price[2],
                        qingganP:t.price[3],
                    },
                    success:function(res){
                        console.log(res.data)
                    }
                })
            })
        }
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
                liabilities:res.data[0].liabilities,
                guarantor:res.data[0].guarantor,
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