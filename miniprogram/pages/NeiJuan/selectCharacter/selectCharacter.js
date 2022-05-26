// pages/NeiJuan/selectCharacter/selectCharacter.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items:[
            {value: 'ZSN', name: '赵胜男'},
            {value: 'SXM', name: '孙小美'},
            {value: 'QDD', name: '钱多多'},
            {value: 'LBG', name: '李表哥'},
            {value: 'ZDZ', name: '周大壮'},
            {value: 'WQY', name: '吴情义'},
            {value: 'ZJR', name: '郑经人'},
          ],
          characterName:"",
    },

    radioChange(e) {
        this.data.characterName=e.detail.value;
        console.log(this.data.characterName);
        const items = this.data.items
        for (let i = 0, len = items.length; i < len; ++i) {
            items[i].checked = items[i].value === e.detail.value
        }

        this.setData({
            items
        })
    },

    getwxName(){
        wx.showModal({
            title:"请登录",
            content:"请授权登录使用~",
          success(res){
              if(res.confirm){
                wx.getUserProfile({
                    desc:'获取你的昵称，头像，地区及性别',
                    success: res =>{
                        console.log(res.userInfo);
                        app.globalData.wxName = res.userInfo.nickName;
                    },
                    fail:res=>{
                        console.log('fail ',res)
                    }
                })
              }
          }
        })
    },

    confirm(){
        if(this.data.characterName == ""){
            //wx.showToast("你是谁？");
            wx.showToast({
                title:'你是谁？',
                icon:'none',
                duration: 2000
               })
            return;
        }
        const db = wx.cloud.database();
        const nj = db.collection("NeiJuan");
        let i=0,Name="";
        for(;i<7;i++){
            if(this.data.items[i].value == this.data.characterName)
                Name=this.data.items[i].name;
        }
        console.log(Name);
        nj.add({
            data: {
                _id:this.data.characterName,
                wxName:app.globalData.wxName,
                character:Name,
                yinghe:0,
                yingheP:0,
                kongbu:0,
                kongbuP:0,
                jizhi:0,
                jizhiP:0,
                qinggan:0,
                qingganP:0,
                liabilities:0,
                guarantor:'',
            },
            success: function(res) {
                console.log(res)
            }
        })
        wx.navigateTo({
            url:"../playerMain/playerMain"
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
        this.getwxName();
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