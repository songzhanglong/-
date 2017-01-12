// pages/picker-view/picker-view.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1999;i <= date.getFullYear();i++){
  years.push(i);
}

for (let i = 1;i <= 12;i++){
  months.push(i);
}

for (let i = 1;i <= 31;i++){
  days.push(i);
}

Page({
  data:{
    years:years,
    year:date.getFullYear(),
    months:months,
    month:2,
    days:days,
    day:2,
    value:[9999,1,1]
  },
  bindChange:function(e){
    const val = e.detail.value
    this.setData({
      year:this.data.years[val[0]],
      month:this.data.months[val[1]],
      day:this.data.days[val[2]],
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})