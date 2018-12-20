
const app = getApp()

Page({
  data:{},


  gotoDetails : function(){

    wx.navigateTo({
      url: '/pages/details/details',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})