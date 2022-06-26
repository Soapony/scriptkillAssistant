//获取应用实例
const app = getApp()

Page({
  data: {

  },

  // 当组件输入数字6位数时的自定义函数
  initData(e) {
    console.log(e)
    // 模态交互效果
    if(e.detail == "123456"){
      wx.showToast({
        title: '密码正确',
        icon:'none',
        duration:1000
      })
      wx.navigateTo({
        url:"../main/main"
    })
    }
    else{
      wx.showToast({
        title:'密码错误',
        icon:'none',
        duration:1000
      })
    }
  }
})