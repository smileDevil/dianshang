//index.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    imgUrls: [
      '../imgs/jiaju01.jpg',
      '../imgs/jiaju02.jpg',
      '../imgs/jiaju03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    proList: [
      {
        proName: "梓桐木家具",
        proPrice: 200.00
      },
      {
        proName: "紫木家具",
        proPrice: 290.00
      },
      {
        proName: "红木木家具",
        proPrice: 2000.00
      },
      {
        proName: "百花木家具",
        proPrice: 100.00
      },
      {
        proName: "奇葩木家具",
        proPrice: 20000.00
      },
      {
        proName: "测试木家具",
        proPrice: 2200.00
      },
      {
        proName: "桃木家具",
        proPrice: 2900.00
      },
      {
        proName: "杨木家具",
        proPrice: 10000.00
      }
    ]
  },

  

  logBtnClick : function(){
    wx.navigateTo({
      url: '/pages/jump/jump',
    })
  }
})