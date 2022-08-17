//index.js
const app = getApp()
Page({

  data: {
    src:'/images/dog.png',
    name:'Hello World'
  },

  onLoad(){
    if(wx.getUserProfile){
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getMyInfo: function(e){
    wx.getUserProfile({
      desc: '展示用户信息',
      success:(res)=>{
        console.log(res)
        this.setData({
          src: res.userInfo.avatarUrl,
          name: res.userInfo.nickName
        })
      }
    })
  },
})