// pages/video/video.js
function getRandomColor(){
  let rgb = []
  for (let i = 0;i < 3;i++) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data:{
    src:'',
    danmuList:[
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  inputValue: '',
  bindInputBlur:function(e){
    this.inputValue = e.detail.value
  },
  onReady:function(){
    // 页面渲染完成
    this.videoContext = wx.createVideoContext("myVideo")
  },
  bindButtonTap:function(e){
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄
      // maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
      camera: ['front', 'back'],
      success: function(res){
        that.setData({
          src: res.tempFilePath
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  bindSendDanmu:function(e){
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  onUnload:function(){
    // 页面关闭
  }
})