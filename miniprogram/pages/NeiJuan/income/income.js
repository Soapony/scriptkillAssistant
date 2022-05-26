// pages/income/income.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result:"结果显示",
        total:0,
        cal:[0.0,0.0,0.0,0.0,0.0,1.0,0.5,1.0,1.0,0.5,-10000.0],
    },

    formSubmit(e){
        console.log(e);
        let v = e.detail.value;
        if(!isNaN(v.dm10[0])){
            this.setData({
                'cal[0]':parseFloat(v.dm10[0]),
            });
        }
        if(!isNaN(v.dm11[0])){
            this.setData({
                'cal[1]':parseFloat(v.dm11[0]),
            });
        }
        if(!isNaN(v.dm20[0])){
            this.setData({
                'cal[2]':parseFloat(v.dm20[0]),
            });
        }
        if(!isNaN(v.dm21[0])){
            this.setData({
                'cal[3]':parseFloat(v.dm21[0]),
            });
        }
        if(!isNaN(v.buy0[0])){
            this.setData({
                'cal[4]':parseFloat(v.buy0[0]),
            });
        }
        if(!isNaN(v.buy1[0])){
            this.setData({
                'cal[5]':parseFloat(v.buy1[0]),
            });
        }
        if(!isNaN(v.service0[0])){
            this.setData({
                'cal[6]':parseFloat(v.service0[0]),
            });
        }
        if(!isNaN(v.service1[0])){
            this.setData({
                'cal[7]':parseFloat(v.service1[0]),
            });
        }
        if(!isNaN(v.meal2[0])){
            this.setData({
                'cal[8]':parseFloat(v.meal2[0]),
            });
        }
        if(!isNaN(v.clean0[0])){
            this.setData({
                'cal[9]':parseFloat(v.clean0[0]),
            });
        }
        if(!isNaN(v.clean1[0])){
            this.setData({
                'cal[10]':parseFloat(v.clean1[0]),
            });
        }
        console.log(this.data.cal);
        let c=this.data.cal;
        var sum=(c[0]+c[1]+c[2]+c[3]+c[10])*c[4]*c[5]*c[6]*c[7]*c[8]*c[9];
        console.log(sum);
        this.setData({
            total:sum,
            result:sum.toString()
        })
        if(v.meal0 == "minus1Kpp"){
            this.setData({
                result:this.data.result+"\n\n每人-1000元"
            });
        }
        console.log(this.data.cal,this.data.total);
    },

    formReset(){
        var x=[0.0,0.0,0.0,0.0,0.0,1.0,0.5,1.0,1.0,0.5,-10000.0];
        this.setData({
            result:"结果显示",
            total:0,
            cal:x,
        });
        console.log(this.data.cal,this.data.total);
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