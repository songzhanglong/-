//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list:[
      'view','scroll-view','swiper',
      'icon','text','progress',
      'button','checkbox','form',
      'input','label','picker',
      'picker-view','radio','slider',
      'switch','textarea','navigator',
      'audio','image','video','map',
      'canvas','contact-button'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapText:function(e){
    var currentId = Number(e.target.id)
    if (currentId >= this.data.list.length){
      console.log("end");
    }
    else{
      var curPage = this.data.list[currentId]
      var lastUrl = "../" + curPage + "/" + curPage
      wx.navigateTo({
        url: lastUrl
      })
    }
  }
})
